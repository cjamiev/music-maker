import {
  mapStaccatoPosition,
  mapDottedPosition,
  mapNotePosition,
  mapStaffLines
} from 'constants/stafflines';
import { pianoKeyList } from 'constants/pianokeys';

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const ADJACENT_NOTE_TRANSLATE_X = 7;
const STAFF_MIDPOINT = 26;

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
  pianoKey
}) => {
  const translateY = mapNotePosition[pianoKey];

  return [
    showStaccato && { component:'Staccato', transform:`translate(0,${mapStaccatoPosition[pianoKey]})`, conditions:{}},
    showDotted && { component:'Dotted', transform:`translate(0,${mapDottedPosition[pianoKey]})`, conditions:{}},
    showNoteFlat && { component:'NoteFlat', transform:`translate(0,${translateY})`, conditions:{}},
    showNoteSharp && { component:'NoteSharp', transform:`translate(0,${translateY})`, conditions:{}},
    showNoteNatural && { component:'NoteNatural', transform:`translate(0,${translateY})`, conditions:{}},
    showAccent && { component:'Accent', transform:'translate(0,0)', conditions:{}},
    showTenuto && { component:'Tenuto', transform:'translate(0,0)', conditions:{}},
    showFermata && { component:'Fermata', transform:'translate(0,0)', conditions:{}},
    showTrill && { component:'Trill', transform:'translate(0,0)', conditions:{}}
  ].filter(Boolean);
};

const getAdjacentNotes = ({
  isStemmedNoteFlipped,
  pianoKey,
  secondPianoKey,
  thirdPianoKey,
  fourthPianoKey,
  fifthPianoKey
}) => {
  const pianoKeys = ['A','B','C','D','E','F','G'];
  const rootIndex = pianoKeys.findIndex(letter => pianoKey.includes(letter));
  const secondIndex = pianoKeys.findIndex(letter => secondPianoKey.includes(letter));
  const thirdIndex = pianoKeys.findIndex(letter => thirdPianoKey.includes(letter));
  const fourthIndex = pianoKeys.findIndex(letter => fourthPianoKey.includes(letter));
  const fifthIndex = pianoKeys.findIndex(letter => fifthPianoKey.includes(letter));

  const isSecondNoteAdjacent = (secondIndex - rootIndex) === ONE;
  const isThirdNoteAdjacent = isSecondNoteAdjacent ? false : (thirdIndex - secondIndex) === ONE;
  const isFourthNoteAdjacent = isThirdNoteAdjacent ? false : (fourthIndex - thirdIndex) === ONE;
  const isFifthNoteAdjacent = isFourthNoteAdjacent ? false : (fifthIndex - fourthIndex) === ONE;

  return (!isStemmedNoteFlipped)
    ? [false, isSecondNoteAdjacent, isThirdNoteAdjacent, isFourthNoteAdjacent, isFifthNoteAdjacent]
    : [isSecondNoteAdjacent, isThirdNoteAdjacent, isFourthNoteAdjacent, isFifthNoteAdjacent, false];
};

const getChordNoteType = ({ previousIndex, nextIndex, isStemmedNoteFlipped, noteType }) => {
  if(isStemmedNoteFlipped && previousIndex) {
    return {
      ...noteType,
      showEighthNote: false,
      showSixteenthNote:false
    };
  } else if (!isStemmedNoteFlipped && nextIndex) {
    return {
      ...noteType,
      showEighthNote: false,
      showSixteenthNote:false
    };
  }

  return noteType;
};

const getChordNote = ({
  pianoKey,
  isAdjacentNote,
  previousIndex,
  nextIndex,
  isStemmedNoteFlipped,
  noteType,
  chordNote
}) => {
  if(!chordNote) {
    return [];
  }

  const chordNoteType = getChordNoteType({ previousIndex, nextIndex, isStemmedNoteFlipped, noteType });

  return [
    getNoteType({...chordNote, pianoKey, isAdjacentNote, isStemmedNoteFlipped, ...chordNoteType}),
    ...getNoteModifier({...chordNote, pianoKey})
  ];
};

const getChordSubcomponent = (item) => {
  const [chordNote2, chordNote3, chordNote4, chordNote5] = item.chord;
  const { showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote } = item;
  const noteType = { showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote };
  const rootIndex = pianoKeyList.findIndex(key => key === item.pianoKey);
  const secondIndex = rootIndex + chordNote2.value;
  const secondPianoKey = pianoKeyList[secondIndex].replace('#','');
  const thirdIndex = chordNote3 ? rootIndex + chordNote3.value : ZERO;
  const thirdPianoKey = thirdIndex ? pianoKeyList[thirdIndex].replace('#','') : '';
  const fourthIndex = chordNote4 ? rootIndex + chordNote4.value : ZERO;
  const fourthPianoKey = fourthIndex ? pianoKeyList[fourthIndex].replace('#','') : '';
  const fifthIndex = chordNote5 ? rootIndex + chordNote5.value : ZERO;
  const fifthPianoKey = fifthIndex ? pianoKeyList[fifthIndex].replace('#','') : '';

  const adjacentNotes = getAdjacentNotes({
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    pianoKey: item.pianoKey,
    secondPianoKey,
    thirdPianoKey,
    fourthPianoKey,
    fifthPianoKey
  });

  const rootNote = getChordNote({
    pianoKey: item.pianoKey,
    isAdjacentNote: adjacentNotes[ZERO],
    previousIndex: ZERO,
    nextIndex: secondIndex,
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    noteType,
    chordNote: item
  });
  const secondNote = getChordNote({
    pianoKey: secondPianoKey,
    isAdjacentNote: adjacentNotes[ONE],
    previousIndex: rootIndex,
    nextIndex: thirdIndex,
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    noteType,
    chordNote: chordNote2
  });
  const thirdNote = getChordNote({
    pianoKey: thirdPianoKey,
    isAdjacentNote: adjacentNotes[TWO],
    previousIndex: secondIndex,
    nextIndex: fourthIndex,
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    noteType,
    chordNote: chordNote3
  });
  const fourthNote = getChordNote({
    pianoKey: fourthPianoKey,
    isAdjacentNote: adjacentNotes[THREE],
    previousIndex: thirdIndex,
    nextIndex: fifthIndex,
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    noteType,
    chordNote: chordNote4
  });
  const fifthNote = getChordNote({
    pianoKey: fifthPianoKey,
    isAdjacentNote: adjacentNotes[FOUR],
    previousIndex: fourthIndex,
    nextIndex: ZERO,
    isStemmedNoteFlipped: item.isStemmedNoteFlipped,
    noteType,
    chordNote: chordNote5
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
  const filteredChordWithoutRoot = item.chord.filter(chordItem => chordItem.value);
  const updatedItem = {
    ...item,
    pianoKey: rootPianoKey,
    isStemmedNoteFlipped,
    ...sharpConditional,
    chord: filteredChordWithoutRoot
  };
  const noteSubcomponent = filteredChordWithoutRoot.length > ZERO
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