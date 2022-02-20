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
const ADJUST_Y = -10;
const STACCATO_ADJUSTMENT = 5;
const STAFF_MIDPOINT = 26;
const STAFF_TOPPOINT = 33;

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
const getTopSymbols = ({
  showStaccato,
  showAccent,
  showTenuto,
  showFermata,
  showTrill,
  pianoKey
}) => {
  const staccatoTranslateY = showStaccato ? mapStaccatoPosition[pianoKey] : ZERO;
  const staccatoShift = pianoKeyList.findIndex(key => key === pianoKey) > STAFF_TOPPOINT
    ? staccatoTranslateY + STACCATO_ADJUSTMENT : ZERO;
  const accentTranslateY = showAccent || showTenuto ? staccatoShift + ADJUST_Y : staccatoShift;
  const fermataTranslateY = showFermata ? accentTranslateY + ADJUST_Y : accentTranslateY;
  const trillTranslateY = fermataTranslateY + ADJUST_Y;

  return [
    showStaccato && { component:'Staccato', transform:`translate(0,${staccatoTranslateY})`, conditions:{}},
    showAccent && { component:'Accent', transform:`translate(0,${accentTranslateY})`, conditions:{}},
    showTenuto && { component:'Tenuto', transform:`translate(0,${accentTranslateY})`, conditions:{}},
    showFermata && { component:'Fermata', transform:`translate(0,${fermataTranslateY})`, conditions:{}},
    showTrill && { component:'Trill', transform:`translate(0,${trillTranslateY})`, conditions:{}}
  ];
};

const getNoteAccidentals = ({
  showNoteFlat,
  showNoteSharp,
  showNoteNatural,
  shouldShiftAccidental,
  pianoKey
}) => {
  const translateY = mapNotePosition[pianoKey];
  const accidentalTranslateX = shouldShiftAccidental ? -ADJACENT_NOTE_TRANSLATE_X: ZERO;

  return [
    showNoteFlat && { component:'NoteFlat', transform:`translate(${accidentalTranslateX},${translateY})`, conditions:{}},
    showNoteSharp && { component:'NoteSharp', transform:`translate(${accidentalTranslateX},${translateY})`, conditions:{}},
    showNoteNatural && { component:'NoteNatural', transform:`translate(${accidentalTranslateX},${translateY})`, conditions:{}}
  ];
};

const getNoteModifier = ({
  showDotted,
  showNoteFlat,
  showNoteSharp,
  showNoteNatural,
  showStaccato,
  showAccent,
  showTenuto,
  showFermata,
  showTrill,
  pianoKey,
  shouldShiftAccidental,
  shouldShiftDotted
}) => {
  const dottedTranslateX = shouldShiftDotted ? ADJACENT_NOTE_TRANSLATE_X: ZERO;

  return [
    showDotted && { component:'Dotted', transform:`translate(${dottedTranslateX},${mapDottedPosition[pianoKey]})`, conditions:{}},
    ...getNoteAccidentals({
      showNoteFlat,
      showNoteSharp,
      showNoteNatural,
      shouldShiftAccidental,
      pianoKey
    }),
    ...getTopSymbols({
      showStaccato,
      showAccent,
      showTenuto,
      showFermata,
      showTrill,
      pianoKey
    })
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
  shouldShiftAccidental,
  shouldShiftDotted
}) => {
  if(!pianoKey) {
    return [];
  }

  return [
    getNoteType({ pianoKey, isAdjacentNote, isStemmedNoteFlipped, ...noteType}),
    ...getNoteModifier({...conditions, pianoKey, shouldShiftAccidental, shouldShiftDotted })
  ];
};

const getLastNoteModifiers = ({
  pianoKey,
  isStemmedNoteFlipped,
  showStaccato
}) => {
  if(!pianoKey) {
    return [];
  }

  return [...getNoteModifier({ pianoKey, showStaccato: isStemmedNoteFlipped && showStaccato })];
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
  const shouldShiftDotted = adjacentNotes.some(isAdjacent => isAdjacent) && item.isStemmedNoteFlipped;

  const rootNote = getChordNote({
    pianoKey: item.pianoKey,
    isAdjacentNote: adjacentNotes[ZERO],
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    noteType: chordNoteTypes[ZERO],
    conditions: {
      ...item,
      showStaccato: item.isStemmedNoteFlipped ? false : item.showStaccato
    },
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
  const lastNoteModifier = getLastNoteModifiers({ ...item, pianoKey: lastKey });

  return [...rootNote,...secondNote,...thirdNote,...fourthNote,...fifthNote, ...lastNoteModifier];
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