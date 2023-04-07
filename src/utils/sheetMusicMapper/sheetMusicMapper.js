import {
  STAFF_LINE_WIDTH,
  MEASURE_BOTH_STAFFS_HEIGHT,
  HEIGHT_BETWEEN_ROWS,
  BASS_GAP
} from 'constants/svgattributes';
import {
  getTitleData,
  getClefData,
  getKeySignatureData,
  getTimeSignatureData
} from './configurationMapper';
import {
  getNoteSubcomponents
} from './noteMapper';

const ZERO = 0;
const SINGLE_ROW_MODIFIER = 0;
const ONE = 1;

const getTransformProperty = (lineIndex, columnIndex, isBassClef) => {
  return `translate(${columnIndex*STAFF_LINE_WIDTH},${lineIndex*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)+Number(isBassClef)*BASS_GAP})`;
};

const getMeasureSubcomponents = ({
  showRepeatBarStart,
  showRepeatBarEnd,
  showMeasureEnd
}) => {
  if(showRepeatBarStart) {
    return [{ component:'MeasureRepeatBarStart', transform:'translate(0,0)', conditions:{}}];
  } else if(showRepeatBarEnd) {
    return [{ component:'MeasureRepeatBarEnd', transform:'translate(0,0)', conditions:{}}];
  } else {
    return [{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}];
  }
};

const getSheetMusic = (configuration, line, editorPosition) => {
  const { ottavaAlta = [], treble, measure = [], dynamics = [], bass, ottavaBassa = [], pedal = [] } = line;

  const mappedTrebleData = treble.map(item => {
    const columnIndexModifier = item.lineIndex === ZERO ? ONE : ZERO;
    return {
      ...item,
      conditions: { ...item.conditions, showDotted: item.showDotted },
      transform: getTransformProperty(SINGLE_ROW_MODIFIER, item.columnIndex + columnIndexModifier, false),
      subcomponents:getNoteSubcomponents(item)
    };
  });
  const mappedBassData = bass.map(item => {
    const columnIndexModifier = item.lineIndex === ZERO ? ONE : ZERO;
    return {
      ...item,
      transform: getTransformProperty(SINGLE_ROW_MODIFIER, item.columnIndex + columnIndexModifier, true),
      subcomponents:getNoteSubcomponents(item)
    };
  });
  const mappedMeasureData = measure.map(item => {
    const columnIndexModifier = item.lineIndex === ZERO ? ONE : ZERO;
    return {
      ...item,
      transform: `translate(${(item.columnIndex + columnIndexModifier)*STAFF_LINE_WIDTH},${SINGLE_ROW_MODIFIER*item.lineIndex*(HEIGHT_BETWEEN_ROWS)})`,
      subcomponents: getMeasureSubcomponents(item)
    };
  });
  const mappedDynamicsData = dynamics.map(item => {
    const columnIndexModifier = item.lineIndex === ZERO ? ONE : ZERO;
    return {
      ...item,
      transform: `translate(${(item.columnIndex + columnIndexModifier)*STAFF_LINE_WIDTH},${SINGLE_ROW_MODIFIER*item.lineIndex*(HEIGHT_BETWEEN_ROWS)})`,
      subcomponents: []
    };
  });
  const mappedOttavaAltaData = ottavaAlta.map(item => {
    const columnIndexModifier = item.lineIndex === ZERO ? ONE : ZERO;
    return {
      ...item,
      transform: `translate(${(item.columnIndex + columnIndexModifier)*STAFF_LINE_WIDTH},${SINGLE_ROW_MODIFIER*item.lineIndex*(HEIGHT_BETWEEN_ROWS)})`,
      subcomponents: []
    };
  });
  const mappedOttavaBassaData = ottavaBassa.map(item => {
    const columnIndexModifier = item.lineIndex === ZERO ? ONE : ZERO;
    return {
      ...item,
      transform: `translate(${(item.columnIndex + columnIndexModifier)*STAFF_LINE_WIDTH},${SINGLE_ROW_MODIFIER*item.lineIndex*(HEIGHT_BETWEEN_ROWS)})`,
      subcomponents: []
    };
  });
  const mappedPedalData = pedal.map(item => {
    const columnIndexModifier = item.lineIndex === ZERO ? ONE : ZERO;
    return {
      ...item,
      transform: `translate(${(item.columnIndex + columnIndexModifier)*STAFF_LINE_WIDTH},${SINGLE_ROW_MODIFIER*item.lineIndex*(HEIGHT_BETWEEN_ROWS)})`,
      subcomponents: []
    };
  });

  const columnIndexModifier = editorPosition.lineIndex === ZERO ? ONE : ZERO;
  return [
    { component: 'Selection',
      transform:`translate(${(editorPosition.columnIndex + columnIndexModifier)*STAFF_LINE_WIDTH},${Number(editorPosition.isBassSelection)*BASS_GAP})`},
    getTitleData(configuration),
    getClefData({}),
    getKeySignatureData({ lineNumber: ZERO, keySignature: configuration.keySignature, isBassClef: false}),
    getKeySignatureData({ lineNumber: ZERO, keySignature: configuration.keySignature, isBassClef: true}),
    editorPosition.lineIndex === ZERO && getTimeSignatureData({ lineNumber: ZERO, timeSignature: configuration.timeSignature, isBassClef: false}),
    editorPosition.lineIndex === ZERO && getTimeSignatureData({ lineNumber: ZERO, timeSignature: configuration.timeSignature, isBassClef: true}),
    ...mappedOttavaAltaData,
    ...mappedTrebleData,
    ...mappedMeasureData,
    ...mappedDynamicsData,
    ...mappedBassData,
    ...mappedOttavaBassaData,
    ...mappedPedalData
  ].filter(Boolean);
};

export {
  getSheetMusic
};