import React from 'react';
import svgDataMapper from './index';

const testData = [
  { component: 'NoteBeam', transform: 'translate(0,0)' },
  { component: 'Curve', transform:'translate(0,0)', id: 1 },
  { component:'Clef', transform:'translate(0,0)', conditions:{}, subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},{ component:'Treble', transform:'translate(0,0)', conditions:{showGClefOttavaAlta:true,showGClefOttavaBass:true}},{ component:'Bass', transform:'translate(0,0)', conditions:{showFClefOttavaAlta:true,showFClefOttavaBass:true}}] },
  { component:'Dynamics', transform:'translate(0,0)', conditions:{showCrescendo:true,showDecrescendo:true,showDynamicText:true}, subcomponents:[] },
  { component:'KeySignature', transform:'translate(0,0)', conditions:{}, subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)', conditions:{showFFlat:true,showCFlat:true,showGFlat:true,showDFlat:true,showAFlat:true,showEFlat:true,showBFlat:true}},{ component:'SharpKeySignature', transform:'translate(0,0)', conditions:{showFSharp:true,showCSharp:true,showGSharp:true,showDSharp:true,showASharp:true,showESharp:true,showBSharp:true}}] },
  { component:'Measure', transform:'translate(0,0)', conditions:{showStaffBassMeasure:true}, subcomponents:[{ component:'MeasureBar', transform:'translate(0,0)', conditions:{}},{ component:'MeasureRepeatBarStart', transform:'translate(0,0)', conditions:{showBassRepeatStartDots:true}},{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}},{ component:'MeasureRepeatBarEnd', transform:'translate(0,0)', conditions:{showBassRepeatEndDots:true}}] },
  { component:'Note', transform:'translate(0,0)', conditions:{}, subcomponents:[{ component:'Staccato', transform:'translate(0,0)', conditions:{}},{ component:'Dotted', transform:'translate(0,0)', conditions:{}},{ component:'Tenuto', transform:'translate(0,0)', conditions:{}},{ component:'Triplet', transform:'translate(0,0)', conditions:{}},{ component:'ChordNotation', transform:'translate(0,0)', conditions:{showChordNotationFlat:true,showChordNotationSharp:true,showChordNotationQuality:true}},{ component:'StemmedNoteFlipped', transform:'translate(0,0)', conditions:{showNoteStemFlipped:true,showEighthNoteFlagFlipped:true,showHalfNoteFlipped:true,showSixteenthNoteFlipped:true}},{ component:'StemmedNote', transform:'translate(0,0)', conditions:{showNoteStem:true,showEighthNoteFlag:true,showHalfNote:true,showSixteenthNoteFlag:true}},{ component:'Accent', transform:'translate(0,0)', conditions:{}},{ component:'Fermata', transform:'translate(0,0)', conditions:{}},{ component:'Rolled', transform:'translate(0,0)', conditions:{}},{ component:'Staff', transform:'translate(0,0)', conditions:{}},{ component:'WholeNote', transform:'translate(0,0)', conditions:{}},{ component:'NoteFlat', transform:'translate(0,0)', conditions:{}},{ component:'FingerNumber', transform:'translate(0,0)', conditions:{}},{ component:'GraceNote', transform:'translate(0,0)', conditions:{showGraceNoteSlash:true,showGraceNoteBottomSlur:true,showGraceNoteUpperSlur:true}},{ component:'FlippedFermata', transform:'translate(0,0)', conditions:{}},{ component:'NoteNatural', transform:'translate(0,0)', conditions:{}},{ component:'NoteSharp', transform:'translate(0,0)', conditions:{}},{ component:'Trill', transform:'translate(0,0)', conditions:{}}] },
  { component:'OttavaAlta', transform:'translate(0,0)', conditions:{}, subcomponents:[{ component:'OttavaAltaBar', transform:'translate(0,0)', conditions:{}},{ component:'OttavaAltaEnd', transform:'translate(0,0)', conditions:{}},{ component:'OttavaAltaText', transform:'translate(0,0)', conditions:{}}] },
  { component:'OttavaBassa', transform:'translate(0,0)', conditions:{}, subcomponents:[{ component:'OttavaBassaBar', transform:'translate(0,0)', conditions:{}},{ component:'OttavaBassaEnd', transform:'translate(0,0)', conditions:{}},{ component:'OttavaBassaText', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:'translate(0,0)', conditions:{}, subcomponents:[{ component:'PedalQuickRelease', transform:'translate(0,0)', conditions:{}},{ component:'PedalContinue', transform:'translate(0,0)', conditions:{}},{ component:'PedalStart', transform:'translate(0,0)', conditions:{}},{ component:'PedalEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Repeat', transform:'translate(0,0)', conditions:{}, subcomponents:[{ component:'RepeatText', transform:'translate(0,0)', conditions:{}},{ component:'Coda', transform:'translate(0,0)', conditions:{}},{ component:'Segno', transform:'translate(0,0)', conditions:{}}] },
  { component:'Rest', transform:'translate(0,0)', conditions:{showWholeRest:true,showHalfRest:true,showQuarterRest:true, showEightRest: true, showSixteenthRest:true}, subcomponents:[{ component:'DottedRest', transform:'translate(0,0)', conditions:{}}] },
  { component:'TimeSignature', transform:'translate(0,0)', conditions:{}, subcomponents:[{ component:'CommonTime', transform:'translate(0,0)', conditions:{showCut:true}},{ component:'SingleDigitTime', transform:'translate(0,0)', conditions:{}},{ component:'TwoDigitTime', transform:'translate(0,0)', conditions:{}}] },
  { component:'Title', transform:'translate(0,0)', conditions:{}, subcomponents:[] },
  { component:'VoltaBracket', transform:'translate(0,0)', conditions:{}, subcomponents:[{ component:'VoltaBracketTopLine', transform:'translate(0,0)', conditions:{}},{ component:'VoltaBracketEnd', transform:'translate(0,0)', conditions:{}},{ component:'VoltaBracketStart', transform:'translate(0,0)', conditions:{}}] }
];
const MusicNotationMapper = ({ data = testData, parentRef } ) => {
  const renderData = svgDataMapper(data).map(item => {
    const SvgComponent = item.component;
    const key = SvgComponent.name + item.transform + JSON.stringify(item.subcomponents);

    return (
      <SvgComponent
        key={key}
        reference={parentRef}
        dataid={item.id}
        transform={item.transform}
        conditions={item.conditions}
        subcomponents={item.subcomponents}
      />
    );
  });

  return (
    <g>
      {renderData}
    </g>
  );
};

export default MusicNotationMapper;
