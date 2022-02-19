/* eslint-disable complexity */
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
  // TODO move replace
  const translateY = mapNotePosition[pianoKey.replace('#','')];
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

const getChordSubcomponent = (item) => {
  const [chordNote2, chordNote3, chordNote4, chordNote5] = item.chord;
  const { showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote } = item;
  const noteType = { showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote };
  const rootIndex = pianoKeyList.findIndex(key => key === item.pianoKey);
  const isRootNoteAdjacent = item.isStemmedNoteFlipped && chordNote2.value - rootIndex < THREE;
  const rootNote = [getNoteType({...item, isAdjacentNote: isRootNoteAdjacent }), ...getNoteModifier(item)];
  const isNote2Adjacent = item.isStemmedNoteFlipped ? false: chordNote2.value < THREE;
  const secondPianoKey = pianoKeyList[rootIndex + chordNote2.value];
  const secondNote = [
    getNoteType({...chordNote2, pianoKey:secondPianoKey, isAdjacentNote: isNote2Adjacent, isStemmedNoteFlipped: item.isStemmedNoteFlipped, ...noteType}),
    ...getNoteModifier({...chordNote2, pianoKey: secondPianoKey})
  ];
  const isNote3Adjacent = chordNote3 && chordNote3.value - chordNote2.value < THREE;
  const thirdPianoKey = chordNote3 && pianoKeyList[rootIndex + chordNote3.value];
  const thirdNote = chordNote3 ? [
    getNoteType({...chordNote3, pianoKey:thirdPianoKey, isAdjacentNote: isNote3Adjacent && !isNote2Adjacent, isStemmedNoteFlipped: item.isStemmedNoteFlipped, ...noteType}),
    ...getNoteModifier({...chordNote3, pianoKey: thirdPianoKey})
  ]:[];
  const isNote4Adjacent = chordNote4 && chordNote4.value - chordNote3.value < THREE;
  const fourthPianoKey = chordNote4 && pianoKeyList[rootIndex + chordNote4.value];
  const fourthNote = chordNote4 ? [
    getNoteType({...chordNote4, pianoKey:fourthPianoKey, isAdjacentNote: isNote4Adjacent, isStemmedNoteFlipped: item.isStemmedNoteFlipped, ...noteType}),
    ...getNoteModifier({...chordNote4, pianoKey: fourthPianoKey})
  ]:[];
  const isNote5Adjacent = chordNote5 && chordNote5.value - chordNote4.value < THREE;
  const fifthPianoKey = chordNote5 && pianoKeyList[rootIndex + chordNote5.value];
  const fifthNote = chordNote5 ? [
    getNoteType({...chordNote5, pianoKey:fifthPianoKey, isAdjacentNote: isNote5Adjacent && !isNote4Adjacent, isStemmedNoteFlipped: item.isStemmedNoteFlipped, ...noteType}),
    ...getNoteModifier({...chordNote5, pianoKey: fifthPianoKey})
  ]:[];

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