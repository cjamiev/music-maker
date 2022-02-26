import { mapStaffLines } from 'constants/stafflines';
import { pianoKeyList } from 'constants/pianokeys';
import { getNoteType } from './noteTypeMapper';
import { getAllModifiers } from './modifiersMapper';
import { getChordSubcomponent } from './chordMapper';

const ZERO = 0;
const ONE = 1;
const STAFF_MIDPOINT = 26;
const STAFF_CHORD_LENGTH_TWO_MIDPOINT = 24;
const STAFF_CHORD_LENGTH_THREE_MIDPOINT = 22;

const getIsStemmedNoteFlipped = (rootPianoKey, chordSize) => {
  const rootIndex = pianoKeyList.findIndex(key => key === rootPianoKey);

  if(chordSize === ZERO) {
    return rootIndex > STAFF_MIDPOINT;
  } else if (chordSize === ONE) {
    return rootIndex > STAFF_CHORD_LENGTH_TWO_MIDPOINT;
  }
  return rootIndex > STAFF_CHORD_LENGTH_THREE_MIDPOINT;
};

const getNoteSubcomponents = (item) => {
  if(item.component !== 'Note') {
    return [];
  }

  const rootPianoKey = item.pianoKey.replace('#','');
  const chordSize = item.addedNotes.filter(note => note.value).length;
  const isStemmedNoteFlipped = getIsStemmedNoteFlipped(rootPianoKey, chordSize);
  const sharpConditional = item.pianoKey.includes('#')
    ? { showNoteSharp: true }
    : { };
  const updatedItem = {
    ...item,
    pianoKey: rootPianoKey,
    isStemmedNoteFlipped,
    ...sharpConditional,
    chordSize
  };
  const noteSubcomponent = chordSize > ZERO
    ? getChordSubcomponent(updatedItem)
    : [getNoteType(updatedItem), ...getAllModifiers(updatedItem)];

  return [
    { component:'Staff', transform:'translate(0,0)', conditions: mapStaffLines[rootPianoKey]},
    ...noteSubcomponent
  ];
};

export {
  getNoteSubcomponents
};