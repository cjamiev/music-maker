import { pianoKeyListWithoutAccidentals } from 'constants/pianokeys';
import { getNoteType } from './noteTypeMapper';
import { getNoteModifier } from './modifiersMapper';
import {
  getUniqueNotes,
  getShiftedAccidentals,
  getAdjacentNotes,
  getChordNoteTypes
} from './chordHelper';

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const ADJACENT_NOTE_TRANSLATE_X = 7;

const getPianoKey = (index = -ONE) => {
  return pianoKeyListWithoutAccidentals[index - ONE] || '';
};

const getLastKey = (chord) => {
  const filteredChord = chord.filter(item => item.pianoKey);
  const lastItemIndex = filteredChord.length - ONE;

  return lastItemIndex >= ZERO ? filteredChord[lastItemIndex].pianoKey : '';
};

const getChordNote = ({
  pianoKey,
  isAdjacentNote,
  isStemmedNoteFlipped,
  noteType,
  conditions,
  shouldShiftAccidental,
  shouldShiftDotted,
  lastKey
}) => {
  if(!pianoKey) {
    return [];
  }

  const noteData = lastKey && isStemmedNoteFlipped
    ? {...conditions, pianoKey: lastKey, shouldShiftAccidental, shouldShiftDotted,
      showStaccato: isStemmedNoteFlipped && conditions.showStaccato }
    : {...conditions, pianoKey, shouldShiftAccidental, shouldShiftDotted };

  return [
    getNoteType({ pianoKey, isAdjacentNote, isStemmedNoteFlipped, ...noteType}),
    ...getNoteModifier(noteData)
  ];
};

const getChordSubcomponent = (item) => {
  const rootIndex = pianoKeyListWithoutAccidentals.findIndex(key => key === item.pianoKey);
  const uniqueAddedNotes = getUniqueNotes(item.addedNotes).map(addedNoteItem => {
    return {
      ...addedNoteItem,
      pianoKey: getPianoKey(rootIndex + addedNoteItem.value)
    };
  });
  const { isStemmedNoteFlipped, showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote } = item;
  const noteType = { showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote };
  const lastKey = getLastKey(uniqueAddedNotes);

  const chordData = [item].concat(uniqueAddedNotes);
  const chordPianoKeys = chordData.map(d => d.pianoKey);
  const shiftedAccidentals = getShiftedAccidentals(chordPianoKeys);
  const adjacentNotes = getAdjacentNotes({
    isStemmedNoteFlipped,
    chordPianoKeys
  });
  const chordNoteTypes = getChordNoteTypes({
    adjacentNotes,
    isStemmedNoteFlipped,
    noteType,
    size: item.addedNotes.length + ONE
  });
  const shouldShiftDotted = adjacentNotes.some(isAdjacent => isAdjacent) && !item.isStemmedNoteFlipped;

  const chordNotes = chordPianoKeys.map((chordPiano,index) => {
    return getChordNote({
      isStemmedNoteFlipped,
      shouldShiftDotted,
      pianoKey: chordPiano,
      isAdjacentNote: adjacentNotes[index],
      noteType: chordNoteTypes[index],
      shouldShiftAccidental: shiftedAccidentals[index],
      conditions: {
        ...chordData[index],
        showDotted: item.showDotted
      }
    });
  }).reduce((entry,acc) => { return acc.concat(entry); },[]);

  return chordNotes;
};

export {
  getChordSubcomponent
};