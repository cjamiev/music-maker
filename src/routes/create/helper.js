import {
  mapKeySignatures
} from 'constants/musicnotation';
import {
  mapStaccatoPosition,
  mapDottedPosition,
  mapNotePosition,
  mapStaffLines
} from 'constants/stafflines';
import {
  STAFF_LINE_WIDTH,
  MEASURE_BOTH_STAFFS_HEIGHT,
  MEASURE_SINGLE_STAFF_HEIGHT,
  STAFF_LINE_HEIGHT,
  HEIGHT_BETWEEN_ROWS,
  BASS_GAP
} from 'constants/svgattributes';
import { pianoKeyList } from 'constants/pianokeys';

const ZERO = 0;
const ONE = 1;
const TWENTY_SIX = 26;

const defaultData = {
  transform:'translate(0,0)',
  conditions:{},
  subcomponents:[]
};

const getTitleData = ({
  title,
  subtitle,
  author,
  tempo
}) => {
  return {
    ...defaultData,
    component:'Title',
    content: { title, subtitle, author, tempo }
  };
};

const getClefData = ({
  lineNumber = ZERO,
  showBassClef = true,
  showGClefOttavaAlta = false,
  showGClefOttavaBass = false,
  showFClefOttavaAlta = false,
  showFClefOttavaBass = false
}) => {
  return {
    ...defaultData,
    component:'Clef',
    transform:`translate(0,${lineNumber*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    subcomponents:[
      { component:'MeasureStart', transform:'translate(0,0)', conditions:{ showClefBrace: showBassClef }},
      { component:'Treble', transform:'translate(0,0)', conditions:{ showGClefOttavaAlta, showGClefOttavaBass }},
      { component:'Bass', transform:'translate(0,0)', conditions:{ showFClefOttavaAlta, showFClefOttavaBass }}]
  };
};

const getKeySignatureData = ({
  lineNumber,
  keySignature,
  isBassClef
}) => {
  return {
    ...defaultData,
    component:'KeySignature',
    transform:`translate(0,${lineNumber*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)+Number(isBassClef)*BASS_GAP})`,
    subcomponents:[
      { component: keySignature.includes('#') ? 'SharpKeySignature' : 'FlatKeySignature', transform:'translate(0,0)', conditions:mapKeySignatures[keySignature]}]
  };
};

const getTimeSignatureData = ({
  lineNumber,
  timeSignature,
  isBassClef
}) => {
  const { commonTime, cutTime, numerator, denominator } = timeSignature;
  const subcomponents = commonTime
    ? [{ component:'CommonTime', transform:'translate(0,0)', conditions:{ showCut: timeSignature.cutTime }, content: {}}]
    : [{ component:'TimeValue', transform:'translate(0,0)', conditions:{}, content: { value: timeSignature.numerator }},
      { component:'TimeValue', transform:'translate(0,10.04)', conditions:{}, content: { value: timeSignature.denominator } }];

  return {
    ...defaultData,
    component:'TimeSignature',
    transform:`translate(0,${lineNumber*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)+Number(isBassClef)*BASS_GAP})`,
    subcomponents
  };
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

const getTransformProperty = (lineIndex, columnIndex, isBassClef) => {
  return `translate(${columnIndex*STAFF_LINE_WIDTH},${lineIndex*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)+Number(isBassClef)*BASS_GAP})`;
};

const getSubcomponents = (item) => {
  if(item.component === 'Note') {
    const stemmedNote = pianoKeyList.findIndex(key => key === item.pianoKey) > TWENTY_SIX ? 'StemmedNoteFlipped' : 'StemmedNote';
    const conditions = stemmedNote === 'StemmedNoteFlipped' ? { showNoteStemFlipped: true } : { showNoteStem: true };
    return [
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines[item.pianoKey]},
      { component: stemmedNote, transform:`translate(0,${mapNotePosition[item.pianoKey]})`, conditions}
    ];
  } else {
    return [];
  }
};

const getSheetMusic = (configuration, line, editorPosition) => {
  const { treble, center, bass, pedal } = line;
  const mappedTrebleData = treble.map(item => {
    const columnIndexModifier = item.lineIndex === ZERO ? ONE : ZERO;
    return {
      ...item,
      transform: getTransformProperty(ZERO, item.columnIndex + columnIndexModifier, false),
      subcomponents:getSubcomponents(item)
    };
  });
  const mappedBassData = bass.map(item => {
    const columnIndexModifier = item.lineIndex === ZERO ? ONE : ZERO;
    return {
      ...item,
      transform: getTransformProperty(ZERO, item.columnIndex + columnIndexModifier, true),
      subcomponents:getSubcomponents(item)
    };
  });

  const columnIndexModifier = editorPosition.lineIndex === ZERO ? ONE : ZERO;
  return [
    { component: 'Selection',
      transform:`translate(${(editorPosition.columnIndex +columnIndexModifier)*STAFF_LINE_WIDTH},${Number(editorPosition.isBassSelection)*BASS_GAP})`},
    getTitleData(configuration),
    getClefData({}),
    getKeySignatureData({ lineNumber: ZERO, keySignature: configuration.keySignature, isBassClef: false}),
    getKeySignatureData({ lineNumber: ZERO, keySignature: configuration.keySignature, isBassClef: true}),
    editorPosition.lineIndex === ZERO && getTimeSignatureData({ lineNumber: ZERO, timeSignature: configuration.timeSignature, isBassClef: false}),
    editorPosition.lineIndex === ZERO && getTimeSignatureData({ lineNumber: ZERO, timeSignature: configuration.timeSignature, isBassClef: true}),
    ...mappedTrebleData,
    ...mappedBassData
  ].filter(Boolean);
};

export {
  getTitleData,
  getClefData,
  getKeySignatureData,
  getTimeSignatureData,
  getNoteData,
  getSheetMusic
};