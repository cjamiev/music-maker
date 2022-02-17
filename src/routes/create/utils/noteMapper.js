import {
  mapStaccatoPosition,
  mapDottedPosition,
  mapNotePosition,
  mapStaffLines
} from 'constants/stafflines';
import {
  STAFF_LINE_WIDTH,
  MEASURE_BOTH_STAFFS_HEIGHT,
  HEIGHT_BETWEEN_ROWS,
  BASS_GAP
} from 'constants/svgattributes';
import { pianoKeyList } from 'constants/pianokeys';

const TWENTY_SIX = 26;

const defaultData = {
  transform:'translate(0,0)',
  conditions:{},
  subcomponents:[]
};

const getNoteData = ({
  id,
  lineNumber,
  columnNumber,
  pianoKey,
  isBassClef,
  className
}) => {
  return {
    ...defaultData,
    component:'Note',
    className,
    transform:`translate(${columnNumber*STAFF_LINE_WIDTH},${lineNumber*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)+Number(isBassClef)*BASS_GAP})`,
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines[pianoKey]},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition[pianoKey]})`, conditions:{ showNoteStemFlipped: true }}
    ]};
};

const getNoteType = ({
  showWholeNote,
  showHalfNote,
  showQuarterNote,
  showEighthNote,
  showSixteenthNote,
  pianoKey
}) => {
  const translateY = mapNotePosition[pianoKey];

  if (showWholeNote) {
    return { component: 'WholeNote', transform:`translate(0,${translateY})`, conditions: {}};
  }

  const stemmedNote = pianoKeyList.findIndex(key => key === pianoKey) > TWENTY_SIX
    ? 'StemmedNoteFlipped' : 'StemmedNote';
  const conditions = stemmedNote === 'StemmedNoteFlipped'
    ? { showNoteStemFlipped: true, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote }
    : { showNoteStem: true, showHalfNote, showQuarterNote, showEighthNote, showSixteenthNote };

  return { component: stemmedNote, transform:`translate(0,${translateY})`, conditions};
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

const getNoteSubcomponents = (item) => {
  if(item.component === 'Note') {
    const noteSubcomponent = getNoteType(item);
    const chordNoteSubcomponent = item.chord.filter(chordItem => chordItem.pianoKey).map(chordItem => {
      return getNoteType({
        ...item,
        pianoKey: chordItem.pianoKey
      });
    });
    const noteModifierSubcomponent = getNoteModifier(item);
    return [
      { component:'Staff', transform:'translate(0,0)', conditions: mapStaffLines[item.pianoKey]},
      noteSubcomponent,
      ...chordNoteSubcomponent,
      ...noteModifierSubcomponent
    ];
  } else {
    return [];
  }
};

export {
  getNoteSubcomponents
};