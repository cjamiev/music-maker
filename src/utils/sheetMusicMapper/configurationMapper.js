import {
  mapKeySignatures
} from 'constants/musicnotation';
import {
  MEASURE_BOTH_STAFFS_HEIGHT,
  HEIGHT_BETWEEN_ROWS,
  BASS_GAP
} from 'constants/svgattributes';

const ZERO = 0;
const ONE = 1;

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
}, pageIndex = ZERO) => {
  return {
    ...defaultData,
    component:'Title',
    content: { title, subtitle: pageIndex === ZERO ? subtitle : `Page ${pageIndex + ONE}`, author, tempo }
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

export {
  getTitleData,
  getClefData,
  getKeySignatureData,
  getTimeSignatureData
};