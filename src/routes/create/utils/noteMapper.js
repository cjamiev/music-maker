import {
  mapStaccatoPosition,
  mapDottedPosition,
  mapNotePosition,
  mapStaffLines
} from 'constants/stafflines';
import { pianoKeyList, pianoKeyListWithoutAccidentals } from 'constants/pianokeys';

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const ADJACENT_NOTE_TRANSLATE_X = 7;
const STAFF_MIDPOINT = 26;

const getPianoKey = (index = -ONE) => {
  const pianoKey = pianoKeyList[index];

  return !pianoKey ? '' : pianoKey.replace('#','');
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

// eslint-disable-next-line complexity
const getNoteModifier = ({
  showStaccato,
  showDotted,
  showNoteFlat,
  showNoteSharp,
  showNoteNatural,
  showAccent,
  showTenuto,
  showFermata,
  showTrill,
  pianoKey,
  shouldStagger
}) => {
  const translateY = mapNotePosition[pianoKey];
  const translateX = shouldStagger ? -ADJACENT_NOTE_TRANSLATE_X: ZERO;

  return [
    showStaccato && { component:'Staccato', transform:`translate(0,${mapStaccatoPosition[pianoKey]})`, conditions:{}},
    showDotted && { component:'Dotted', transform:`translate(0,${mapDottedPosition[pianoKey]})`, conditions:{}},
    showNoteFlat && { component:'NoteFlat', transform:`translate(${translateX},${translateY})`, conditions:{}},
    showNoteSharp && { component:'NoteSharp', transform:`translate(${translateX},${translateY})`, conditions:{}},
    showNoteNatural && { component:'NoteNatural', transform:`translate(${translateX},${translateY})`, conditions:{}},
    showAccent && { component:'Accent', transform:'translate(0,0)', conditions:{}},
    showTenuto && { component:'Tenuto', transform:'translate(0,0)', conditions:{}},
    showFermata && { component:'Fermata', transform:'translate(0,0)', conditions:{}},
    showTrill && { component:'Trill', transform:'translate(0,0)', conditions:{}}
  ].filter(Boolean);
};

// eslint-disable-next-line complexity
const getShiftedAccidentals = (item) => {
  const isSecondNoteShifted = item.showNoteFlat || item.showNoteNatural || item.showNoteSharp;
  const isThirdNoteShifted = !isSecondNoteShifted && (item.chord[ZERO].showNoteFlat || item.chord[ZERO].showNoteNatural || item.chord[ZERO].showNoteSharp);
  const isFourthNoteShifted = !isThirdNoteShifted && (item.chord[ONE].showNoteFlat || item.chord[ONE].showNoteNatural || item.chord[ONE].showNoteSharp);
  const isFifthNoteShifted = !isFourthNoteShifted && (item.chord[TWO].showNoteFlat || item.chord[TWO].showNoteNatural || item.chord[TWO].showNoteSharp);

  return [isSecondNoteShifted,isThirdNoteShifted,isFourthNoteShifted,isFifthNoteShifted];
};

const getAdjacentNotes = ({
  isStemmedNoteFlipped,
  pianoKey,
  secondPianoKey,
  thirdPianoKey,
  fourthPianoKey,
  fifthPianoKey
}) => {
  const rootIndex = pianoKeyListWithoutAccidentals.findIndex(letter => pianoKey.includes(letter));
  const secondIndex = pianoKeyListWithoutAccidentals.findIndex(letter => secondPianoKey.includes(letter));
  const thirdIndex = pianoKeyListWithoutAccidentals.findIndex(letter => thirdPianoKey.includes(letter));
  const fourthIndex = pianoKeyListWithoutAccidentals.findIndex(letter => fourthPianoKey.includes(letter));
  const fifthIndex = pianoKeyListWithoutAccidentals.findIndex(letter => fifthPianoKey.includes(letter));

  const isSecondNoteAdjacent = (secondIndex - rootIndex) === ONE;
  const isThirdNoteAdjacent = isSecondNoteAdjacent ? false : (thirdIndex - secondIndex) === ONE;
  const isFourthNoteAdjacent = isThirdNoteAdjacent ? false : (fourthIndex - thirdIndex) === ONE;
  const isFifthNoteAdjacent = isFourthNoteAdjacent ? false : (fifthIndex - fourthIndex) === ONE;

  return (!isStemmedNoteFlipped)
    ? [false, isSecondNoteAdjacent, isThirdNoteAdjacent, isFourthNoteAdjacent, isFifthNoteAdjacent]
    : [isSecondNoteAdjacent, isThirdNoteAdjacent, isFourthNoteAdjacent, isFifthNoteAdjacent, false];
};

const getChordNoteTypes = ({ adjacentNotes, isStemmedNoteFlipped, noteType, size }) => {
  const noFlagsNoteType = {
    ...noteType,
    showEighthNote: false,
    showSixteenthNote:false
  };

  if(isStemmedNoteFlipped) {
    const rootNoteType = adjacentNotes[ZERO] ? noFlagsNoteType : noteType;
    const secondNoteType = adjacentNotes[ZERO] ? noteType : noFlagsNoteType;

    return [rootNoteType,secondNoteType,noFlagsNoteType,noFlagsNoteType,noFlagsNoteType];
  } else {
    const lastNoteType = adjacentNotes[size - ONE] ? noFlagsNoteType : noteType;
    const secondLastNoteType = adjacentNotes[size - ONE] ? noteType : noFlagsNoteType;

    return Array.apply(null, Array(size)).map((x, i) => {
      if(i === size - ONE) {
        return lastNoteType;
      }
      else if(i === size - TWO) {
        return secondLastNoteType;
      }

      return noFlagsNoteType;
    });
  }
};

const getChordNote = ({
  pianoKey,
  isAdjacentNote,
  isStemmedNoteFlipped,
  noteType,
  conditions,
  shouldStagger
}) => {
  if(!pianoKey) {
    return [];
  }

  return [
    getNoteType({ pianoKey, isAdjacentNote, isStemmedNoteFlipped, ...noteType}),
    ...getNoteModifier({...conditions, pianoKey, shouldStagger})
  ];
};

const getChordSubcomponent = (item) => {
  const [chordNote2, chordNote3, chordNote4, chordNote5] = item.chord;
  const { showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote } = item;
  const noteType = { showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote };
  const rootIndex = pianoKeyList.findIndex(key => key === item.pianoKey);
  const secondIndex = rootIndex + chordNote2.value;
  const secondPianoKey = getPianoKey(secondIndex);
  const thirdIndex = rootIndex + chordNote3.value;
  const thirdPianoKey = getPianoKey(thirdIndex);
  const fourthIndex = rootIndex + chordNote4.value;
  const fourthPianoKey = getPianoKey(fourthIndex);
  const fifthIndex = rootIndex + chordNote5.value;
  const fifthPianoKey = getPianoKey(fifthIndex);

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


  const rootNote = getChordNote({
    pianoKey: item.pianoKey,
    isAdjacentNote: adjacentNotes[ZERO],
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    noteType: chordNoteTypes[ZERO],
    conditions: item
  });
  const secondNote = getChordNote({
    pianoKey: secondPianoKey,
    isAdjacentNote: adjacentNotes[ONE],
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    noteType: chordNoteTypes[ONE],
    conditions: chordNote2,
    shouldStagger: shiftedAccidentals[ZERO]
  });
  const thirdNote = getChordNote({
    pianoKey: thirdPianoKey,
    isAdjacentNote: adjacentNotes[TWO],
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    noteType: chordNoteTypes[TWO],
    conditions: chordNote3,
    shouldStagger: shiftedAccidentals[ONE]
  });
  const fourthNote = getChordNote({
    pianoKey: fourthPianoKey,
    isAdjacentNote: adjacentNotes[THREE],
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    noteType: chordNoteTypes[THREE],
    conditions: chordNote4,
    shouldStagger: shiftedAccidentals[TWO]
  });
  const fifthNote = getChordNote({
    pianoKey: fifthPianoKey,
    isAdjacentNote: adjacentNotes[FOUR],
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    noteType: chordNoteTypes[FOUR],
    conditions: chordNote5,
    shouldStagger: shiftedAccidentals[THREE]
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
  const updatedItem = {
    ...item,
    pianoKey: rootPianoKey,
    isStemmedNoteFlipped,
    ...sharpConditional,
    chord: uniqueChord
  };
  const noteSubcomponent = uniqueChord.length > ZERO
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