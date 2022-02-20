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

const getLastKey = (chord) => {
  const filteredChord = chord.filter(item => item.pianoKey);
  const lastItemIndex = filteredChord.length - ONE;

  return filteredChord[lastItemIndex].pianoKey;
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
  const rootIndex = pianoKeyListWithoutAccidentals.findIndex(key => key === item.pianoKey);
  const uniqueChord = getUniqueChord(item.chord).map(chordKey => {
    return {
      ...chordKey,
      pianoKey: getPianoKey(rootIndex + chordKey.value)
    };
  });
  const { isStemmedNoteFlipped, showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote } = item;
  const noteType = { showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote };
  const lastKey = getLastKey(uniqueChord);

  const chordData = [item].concat(uniqueChord);
  const chordPianoKeys = chordData.map(d => d.pianoKey);
  const shiftedAccidentals = getShiftedAccidentals(item);
  const adjacentNotes = getAdjacentNotes({
    isStemmedNoteFlipped,
    chordPianoKeys
  });
  const chordNoteTypes = getChordNoteTypes({
    adjacentNotes,
    isStemmedNoteFlipped,
    noteType,
    size: item.chord.length + ONE
  });
  const shouldShiftDotted = adjacentNotes.some(isAdjacent => isAdjacent) && !item.isStemmedNoteFlipped;

  const rootNote = getChordNote({
    isStemmedNoteFlipped,
    shouldShiftDotted,
    lastKey,
    pianoKey: chordPianoKeys[ZERO],
    isAdjacentNote: adjacentNotes[ZERO],
    noteType: chordNoteTypes[ZERO],
    shouldShiftAccidental: shiftedAccidentals[ZERO],
    conditions: chordData[ZERO]
  });
  const secondNote = getChordNote({
    isStemmedNoteFlipped,
    shouldShiftDotted,
    pianoKey: chordPianoKeys[ONE],
    isAdjacentNote: adjacentNotes[ONE],
    noteType: chordNoteTypes[ONE],
    shouldShiftAccidental: shiftedAccidentals[ONE],
    conditions: {
      ...chordData[ONE],
      showDotted: item.showDotted
    }
  });
  const thirdNote = getChordNote({
    isStemmedNoteFlipped,
    shouldShiftDotted,
    pianoKey: chordPianoKeys[TWO],
    isAdjacentNote: adjacentNotes[TWO],
    noteType: chordNoteTypes[TWO],
    shouldShiftAccidental: shiftedAccidentals[TWO],
    conditions: {
      ...chordData[TWO],
      showDotted: item.showDotted
    }
  });
  const fourthNote = getChordNote({
    isStemmedNoteFlipped,
    shouldShiftDotted,
    pianoKey: chordPianoKeys[THREE],
    isAdjacentNote: adjacentNotes[THREE],
    noteType: chordNoteTypes[THREE],
    shouldShiftAccidental: shiftedAccidentals[THREE],
    conditions: {
      ...chordData[THREE],
      showDotted: item.showDotted
    }
  });
  const fifthNote = getChordNote({
    isStemmedNoteFlipped,
    shouldShiftDotted,
    pianoKey: chordPianoKeys[FOUR],
    isAdjacentNote: adjacentNotes[FOUR],
    noteType: chordNoteTypes[FOUR],
    shouldShiftAccidental: shiftedAccidentals[FOUR],
    conditions: {
      ...chordData[FOUR],
      showDotted: item.showDotted
    }
  });

  return [...rootNote,...secondNote,...thirdNote,...fourthNote,...fifthNote];
};

export {
  getChordSubcomponent
};