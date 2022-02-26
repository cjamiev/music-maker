import { pianoKeyListWithoutAccidentals } from 'constants/pianokeys';
import { mapNotePosition, mapNoteLedgerPosition, mapStaffLines } from 'constants/stafflines';
import { getNoteType } from './noteTypeMapper';
import {
  getAccidentals,
  getTopSymbols,
  getDotted
} from './modifiersMapper';
import {
  getPianoKey,
  getOrganizedChordData,
  getUniqueNotes,
  getShiftedAccidentals,
  getAdjacentNotes,
  getChordNoteTypes
} from './chordHelper';

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const ADJACENT_NOTE_TRANSLATE_X = 7;

const getRootStaccato = (root, showStaccato, isNoteFlipped) => {
  return getTopSymbols({ showStaccato: isNoteFlipped ? false: showStaccato, pianoKey: root });
};

const getDottedSymbols = ({chordPianoKeys, adjacentNotes, showDotted, isNoteFlipped}) => {
  const shouldShiftDottedX = adjacentNotes.some(isAdjacent => isAdjacent) && !isNoteFlipped;

  return chordPianoKeys.filter(Boolean).map((pianoKey, index) => {
    const shouldShiftDottedY = adjacentNotes[index];

    return getDotted({ showDotted, shouldShiftDottedX, shouldShiftDottedY, isNoteFlipped, pianoKey });
  });
};

const getLastKeySymbols = (lastPianoKey, noteTopSymbols, isNoteFlipped) => {
  return getTopSymbols({ ...noteTopSymbols, showStaccato: isNoteFlipped ? noteTopSymbols.showStaccato : false, pianoKey: lastPianoKey });
};

const getChordLedgers = ({ chordPianoKeys, adjacentNotes }) => {
  return chordPianoKeys.map((pianoKey, index) => {
    const shiftX = -ADJACENT_NOTE_TRANSLATE_X;
    const shiftY = mapNoteLedgerPosition[pianoKey];

    return adjacentNotes[index] && shiftY && { component:'ChordLedger', transform:`translate(${shiftX},${shiftY})`, conditions: {}};
  });
};

const getChordNote = ({
  pianoKey,
  isAdjacentNote,
  isNoteFlipped,
  noteType,
  conditions,
  shouldShiftAccidental,
  shouldShiftAccidentalsMore
}) => {
  if(!pianoKey) {
    return [];
  }

  return [
    getNoteType({ pianoKey, isAdjacentNote, isNoteFlipped, ...noteType }),
    getAccidentals({
      ...conditions,
      shouldShiftAccidental,
      shouldShiftAccidentalsMore,
      pianoKey
    })
  ];
};

const getChordSubcomponent = (item) => {
  const { pianoKey, isNoteFlipped, showDotted, chordSize } = item;
  const { chordData, noteType, noteTopSymbols, lastPianoKey } = getOrganizedChordData(item);
  const chordPianoKeys = chordData.map(d => d.pianoKey);

  const shiftedAccidentals = getShiftedAccidentals(chordData);
  const adjacentNotes = getAdjacentNotes({
    isNoteFlipped,
    chordPianoKeys
  });
  const chordNoteTypes = getChordNoteTypes({
    adjacentNotes,
    isNoteFlipped,
    noteType,
    size: chordSize + ONE
  });
  const shouldShiftAccidentalsMore = adjacentNotes.some(isAdjacent => isAdjacent) && isNoteFlipped;

  const rootStaccato = getRootStaccato(pianoKey, noteTopSymbols.showStaccato, isNoteFlipped);
  const dottedSymbols = getDottedSymbols({chordPianoKeys, adjacentNotes, showDotted, isNoteFlipped});
  const lastKeySymbols = getLastKeySymbols(lastPianoKey, noteTopSymbols, isNoteFlipped);
  const chordLedgers = getChordLedgers({chordPianoKeys, adjacentNotes});
  const chordNotes = chordPianoKeys.map((chordPiano,index) => {
    return getChordNote({
      isNoteFlipped,
      shouldShiftAccidentalsMore,
      pianoKey: chordPiano,
      isAdjacentNote: adjacentNotes[index],
      noteType: chordNoteTypes[index],
      shouldShiftAccidental: shiftedAccidentals[index],
      conditions: chordData[index]
    });
  }).reduce((entry,acc) => { return acc.concat(entry); },[]);
  const staffComponent = { component:'Staff', transform:'translate(0,0)', conditions: mapStaffLines[isNoteFlipped ? lastPianoKey : pianoKey]};

  return [...rootStaccato, ...dottedSymbols, ...lastKeySymbols, ...chordNotes, ...chordLedgers, staffComponent].filter(Boolean);
};

export {
  getChordSubcomponent
};