import { pianoKeyListWithoutAccidentals } from 'constants/pianokeys';
import { mapNotePosition, mapNoteLedgerPosition } from 'constants/stafflines';
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

const getLastKeySymbols = (chord, noteTopSymbols, isNoteFlipped) => {
  const filteredChord = chord.filter(value => value);
  const lastItemIndex = filteredChord.length - ONE;
  const pianoKey = lastItemIndex >= ZERO ? filteredChord[lastItemIndex] : '';

  return getTopSymbols({ ...noteTopSymbols, showStaccato: isNoteFlipped ? noteTopSymbols.showStaccato : false, pianoKey });
};

const getChordLedger = ({ pianoKey, isAdjacentNote, isNoteFlipped }) => {
  const shiftX = isAdjacentNote ? (Number(isNoteFlipped)*-ONE)*(ADJACENT_NOTE_TRANSLATE_X) : ZERO;
  const shiftY = mapNoteLedgerPosition[pianoKey];

  if(!shiftY) {
    return [];
  }
  else if(shiftX) {
    return [
      { component:'ChordLedger', transform:`translate(${shiftX},${shiftY})`, conditions: {}},
      { component:'ChordLedger', transform:`translate(0.01,${shiftY})`, conditions: {}}
    ];
  }

  return [{ component:'ChordLedger', transform:`translate(0,${shiftY})`, conditions: {}}];
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
    ...getChordLedger({ pianoKey, isAdjacentNote, isNoteFlipped}),
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
  const { isNoteFlipped, showDotted, chordSize } = item;
  const { chordData, noteType, noteTopSymbols } = getOrganizedChordData(item);
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

  const rootStaccato = getRootStaccato(item.pianoKey, noteTopSymbols.showStaccato, isNoteFlipped);
  const dottedSymbols = getDottedSymbols({chordPianoKeys, adjacentNotes, showDotted, isNoteFlipped});
  const lastKeySymbols = getLastKeySymbols(chordPianoKeys, noteTopSymbols, isNoteFlipped);
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

  return [...rootStaccato, ...dottedSymbols, ...lastKeySymbols, ...chordNotes].filter(Boolean);
};

export {
  getChordSubcomponent
};