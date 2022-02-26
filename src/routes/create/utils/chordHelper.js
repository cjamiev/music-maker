import { pianoKeyListWithoutAccidentals } from 'constants/pianokeys';

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;

const getPianoKey = (index = -ONE) => pianoKeyListWithoutAccidentals[index - ONE] || '';

const getOrganizedChordData = (data) => {
  const {
    pianoKey,
    addedNotes,
    showStaccato, showAccent, showTenuto, showFermata, showTrill,
    showNoteFlat, showNoteSharp, showNoteNatural,
    showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote
  } = data;

  const rootIndex = pianoKeyListWithoutAccidentals.findIndex(key => key === pianoKey);
  const uniqueAddedNotes = getUniqueNotes(addedNotes).map(addedNoteItem => {
    return {
      ...addedNoteItem,
      pianoKey: getPianoKey(rootIndex + addedNoteItem.value)
    };
  });

  const filteredChord = uniqueAddedNotes.filter(item => item.pianoKey);
  const lastItemIndex = filteredChord.length - ONE;
  const lastPianoKey = lastItemIndex >= ZERO ? filteredChord[lastItemIndex].pianoKey : '';

  const noteType = { showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote };
  const noteTopSymbols = { showStaccato, showAccent, showTenuto, showFermata, showTrill };
  const chordData = [{ pianoKey, showNoteFlat, showNoteSharp, showNoteNatural}].concat(uniqueAddedNotes);

  return { chordData, noteType, noteTopSymbols, lastPianoKey };
};

const getUniqueNotes = (notes) => {
  const secondValue = notes[ZERO].value;
  const thirdValue = notes[ONE].value;
  const fourthValue = notes[TWO].value;
  const fifthValue = notes[THREE].value;

  const unqiueNotes = [
    notes[ZERO],
    thirdValue === secondValue ? {} : notes[ONE],
    fourthValue === secondValue || fourthValue === thirdValue ? {} : notes[TWO],
    fifthValue === secondValue || fifthValue === thirdValue || fifthValue === fourthValue ? {} : notes[THREE]
  ];

  return unqiueNotes;
};

const getHasAccidental = ({ showNoteFlat, showNoteNatural, showNoteSharp }) => {
  return showNoteFlat || showNoteNatural || showNoteSharp;
};

const getShiftedAccidentals = (chordPianoKeys) => {
  const isSecondNoteShifted = getHasAccidental(chordPianoKeys[ZERO]);
  const isThirdNoteShifted = !isSecondNoteShifted && (getHasAccidental(chordPianoKeys[ONE]));
  const isFourthNoteShifted = !isThirdNoteShifted && (getHasAccidental(chordPianoKeys[TWO]));
  const isFifthNoteShifted = !isFourthNoteShifted && (getHasAccidental(chordPianoKeys[THREE]));

  return [false, isSecondNoteShifted,isThirdNoteShifted,isFourthNoteShifted,isFifthNoteShifted];
};

const getAdjacentNotes = ({
  isNoteFlipped,
  chordPianoKeys
}) => {
  const rootIndex = pianoKeyListWithoutAccidentals.findIndex(letter => chordPianoKeys[ZERO].includes(letter));
  const secondIndex = pianoKeyListWithoutAccidentals.findIndex(letter => chordPianoKeys[ONE].includes(letter));
  const thirdIndex = pianoKeyListWithoutAccidentals.findIndex(letter => chordPianoKeys[TWO].includes(letter));
  const fourthIndex = pianoKeyListWithoutAccidentals.findIndex(letter => chordPianoKeys[THREE].includes(letter));
  const fifthIndex = pianoKeyListWithoutAccidentals.findIndex(letter => chordPianoKeys[FOUR].includes(letter));

  const isSecondNoteAdjacent = (secondIndex - rootIndex) === ONE;
  const isThirdNoteAdjacent = isSecondNoteAdjacent ? false : (thirdIndex - secondIndex) === ONE;
  const isFourthNoteAdjacent = isThirdNoteAdjacent ? false : (fourthIndex - thirdIndex) === ONE;
  const isFifthNoteAdjacent = isFourthNoteAdjacent ? false : (fifthIndex - fourthIndex) === ONE;

  return (!isNoteFlipped)
    ? [false, isSecondNoteAdjacent, isThirdNoteAdjacent, isFourthNoteAdjacent, isFifthNoteAdjacent]
    : [isSecondNoteAdjacent, isThirdNoteAdjacent, isFourthNoteAdjacent, isFifthNoteAdjacent, false];
};

const getChordNoteTypes = ({ adjacentNotes, isNoteFlipped, noteType, size }) => {
  const noFlagsNoteType = {
    ...noteType,
    showEighthNote: false,
    showSixteenthNote:false
  };

  if(isNoteFlipped) {
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
  getPianoKey,
  getOrganizedChordData,
  getUniqueNotes,
  getShiftedAccidentals,
  getAdjacentNotes,
  getChordNoteTypes
};