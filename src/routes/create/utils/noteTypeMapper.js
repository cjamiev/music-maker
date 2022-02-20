import { mapNotePosition } from 'constants/stafflines';

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const ADJACENT_SYMBOL_SHIFT_MODIFIER = 7;

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
  const shiftY = mapNotePosition[pianoKey];
  const shiftX = isAdjacentNote ? (-ONE+TWO*Number(!isStemmedNoteFlipped)) * ADJACENT_SYMBOL_SHIFT_MODIFIER: ZERO;

  if (showWholeNote) {
    return { component: 'WholeNote', transform:`translate(${shiftX},${shiftY})`, conditions: {}};
  }

  const conditions = { showNoteStem: !isAdjacentNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote };
  const component = isStemmedNoteFlipped ? 'StemmedNoteFlipped' : 'StemmedNote';

  return { component, transform:`translate(${shiftX},${shiftY})`, conditions};
};

export {
  getNoteType
};