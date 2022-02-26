import { mapNotePosition } from 'constants/stafflines';

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const ADJACENT_SYMBOL_SHIFT_MODIFIER = 7;
const ADJACENT_WHOLE_NOTE_SHIFT_MODIFIER = 4.5;

const getNoteType = ({
  showWholeNote,
  showHalfNote,
  showQuarterNote,
  showEighthNote,
  showSixteenthNote,
  isNoteFlipped,
  isAdjacentNote,
  pianoKey
}) => {
  const shiftY = mapNotePosition[pianoKey];

  if (showWholeNote) {
    const shiftX = isAdjacentNote ? (-ONE+TWO*Number(!isNoteFlipped)) * ADJACENT_WHOLE_NOTE_SHIFT_MODIFIER: ZERO;
    return { component: 'WholeNote', transform:`translate(${shiftX},${shiftY})`, conditions: {}};
  }

  const shiftX = isAdjacentNote ? (-ONE+TWO*Number(!isNoteFlipped)) * ADJACENT_SYMBOL_SHIFT_MODIFIER: ZERO;
  const conditions = { showNoteStem: !isAdjacentNote, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote };
  const component = isNoteFlipped ? 'StemmedNoteFlipped' : 'StemmedNote';

  return { component, transform:`translate(${shiftX},${shiftY})`, conditions};
};

export {
  getNoteType
};