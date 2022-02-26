import { pianoKeyListWithoutAccidentals } from 'constants/pianokeys';
import { mapNotePosition, mapNoteLedgerPosition } from 'constants/stafflines';
import { getNoteType } from './noteTypeMapper';
import {
  getAccidentals,
  getTopSymbols,
  getDotted
} from './modifiersMapper';
import {
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

const getPianoKey = (index = -ONE) => pianoKeyListWithoutAccidentals[index - ONE] || '';

const getRootStaccato = (root, showStaccato, isStemmedNoteFlipped) => {
  return getTopSymbols({ showStaccato: isStemmedNoteFlipped ? false: showStaccato, pianoKey: root });
};

const getDottedSymbols = ({chordPianoKeys, adjacentNotes, showDotted, isStemmedNoteFlipped}) => {
  const shouldShiftDottedX = adjacentNotes.some(isAdjacent => isAdjacent) && !isStemmedNoteFlipped;

  return chordPianoKeys.filter(Boolean).map((pianoKey, index) => {
    const shouldShiftDottedY = adjacentNotes[index];

    return getDotted({ showDotted, shouldShiftDottedX, shouldShiftDottedY, isStemmedNoteFlipped, pianoKey });
  });
};

const getLastKeySymbols = (chord, noteTopSymbols, isStemmedNoteFlipped) => {
  const filteredChord = chord.filter(item => item.pianoKey);
  const lastItemIndex = filteredChord.length - ONE;
  const pianoKey = lastItemIndex >= ZERO ? filteredChord[lastItemIndex].pianoKey : '';

  return getTopSymbols({ ...noteTopSymbols, showStaccato: isStemmedNoteFlipped ? noteTopSymbols.showStaccato : false, pianoKey });
};

const getChordLedger = ({ pianoKey, isAdjacentNote, isStemmedNoteFlipped }) => {
  const shiftX = isAdjacentNote ? (Number(isStemmedNoteFlipped)*-ONE)*(ADJACENT_NOTE_TRANSLATE_X) : ZERO;
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
  isStemmedNoteFlipped,
  noteType,
  conditions,
  shouldShiftAccidental,
  shouldShiftAccidentalsMore
}) => {
  if(!pianoKey) {
    return [];
  }

  return [
    ...getChordLedger({ pianoKey, isAdjacentNote, isStemmedNoteFlipped}),
    getNoteType({ pianoKey, isAdjacentNote, isStemmedNoteFlipped, ...noteType }),
    getAccidentals({
      ...conditions,
      shouldShiftAccidental,
      shouldShiftAccidentalsMore,
      pianoKey
    })
  ];
};

const getChordSubcomponent = (item) => {
  const rootIndex = pianoKeyListWithoutAccidentals.findIndex(key => key === item.pianoKey);
  const uniqueAddedNotes = getUniqueNotes(item.addedNotes).map(addedNoteItem => {
    return {
      ...addedNoteItem,
      pianoKey: getPianoKey(rootIndex + addedNoteItem.value)
    };
  });
  const {
    isStemmedNoteFlipped,
    showStaccato, showAccent, showTenuto, showFermata, showTrill,
    showDotted,
    showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote
  } = item;
  const noteType = { showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote };
  const noteTopSymbols = { showStaccato, showAccent, showTenuto, showFermata, showTrill };

  const chordData = [item].concat(uniqueAddedNotes);
  const chordPianoKeys = chordData.map(d => d.pianoKey);
  const shiftedAccidentals = getShiftedAccidentals(chordData);
  const adjacentNotes = getAdjacentNotes({
    isStemmedNoteFlipped,
    chordPianoKeys
  });
  const chordNoteTypes = getChordNoteTypes({
    adjacentNotes,
    isStemmedNoteFlipped,
    noteType,
    size: item.chordSize + ONE
  });
  const shouldShiftAccidentalsMore = adjacentNotes.some(isAdjacent => isAdjacent) && item.isStemmedNoteFlipped;

  const rootStaccato = getRootStaccato(item.pianoKey, showStaccato, isStemmedNoteFlipped);
  const dottedSymbols = getDottedSymbols({chordPianoKeys, adjacentNotes, showDotted, isStemmedNoteFlipped});
  const lastKeySymbols = getLastKeySymbols(uniqueAddedNotes, noteTopSymbols, isStemmedNoteFlipped);
  const chordNotes = chordPianoKeys.map((chordPiano,index) => {
    return getChordNote({
      isStemmedNoteFlipped,
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