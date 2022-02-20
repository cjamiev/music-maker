import {
  mapStaccatoPosition,
  mapDottedPosition,
  mapNotePosition
} from 'constants/stafflines';
import { pianoKeyList } from 'constants/pianokeys';

const ZERO = 0;
const ACCIDENTAL_SHIFT_MODIFIER = 7;
const HEIGHT_STACK_MODIFIER = -10;
const HEIGHT_STACK_STACCATO_ADJUSTMENT = 5;
const STAFF_TOPPOINT = 33;

const getTopSymbolHeights = ({
  showStaccato,
  showAccent,
  showTenuto,
  showFermata,
  showTrill,
  pianoKey
}) => {
  const staccatoShiftY = mapStaccatoPosition[pianoKey];
  const staccatoShiftStack = pianoKeyList.findIndex(key => key === pianoKey) > STAFF_TOPPOINT
    ? staccatoShiftY + HEIGHT_STACK_STACCATO_ADJUSTMENT : ZERO;
  const accentShiftY = showAccent || showTenuto ? staccatoShiftStack + HEIGHT_STACK_MODIFIER : staccatoShiftStack;
  const fermataShiftY = showFermata ? accentShiftY + HEIGHT_STACK_MODIFIER : accentShiftY;
  const trillShiftY = fermataShiftY + HEIGHT_STACK_MODIFIER;

  return { staccatoShiftY, accentShiftY, fermataShiftY, trillShiftY };
};

const getStaccato = ({ showStaccato, shiftY }) => {
  return showStaccato && { component:'Staccato', transform:`translate(0,${shiftY})`, conditions:{}};
};

const getAccent = ({ showAccent, showTenuto, shiftY }) => {
  if(showAccent) {
    return { component:'Accent', transform:`translate(0,${shiftY})`, conditions:{}};
  } else if(showTenuto) {
    return { component:'Tenuto', transform:`translate(0,${shiftY})`, conditions:{}};
  }

  return undefined;
};

const getFermata = ({ showFermata, shiftY }) => {
  return showFermata && { component:'Fermata', transform:`translate(0,${shiftY})`, conditions:{}};
};

const getTrill = ({ showTrill, shiftY }) => {
  return showTrill && { component:'Trill', transform:`translate(0,${shiftY})`, conditions:{}};
};

const getTopSymbols = ({
  showStaccato,
  showAccent,
  showTenuto,
  showFermata,
  showTrill,
  pianoKey
}) => {
  const {
    staccatoShiftY,
    accentShiftY,
    fermataShiftY,
    trillShiftY
  } = getTopSymbolHeights({
    showStaccato,
    showAccent,
    showTenuto,
    showFermata,
    showTrill,
    pianoKey
  });

  return [
    getStaccato({ showStaccato, shiftY: staccatoShiftY }),
    getAccent({ showAccent, showTenuto, shiftY: accentShiftY }),
    getFermata({ showFermata, shiftY: fermataShiftY }),
    getTrill({ showTrill, shiftY: trillShiftY })
  ];
};

const getNoteAccidentals = ({
  showNoteFlat,
  showNoteSharp,
  showNoteNatural,
  shouldShiftAccidental,
  pianoKey
}) => {
  const shiftX = shouldShiftAccidental ? ACCIDENTAL_SHIFT_MODIFIER: ZERO;
  const shiftY = mapNotePosition[pianoKey];

  if(showNoteFlat) {
    return { component:'NoteFlat', transform:`translate(${shiftX},${shiftY})`, conditions:{}};
  } else if(showNoteSharp) {
    return { component:'NoteSharp', transform:`translate(${shiftX},${shiftY})`, conditions:{}};
  } else if(showNoteNatural) {
    return { component:'NoteNatural', transform:`translate(${shiftX},${shiftY})`, conditions:{}};
  }

  return undefined;
};

const getDotted = ({ showDotted, shouldShiftDotted, pianoKey }) => {
  const shiftX = shouldShiftDotted ? -ADJACENT_NOTE_TRANSLATE_X: ZERO;
  const shiftY = mapDottedPosition[pianoKey];

  return showDotted && { component:'Dotted', transform:`translate(${shiftX},${shiftY})`, conditions:{}};
};

const getNoteModifier = ({
  showDotted,
  showNoteFlat,
  showNoteSharp,
  showNoteNatural,
  showStaccato,
  showAccent,
  showTenuto,
  showFermata,
  showTrill,
  pianoKey,
  shouldShiftAccidental,
  shouldShiftDotted
}) => {

  return [
    ...getTopSymbols({
      showStaccato,
      showAccent,
      showTenuto,
      showFermata,
      showTrill,
      pianoKey
    }),
    getNoteAccidentals({
      showNoteFlat,
      showNoteSharp,
      showNoteNatural,
      shouldShiftAccidental,
      pianoKey
    }),
    getDotted({showDotted, shouldShiftDotted, pianoKey})
  ].filter(Boolean);
};

export {
  getNoteModifier
};