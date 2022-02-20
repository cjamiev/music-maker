import { pianoKeyListWithoutAccidentals } from 'constants/pianokeys';

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;

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

const getHasAccidental = ({ showNoteFlat, showNoteNatural, showNoteSharp }) => {
  return showNoteFlat || showNoteNatural || showNoteSharp;
};

const getShiftedAccidentals = (item) => {
  const isSecondNoteShifted = getHasAccidental(item);
  const isThirdNoteShifted = !isSecondNoteShifted && (getHasAccidental(item.chord[ZERO]));
  const isFourthNoteShifted = !isThirdNoteShifted && (getHasAccidental(item.chord[ONE]));
  const isFifthNoteShifted = !isFourthNoteShifted && (getHasAccidental(item.chord[TWO]));

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
  }

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
};

export {
  getUniqueChord,
  getShiftedAccidentals,
  getAdjacentNotes,
  getChordNoteTypes
};