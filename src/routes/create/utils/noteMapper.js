import { mapStaffLines } from 'constants/stafflines';
import { pianoKeyList } from 'constants/pianokeys';
import { getNoteType } from './noteTypeMapper';
import { getNoteModifier } from './modifiersMapper';
import { getChordSubcomponent } from './chordMapper';

const ZERO = 0;
const STAFF_MIDPOINT = 26;

const getNoteSubcomponents = (item) => {
  if(item.component !== 'Note') {
    return [];
  }

  const rootPianoKey = item.pianoKey.replace('#','');
  const isStemmedNoteFlipped = pianoKeyList.findIndex(key => key === rootPianoKey) > STAFF_MIDPOINT;
  const sharpConditional = item.pianoKey.includes('#')
    ? { showNoteSharp: true }
    : { };
  const updatedItem = {
    ...item,
    pianoKey: rootPianoKey,
    isStemmedNoteFlipped,
    ...sharpConditional
  };
  const filteredChord = item.chord.filter(note => note.value);
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