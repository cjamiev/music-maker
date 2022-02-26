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

const getIsNoteFlipped = (rootPianoKey, chordSize) => {
  const rootIndex = pianoKeyList.findIndex(key => key === rootPianoKey);

  if(chordSize === ZERO) {
    return rootIndex > STAFF_MIDPOINT;
  } else if (chordSize === ONE) {
    return rootIndex > STAFF_CHORD_LENGTH_TWO_MIDPOINT;
  }
  return rootIndex > STAFF_CHORD_LENGTH_THREE_MIDPOINT;
};

const getNoteSubcomponents = (data) => {
  if(data.component !== 'Note') {
    return [];
  }

  const rootPianoKey = data.pianoKey.replace('#','');
  const sharpConditional = data.pianoKey.includes('#') ? { showNoteSharp: true } : { };
  const chordSize = data.addedNotes.filter(note => note.value).length;
  const isNoteFlipped = getIsNoteFlipped(rootPianoKey, chordSize);
  const noteData = { ...data, pianoKey: rootPianoKey, isNoteFlipped, ...sharpConditional, chordSize };

  return (chordSize === ZERO)
    ?
    [
      { component:'Staff', transform:'translate(0,0)', conditions: mapStaffLines[rootPianoKey]},
      getNoteType(noteData),
      ...getAllModifiers(noteData)
    ]
    : getChordSubcomponent(noteData);
};

export {
  getNoteSubcomponents
};