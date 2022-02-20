import { mapNotePosition, mapStaffLines } from 'constants/stafflines';
import { pianoKeyList, pianoKeyListWithoutAccidentals } from 'constants/pianokeys';
import { getNoteModifier } from './modifiersMapper';
import { getShiftedAccidentals, getAdjacentNotes, getChordNoteTypes } from './chordMapper';

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const ADJACENT_NOTE_TRANSLATE_X = 7;
const STAFF_MIDPOINT = 26;

const getPianoKey = (index = -ONE) => {
  return pianoKeyListWithoutAccidentals[index - ONE] || '';
};

const getUniqueChord = (chord) => {
  const secondValue = chord[ZERO].value;
  const thirdValue = chord[ONE].value;
  const fourthValue = chord[TWO].value;
  const fifthValue = chord[THREE].value;

  const unqiueChord = [
    chord[ZERO],
    thirdValue === secondValue ? {} : chord[ONE],
    fourthValue === secondValue || fourthValue === thirdValue ? {} : chord[TWO],
    fifthValue === secondValue || fifthValue === thirdValue || fifthValue === fourthValue ? {} : chord[THREE]
  ];

  return unqiueChord;
};

const getNoteType = ({
  showWholeNote,
  showHalfNote,
  showQuarterNote,
  showEighthNote,
  showSixteenthNote,
  isStemmedNoteFlipped,
  isAdjacentNote,
  pianoKey
}) => {
  const translateY = mapNotePosition[pianoKey];
  const translateX = isAdjacentNote ? (-ONE+TWO*Number(!isStemmedNoteFlipped)) * ADJACENT_NOTE_TRANSLATE_X: ZERO;

  if (showWholeNote) {
    return { component: 'WholeNote', transform:`translate(${translateX},${translateY})`, conditions: {}};
  }

  const conditions = { showNoteStem: !isAdjacentNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote };

  return { component: isStemmedNoteFlipped ? 'StemmedNoteFlipped' : 'StemmedNote', transform:`translate(${translateX},${translateY})`, conditions};
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

  const noteModifiers = lastKey && isStemmedNoteFlipped
    ? getNoteModifier({ ...conditions, pianoKey: lastKey, showStaccato: isStemmedNoteFlipped && conditions.showStaccato, shouldShiftAccidental, shouldShiftDotted })
    : getNoteModifier({...conditions, pianoKey, shouldShiftAccidental, shouldShiftDotted });

  return [
    getNoteType({ pianoKey, isAdjacentNote, isStemmedNoteFlipped, ...noteType}),
    ...noteModifiers
  ];
};

const getChordSubcomponent = (item) => {
  const [chordNote2, chordNote3, chordNote4, chordNote5] = item.chord;
  const { showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote } = item;
  const noteType = { showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote };
  const rootIndex = pianoKeyListWithoutAccidentals.findIndex(key => key === item.pianoKey);
  const secondIndex = rootIndex + chordNote2.value;
  const secondPianoKey = getPianoKey(secondIndex);
  const thirdIndex = rootIndex + chordNote3.value;
  const thirdPianoKey = getPianoKey(thirdIndex);
  const fourthIndex = rootIndex + chordNote4.value;
  const fourthPianoKey = getPianoKey(fourthIndex);
  const fifthIndex = rootIndex + chordNote5.value;
  const fifthPianoKey = getPianoKey(fifthIndex);
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

const getNoteSubcomponents = (item) => {
  if(item.component !== 'Note') {
    return [];
  }

  const rootPianoKey = item.pianoKey.replace('#','');
  const isStemmedNoteFlipped = pianoKeyList.findIndex(key => key === rootPianoKey) > STAFF_MIDPOINT;
  const sharpConditional = item.pianoKey.includes('#')
    ? { showNoteSharp: true }
    : { };
  const uniqueChord = getUniqueChord(item.chord);
  const filteredChord = uniqueChord.filter(note => note.value);
  const updatedItem = {
    ...item,
    pianoKey: rootPianoKey,
    isStemmedNoteFlipped,
    ...sharpConditional,
    chord: uniqueChord
  };
  const noteSubcomponent = filteredChord.length > ZERO
    ? getChordSubcomponent(updatedItem)
    : [getNoteType(updatedItem), ...getNoteModifier(updatedItem)];

  return [
    { component:'Staff', transform:'translate(0,0)', conditions: mapStaffLines[rootPianoKey]},
    ...noteSubcomponent
  ];
};

export {
  getNoteSubcomponents
};