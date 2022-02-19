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
  isStemmedNote,
  isAdjacentNote,
  pianoKey
}) => {
  // TODO move replace
  const translateY = mapNotePosition[pianoKey.replace('#','')];
  const translateX = isAdjacentNote ? (-ONE*Number(isStemmedNote)) + ADJACENT_NOTE_TRANSLATE_X: ZERO;

  if (showWholeNote) {
    return { component: 'WholeNote', transform:`translate(${translateX},${translateY})`, conditions: {}};
  }

  const conditions = isStemmedNote
    ? { showNoteStemFlipped: !isAdjacentNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote }
    : { showNoteStem: !isAdjacentNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote };

  return { component: isStemmedNote ? 'StemmedNoteFlipped' : 'StemmedNote', transform:`translate(${translateX},${translateY})`, conditions};
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
  const rootIndex = pianoKeyList.findIndex(key => key === item.pianoKey);
  const chordIndices = item.chord.map(note => pianoKeyList.findIndex(key => key === note.pianoKey));
  const rootNote = [getNoteType(item), ...getNoteModifier(item)];
  const isNote2Adjacent = chordIndices[ZERO] - rootIndex < THREE;
  const secondNote = [getNoteType({...item.chord[ZERO], isAdjacentNote: isNote2Adjacent, isStemmedNote: item.isStemmedNote}), ...getNoteModifier(item.chord[ZERO])];
  const isNote3Adjacent = chordNote3 && (chordIndices[ONE] - chordIndices[ZERO] < THREE) && !isNote2Adjacent;
  const thirdNote = chordNote3 ? [getNoteType({...item.chord[ONE], isAdjacentNote: isNote3Adjacent, isStemmedNote: item.isStemmedNote}), ...getNoteModifier(item.chord[ONE])] : [];
  const isNote4Adjacent = chordNote4 && (chordIndices[TWO] - chordIndices[ONE] < THREE) && !isNote3Adjacent;
  const fourthNote = chordNote4 ? [getNoteType({...item.chord[TWO], isAdjacentNote: isNote4Adjacent, isStemmedNote: item.isStemmedNote}), ...getNoteModifier(item.chord[TWO])] : [];
  const isNote5Adjacent = chordNote5 && (chordIndices[THREE] - chordIndices[TWO] < THREE) && !isNote4Adjacent;
  const fifthNote = chordNote5 ? [getNoteType({...item.chord[THREE], isAdjacentNote: isNote5Adjacent, isStemmedNote: item.isStemmedNote}), ...getNoteModifier(item.chord[THREE])] : [];


  return [...rootNote,...secondNote,...thirdNote,...fourthNote,...fifthNote];
};

const getNoteSubcomponents = (item) => {
  if(item.component !== 'Note') {
    return [];
  }

  const rootPianoKey = item.pianoKey.replace('#','');
  const isStemmedNote = pianoKeyList.findIndex(key => key === rootPianoKey) > STAFF_MIDPOINT;
  const sharpConditional = item.pianoKey.includes('#')
    ? { showNoteSharp: true }
    : { };
  const filteredChordWithoutRoot = item.chord.filter(chordItem => chordItem.pianoKey);
  const updatedItem = {
    ...item,
    pianoKey: rootPianoKey,
    isStemmedNote,
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