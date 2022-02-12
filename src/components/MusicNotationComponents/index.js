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
  WholeNoteSVG,
  NoteFlatSVG,
  FingerNumberSVG,
  GraceNoteSVG,
  NoteNaturalSVG,
  NoteSharpSVG,
  TrillSVG
} from './NoteSVG';
import {
  OttavaSVG
} from './OttavaSVG';
import {
  PedalSVG
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
  SelectionSVG
} from './SelectionSVG';
import {
  ChordLedgerSVG,
  StaffSVG
} from './StaffSVG';
import {
  TimeSignatureSVG,
  CommonTimeSVG,
  TimeValueSVG,
  DoubleDigitTimeSVG
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
  'ChordLedger': ChordLedgerSVG,
  'Accent': AccentSVG,
  'Fermata': FermataSVG,
  'Rolled': RolledSVG,
  'Staff': StaffSVG,
  'WholeNote': WholeNoteSVG,
  'NoteFlat': NoteFlatSVG,
  'FingerNumber': FingerNumberSVG,
  'GraceNote': GraceNoteSVG,
  'NoteNatural': NoteNaturalSVG,
  'NoteSharp': NoteSharpSVG,
  'Trill': TrillSVG,
  'Ottava': OttavaSVG,
  'Pedal': PedalSVG,
  'Repeat': RepeatSVG,
  'RepeatText': RepeatTextSVG,
  'Coda': CodaSVG,
  'Segno': SegnoSVG,
  'Rest': RestSVG,
  'DottedRest': DottedRestSVG,
  'TimeSignature': TimeSignatureSVG,
  'CommonTime': CommonTimeSVG,
  'TimeValue': TimeValueSVG,
  'Title': TitleSVG,
  'VoltaBracket': VoltaBracketSVG,
  'VoltaBracketTopLine': VoltaBracketTopLineSVG,
  'VoltaBracketEnd': VoltaBracketEndSVG,
  'VoltaBracketStart': VoltaBracketStartSVG,
  'Selection': SelectionSVG
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
