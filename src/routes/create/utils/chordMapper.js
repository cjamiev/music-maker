import { pianoKeyListWithoutAccidentals } from 'constants/pianokeys';
import { getNoteType } from './noteTypeMapper';
import { getNoteModifier } from './modifiersMapper';
import {
  getUniqueChord,
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

const getPianoKey = (index = -ONE) => {
  return pianoKeyListWithoutAccidentals[index - ONE] || '';
};

const getChordNote = ({
  pianoKey,
  isAdjacentNote,
  isStemmedNoteFlipped,
  noteType,
  conditions,
  shouldShiftAccidental,
  shouldShiftDotted,
  lastKey
}) => {
  if(!pianoKey) {
    return [];
  }

  const noteData = lastKey && isStemmedNoteFlipped
    ? {...conditions, pianoKey: lastKey, shouldShiftAccidental, shouldShiftDotted,
      showStaccato: isStemmedNoteFlipped && conditions.showStaccato }
    : {...conditions, pianoKey, shouldShiftAccidental, shouldShiftDotted };

  return [
    getNoteType({ pianoKey, isAdjacentNote, isStemmedNoteFlipped, ...noteType}),
    ...getNoteModifier(noteData)
  ];
};

const getChordSubcomponent = (item) => {
  const [chordNote2, chordNote3, chordNote4, chordNote5] = getUniqueChord(item.chord);
  const { showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote } = item;
  const noteType = { showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote };
  const rootIndex = pianoKeyListWithoutAccidentals.findIndex(key => key === item.pianoKey);
  const secondPianoKey = getPianoKey(rootIndex + chordNote2.value);
  const thirdPianoKey = getPianoKey(rootIndex + chordNote3.value);
  const fourthPianoKey = getPianoKey(rootIndex + chordNote4.value);
  const fifthPianoKey = getPianoKey(rootIndex + chordNote5.value);
  const lastKey = fifthPianoKey || fourthPianoKey || thirdPianoKey || secondPianoKey;

  const shiftedAccidentals = getShiftedAccidentals(item);
  const adjacentNotes = getAdjacentNotes({
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    pianoKey: item.pianoKey,
    secondPianoKey,
    thirdPianoKey,
    fourthPianoKey,
    fifthPianoKey
  });
  const chordNoteTypes = getChordNoteTypes({
    adjacentNotes,
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    noteType,
    size: item.chord.length + ONE
  });
  const shouldShiftDotted = adjacentNotes.some(isAdjacent => isAdjacent) && !item.isStemmedNoteFlipped;

  const rootNote = getChordNote({
    pianoKey: item.pianoKey,
    lastKey,
    isAdjacentNote: adjacentNotes[ZERO],
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    noteType: chordNoteTypes[ZERO],
    conditions: item,
    shouldShiftDotted
  });
  const secondNote = getChordNote({
    pianoKey: secondPianoKey,
    isAdjacentNote: adjacentNotes[ONE],
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    noteType: chordNoteTypes[ONE],
    conditions: {
      ...chordNote2,
      showDotted: item.showDotted
    },
    shouldShiftAccidental: shiftedAccidentals[ZERO],
    shouldShiftDotted
  });
  const thirdNote = getChordNote({
    pianoKey: thirdPianoKey,
    isAdjacentNote: adjacentNotes[TWO],
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    noteType: chordNoteTypes[TWO],
    conditions: {
      ...chordNote3,
      showDotted: item.showDotted
    },
    shouldShiftAccidental: shiftedAccidentals[ONE],
    shouldShiftDotted
  });
  const fourthNote = getChordNote({
    pianoKey: fourthPianoKey,
    isAdjacentNote: adjacentNotes[THREE],
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    noteType: chordNoteTypes[THREE],
    conditions: {
      ...chordNote4,
      showDotted: item.showDotted
    },
    shouldShiftAccidental: shiftedAccidentals[TWO],
    shouldShiftDotted
  });
  const fifthNote = getChordNote({
    pianoKey: fifthPianoKey,
    isAdjacentNote: adjacentNotes[FOUR],
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    noteType: chordNoteTypes[FOUR],
    conditions: {
      ...chordNote5,
      showDotted: item.showDotted
    },
    shouldShiftAccidental: shiftedAccidentals[THREE],
    shouldShiftDotted
  });

  return [...rootNote,...secondNote,...thirdNote,...fourthNote,...fifthNote];
};

export {
  getChordSubcomponent
};