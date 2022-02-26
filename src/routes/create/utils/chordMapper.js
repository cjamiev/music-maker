import { pianoKeyListWithoutAccidentals } from 'constants/pianokeys';
import { getNoteType } from './noteTypeMapper';
import {
  getAccidentals,
  getTopSymbols,
  getDotted
} from './modifiersMapper';
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

const getPianoKey = (index = -ONE) => pianoKeyListWithoutAccidentals[index - ONE] || '';

const getRootStaccato = (root, showStaccato, isStemmedNoteFlipped) => {
  return getTopSymbols({ showStaccato: isStemmedNoteFlipped ? false: showStaccato, pianoKey: root });
};

const getLastKeySymbols = (chord, noteTopSymbols, isStemmedNoteFlipped) => {
  const filteredChord = chord.filter(item => item.pianoKey);
  const lastItemIndex = filteredChord.length - ONE;
  const pianoKey = lastItemIndex >= ZERO ? filteredChord[lastItemIndex].pianoKey : '';

  return getTopSymbols({ ...noteTopSymbols, showStaccato: isStemmedNoteFlipped ? noteTopSymbols.showStaccato : false, pianoKey });
};

const getChordNote = ({
  pianoKey,
  isAdjacentNote,
  isStemmedNoteFlipped,
  noteType,
  conditions,
  shouldShiftAccidental,
  shouldShiftAccidentalsMore,
  shouldShiftDotted
}) => {
  if(!pianoKey) {
    return [];
  }

  return [
    getNoteType({ pianoKey, isAdjacentNote, isStemmedNoteFlipped, ...noteType }),
    getAccidentals({
      ...conditions,
      shouldShiftAccidental,
      shouldShiftAccidentalsMore,
      pianoKey
    }),
    getDotted({ showDotted: conditions.showDotted, shouldShiftDotted, pianoKey })
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
  const {
    isStemmedNoteFlipped,
    showStaccato, showAccent, showTenuto, showFermata, showTrill,
    showDotted,
    showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote
  } = item;
  const noteType = { showWholeNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote };
  const noteTopSymbols = { showStaccato, showAccent, showTenuto, showFermata, showTrill };
  const rootStaccato = getRootStaccato(item.pianoKey, showStaccato, isStemmedNoteFlipped);
  const lastKeySymbols = getLastKeySymbols(uniqueAddedNotes, noteTopSymbols, isStemmedNoteFlipped);

  const chordData = [item].concat(uniqueAddedNotes);
  const chordPianoKeys = chordData.map(d => d.pianoKey);
  const shiftedAccidentals = getShiftedAccidentals(chordData);
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
  const shouldShiftAccidentalsMore = adjacentNotes.some(isAdjacent => isAdjacent) && item.isStemmedNoteFlipped;

  const chordNotes = chordPianoKeys.map((chordPiano,index) => {
    return getChordNote({
      isStemmedNoteFlipped,
      shouldShiftDotted,
      shouldShiftAccidentalsMore,
      pianoKey: chordPiano,
      isAdjacentNote: adjacentNotes[index],
      noteType: chordNoteTypes[index],
      shouldShiftAccidental: shiftedAccidentals[index],
      conditions: {
        ...chordData[index],
        showDotted
      }
    });
  }).reduce((entry,acc) => { return acc.concat(entry); },[]);

  return rootStaccato.concat(chordNotes.concat(lastKeySymbols)).filter(Boolean);
};

export {
  getChordSubcomponent
};