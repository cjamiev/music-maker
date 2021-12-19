import CurveSvg from './CurveSvg';
import NoteBeamSvg from './NoteBeamSvg';
import {
  ClefSVG,
  MeasureStartSVG,
  TrebleSVG,
  BassSVG
} from './ClefSVG';
import {
  DynamicsSVG
} from './DynamicsSVG';
import {
  KeySignatureSVG,
  FlatKeySignatureSVG,
  SharpKeySignatureSVG
} from './KeySignatureSVG';
import {
  MeasureSVG,
  MeasureBarSVG,
  MeasureRepeatBarStartSVG,
  MeasureEndSVG,
  MeasureRepeatBarEndSVG
} from './MeasureSVG';
import {
  NoteSVG,
  StaccatoSVG,
  DottedSVG,
  TenutoSVG,
  TripletSVG,
  ChordNotationSVG,
  StemmedNoteFlippedSVG,
  StemmedNoteSVG,
  AccentSVG,
  FermataSVG,
  RolledSVG,
  StaffSVG,
  WholeNoteSVG,
  NoteFlatSVG,
  FingerNumberSVG,
  GraceNoteSVG,
  FlippedFermataSVG,
  NoteNaturalSVG,
  NoteSharpSVG,
  TrillSVG
} from './NoteSVG';
import {
  OttavaAltaSVG,
  OttavaAltaBarSVG,
  OttavaAltaEndSVG,
  OttavaAltaTextSVG
} from './OttavaAltaSVG';
import {
  OttavaBassaSVG,
  OttavaBassaBarSVG,
  OttavaBassaEndSVG,
  OttavaBassaTextSVG
} from './OttavaBassaSVG';
import {
  PedalSVG,
  PedalQuickReleaseSVG,
  PedalContinueSVG,
  PedalStartSVG,
  PedalEndSVG
} from './PedalSVG';
import {
  RepeatSVG,
  RepeatTextSVG,
  CodaSVG,
  SegnoSVG
} from './RepeatSVG';
import {
  RestSVG,
  DottedRestSVG
} from './RestSVG';
import {
  TimeSignatureSVG,
  CommonTimeSVG,
  SingleDigitTimeSVG,
  TwoDigitTimeSVG
} from './TimeSignatureSVG';
import {
  TitleSVG
} from './TitleSVG';
import {
  VoltaBracketSVG,
  VoltaBracketTopLineSVG,
  VoltaBracketEndSVG,
  VoltaBracketStartSVG
} from './VoltaBracketSVG';
import './music-staff.css';

const svgMap = {
  'Curve': CurveSvg,
  'NoteBeam': NoteBeamSvg,
  'Clef': ClefSVG,
  'MeasureStart': MeasureStartSVG,
  'Treble': TrebleSVG,
  'Bass': BassSVG,
  'Dynamics': DynamicsSVG,
  'KeySignature': KeySignatureSVG,
  'FlatKeySignature': FlatKeySignatureSVG,
  'SharpKeySignature': SharpKeySignatureSVG,
  'Measure': MeasureSVG,
  'MeasureBar': MeasureBarSVG,
  'MeasureRepeatBarStart': MeasureRepeatBarStartSVG,
  'MeasureEnd': MeasureEndSVG,
  'MeasureRepeatBarEnd': MeasureRepeatBarEndSVG,
  'Note': NoteSVG,
  'Staccato': StaccatoSVG,
  'Dotted': DottedSVG,
  'Tenuto': TenutoSVG,
  'Triplet': TripletSVG,
  'ChordNotation': ChordNotationSVG,
  'StemmedNoteFlipped': StemmedNoteFlippedSVG,
  'StemmedNote': StemmedNoteSVG,
  'Accent': AccentSVG,
  'Fermata': FermataSVG,
  'Rolled': RolledSVG,
  'Staff': StaffSVG,
  'WholeNote': WholeNoteSVG,
  'NoteFlat': NoteFlatSVG,
  'FingerNumber': FingerNumberSVG,
  'GraceNote': GraceNoteSVG,
  'FlippedFermata': FlippedFermataSVG,
  'NoteNatural': NoteNaturalSVG,
  'NoteSharp': NoteSharpSVG,
  'Trill': TrillSVG,
  'OttavaAlta': OttavaAltaSVG,
  'OttavaAltaBar': OttavaAltaBarSVG,
  'OttavaAltaEnd': OttavaAltaEndSVG,
  'OttavaAltaText': OttavaAltaTextSVG,
  'OttavaBassa': OttavaBassaSVG,
  'OttavaBassaBar': OttavaBassaBarSVG,
  'OttavaBassaEnd': OttavaBassaEndSVG,
  'OttavaBassaText': OttavaBassaTextSVG,
  'Pedal': PedalSVG,
  'PedalQuickRelease': PedalQuickReleaseSVG,
  'PedalContinue': PedalContinueSVG,
  'PedalStart': PedalStartSVG,
  'PedalEnd': PedalEndSVG,
  'Repeat': RepeatSVG,
  'RepeatText': RepeatTextSVG,
  'Coda': CodaSVG,
  'Segno': SegnoSVG,
  'Rest': RestSVG,
  'DottedRest': DottedRestSVG,
  'TimeSignature': TimeSignatureSVG,
  'CommonTime': CommonTimeSVG,
  'SingleDigitTime': SingleDigitTimeSVG,
  'TwoDigitTime': TwoDigitTimeSVG,
  'Title': TitleSVG,
  'VoltaBracket': VoltaBracketSVG,
  'VoltaBracketTopLine': VoltaBracketTopLineSVG,
  'VoltaBracketEnd': VoltaBracketEndSVG,
  'VoltaBracketStart': VoltaBracketStartSVG
};

const entryMapper = (entry) => {
  return {
    ...entry,
    subcomponents: entry.subcomponents ? entry.subcomponents.map(item => entryMapper(item)): [],
    component: svgMap[entry.component]
  };
};

const svgDataMapper = (data) => {
  return data.map(entry => entryMapper(entry));
};

export default svgDataMapper;
