/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers */
import { mapStaccatoPosition, mapDottedPosition, mapNotePosition } from 'constants';
import { mapStaffLines } from 'constants/stafflines';
import {
  STAFF_LINE_WIDTH,
  MEASURE_BOTH_STAFFS_HEIGHT,
  MEASURE_SINGLE_STAFF_HEIGHT,
  STAFF_LINE_HEIGHT,
  HEIGHT_BETWEEN_ROWS
} from 'constants/svgattributes';

const BASS_GAP = MEASURE_BOTH_STAFFS_HEIGHT - MEASURE_SINGLE_STAFF_HEIGHT - 0.66;

export const musicNotationData = [
  { component:'NoteBeam', transform: 'translate(0,0)' },
  { component:'Curve', transform:'translate(0,0)', id: 1 },
  { component:'Clef', transform:'translate(0,0)', conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{showGClefOttavaAlta:true,showGClefOttavaBass:true}},
      { component:'Bass', transform:'translate(0,0)', conditions:{showFClefOttavaAlta:true,showFClefOttavaBass:true}}] },
  { component:'Dynamics', transform:'translate(0,0)',
    conditions:{showCrescendo:true,showDecrescendo:true,showDynamicText:true}, subcomponents:[] },
  { component:'KeySignature', transform:'translate(0,0)', conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showFFlat:true,showCFlat:true,showGFlat:true,showDFlat:true,showAFlat:true,showEFlat:true,showBFlat:true}},
    { component:'SharpKeySignature', transform:'translate(0,0)',
      conditions:{showFSharp:true,showCSharp:true,showGSharp:true,showDSharp:true,showASharp:true,showESharp:true,showBSharp:true}}] },
  { component:'Measure', transform:'translate(0,0)', conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}},
      { component:'MeasureRepeatBarStart', transform:'translate(0,0)', conditions:{showBassRepeatStartDots:true}},
      { component:'MeasureEnd', transform:'translate(0,0)', conditions:{}},
      { component:'MeasureRepeatBarEnd', transform:'translate(0,0)', conditions:{showBassRepeatEndDots:true}}] },
  { component:'Note', transform:'translate(0,0)', conditions:{},
    subcomponents:[{ component:'Staccato', transform:'translate(0,0)', conditions:{}},
      { component:'Dotted', transform:'translate(0,0)', conditions:{}},
      { component:'Tenuto', transform:'translate(0,0)', conditions:{}},
      { component:'Triplet', transform:'translate(0,0)', conditions:{}},
      { component:'ChordNotation', transform:'translate(0,0)',
        conditions:{showChordNotationFlat:true,showChordNotationSharp:true,showChordNotationQuality:true}},
      { component:'StemmedNoteFlipped', transform:'translate(0,0)',
        conditions:{showNoteStemFlipped:true,showEighthNoteFlagFlipped:true,showHalfNoteFlipped:true,showSixteenthNoteFlipped:true}},
      { component:'StemmedNote', transform:'translate(0,0)',
        conditions:{showNoteStem:true,showEighthNoteFlag:true,showHalfNote:true,showSixteenthNoteFlag:true}},
      { component:'Accent', transform:'translate(0,0)', conditions:{}},
      { component:'Fermata', transform:'translate(0,0)', conditions:{}},
      { component:'Rolled', transform:'translate(0,0)', conditions:{}},
      { component:'Staff', transform:'translate(0,0)', conditions:{}},
      { component:'WholeNote', transform:'translate(0,0)', conditions:{}},
      { component:'NoteFlat', transform:'translate(0,0)', conditions:{}},
      { component:'FingerNumber', transform:'translate(0,0)', conditions:{}},
      { component:'GraceNote', transform:'translate(0,0)',
        conditions:{showGraceNoteSlash:true,showGraceNoteBottomSlur:true,showGraceNoteUpperSlur:true}},
      { component:'FlippedFermata', transform:'translate(0,0)', conditions:{}},
      { component:'NoteNatural', transform:'translate(0,0)', conditions:{}},
      { component:'NoteSharp', transform:'translate(0,0)', conditions:{}},
      { component:'Trill', transform:'translate(0,0)', conditions:{}}] },
  { component:'OttavaAlta', transform:'translate(0,0)', conditions:{},
    subcomponents:[{ component:'OttavaAltaBar', transform:'translate(0,0)', conditions:{}},
      { component:'OttavaAltaEnd', transform:'translate(0,0)', conditions:{}},
      { component:'OttavaAltaText', transform:'translate(0,0)', conditions:{}}] },
  { component:'OttavaBassa', transform:'translate(0,0)', conditions:{},
    subcomponents:[{ component:'OttavaBassaBar', transform:'translate(0,0)', conditions:{}},
      { component:'OttavaBassaEnd', transform:'translate(0,0)', conditions:{}},
      { component:'OttavaBassaText', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:'translate(0,0)', conditions:{},
    subcomponents:[{ component:'PedalQuickRelease', transform:'translate(0,0)', conditions:{}},
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}},
      { component:'PedalStart', transform:'translate(0,0)', conditions:{}},
      { component:'PedalEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Repeat', transform:'translate(0,0)', conditions:{},
    subcomponents:[{ component:'RepeatText', transform:'translate(0,0)', conditions:{}, content: { value: 'Fine'}},
      { component:'Coda', transform:'translate(0,0)', conditions:{}},
      { component:'Segno', transform:'translate(0,0)', conditions:{}}] },
  { component:'Rest', transform:'translate(0,0)',
    conditions:{showWholeRest:true,showHalfRest:true,showQuarterRest:true, showEightRest: true, showSixteenthRest:true},
    subcomponents:[{ component:'DottedRest', transform:'translate(0,0)', conditions:{}}] },
  { component:'TimeSignature', transform:'translate(0,0)', conditions:{},
    subcomponents:[
      { component:'CommonTime', transform:'translate(0,0)', conditions:{showCut:true}},
      { component:'TimeValue', transform:'translate(0,0)', conditions:{}, content: { value: 3 }},
      { component:'TimeValue', transform:'translate(0,10.04)', conditions:{}, content: { value: 4 } }] },
  { component:'Title', transform:'translate(0,0)', conditions:{}, subcomponents:[],
    content: { name: 'Name Of The Song', subname: 'Subname Of The Song', author: 'Author', tempo: 'Tempo' } },
  { component:'VoltaBracket', transform:'translate(0,0)', conditions:{},
    content: { value: '1.'},
    subcomponents:[{ component:'VoltaBracketTopLine', transform:'translate(0,0)', conditions:{}},
      { component:'VoltaBracketEnd', transform:'translate(0,0)', conditions:{}},
      { component:'VoltaBracketStart', transform:'translate(0,0)', conditions:{}}] }
];

export const allWholeNoteData = [
  { component:'Note', transform:`translate(${2*-STAFF_LINE_WIDTH},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A3']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['A3']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['A3']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${-STAFF_LINE_WIDTH},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B3']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['B3']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['B3']})`, conditions:{}}
    ]},
  { component:'Note', transform:'translate(0,-80)', conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C3']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['C3']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['C3']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D3']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['D3']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['D3']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*2},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E3']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['E3']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['E3']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*3},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F3']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['F3']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['F3']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*4},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G3']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['G3']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['G3']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*5},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A4']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['A4']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['A4']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*6},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B4']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['B4']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['B4']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*7},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C4']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['C4']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['C4']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*8},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D4']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['D4']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['D4']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${2*-STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E4']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['E4']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['E4']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${-STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['F4']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{}}
    ]},
  { component:'Note', transform:'translate(0,0)', conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G4']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['G4']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['G4']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['A5']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*2},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B5']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['B5']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['B5']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*3},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['C5']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*4},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D5']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['D5']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['D5']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*5},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['E5']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*6},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['F5']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*7},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['G5']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*8},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['A6']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${2*-STAFF_LINE_WIDTH},80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['B6']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['B6']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${-STAFF_LINE_WIDTH},80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['C6']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['C6']})`, conditions:{}}
    ]},
  { component:'Note', transform:'translate(0,80)', conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['D6']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['D6']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['E6']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['E6']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*2},80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['F6']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['F6']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*3},80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['G6']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['G6']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*4},80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A7']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['A7']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['A7']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*5},80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B7']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['B7']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['B7']})`, conditions:{}}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*6},80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B7']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['C7']})`, conditions:{}},
      { component:'WholeNote', transform:`translate(0,${mapNotePosition['C7']})`, conditions:{}}
    ]}
];

export const allQuarterNoteData = [
  { component:'Note', transform:`translate(${2*-STAFF_LINE_WIDTH},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A3']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['A3']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A3']})`,
        conditions:{ showNoteStem: true, showEighthNoteFlag: true, showSixteenthNoteFlag: true }}
    ]},
  { component:'Note', transform:`translate(${-STAFF_LINE_WIDTH},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B3']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['B3']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['B3']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:'translate(0,-80)', conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C3']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['C3']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['C3']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D3']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['D3']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['D3']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*2},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E3']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['E3']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['E3']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*3},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F3']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['F3']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['F3']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*4},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G3']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['G3']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['G3']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*5},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A4']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['A4']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*6},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B4']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['B4']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['B4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*7},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C4']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['C4']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['C4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*8},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D4']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['D4']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['D4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${2*-STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E4']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['E4']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['E4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${-STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['F4']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:'translate(0,0)', conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G4']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['G4']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['G4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['A5']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*2},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B5']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['B5']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*3},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['C5']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*4},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D5']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['D5']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*5},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['E5']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*6},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['F5']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*7},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['G5']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*8},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['A6']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${2*-STAFF_LINE_WIDTH},80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['B6']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${-STAFF_LINE_WIDTH},80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['C6']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:'translate(0,80)', conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['D6']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['E6']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*2},80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['F6']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*3},80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['G6']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*4},80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A7']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['A7']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A7']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*5},80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B7']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['B7']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B7']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH*6},80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B7']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['C7']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C7']})`,
        conditions:{ showNoteStemFlipped: true, showEighthNoteFlagFlipped: true, showSixteenthNoteFlagFlipped: true }}
    ]}
];

export const allQuarterChordData = [
  { component:'Note', transform:`translate(${2*-STAFF_LINE_WIDTH},-80)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A3']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['A3']})`, conditions:{}},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['A3']})`, conditions:{}},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['C3']})`, conditions:{}},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['E3']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A3']})`, conditions:{ showNoteStem: true }},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['C3']})`, conditions:{ showNoteStem: true }},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['E3']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${-STAFF_LINE_WIDTH},-80)`, conditions:{},
    subcomponents:[
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['B3']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['B3']})`, conditions:{ showNoteStem: true }},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['D3']})`, conditions:{ showNoteStem: true }},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['F3']})`, conditions:{ showNoteStem: true }},
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B3']}
    ]},
  { component:'Note', transform:`translate(${0},-80)`, conditions:{},
    subcomponents:[
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['B3']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['B3']})`, conditions:{ showNoteStem: true }},
      { component:'StemmedNote', transform:`translate(7,${mapNotePosition['C3']})`, conditions:{}},
      { component: 'ChordLedger', transform:`translate(7,${mapNotePosition['B3']})`, conditions: {}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['F3']})`, conditions:{ showNoteStem: true }},
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B3']}
    ]},
  { component:'Note', transform:`translate(${2*-STAFF_LINE_WIDTH},10)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['D6']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B6']})`, conditions:{ showNoteStemFlipped: true }},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${-STAFF_LINE_WIDTH},10)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['E6']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C6']})`, conditions:{ showNoteStemFlipped: true }},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${0},10)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['E6']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }},
      { component: 'ChordLedger', transform:`translate(-7,${mapNotePosition['E6']})`, conditions: {}},
      { component:'StemmedNoteFlipped', transform:`translate(-7,${mapNotePosition['D6']})`, conditions:{ }},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},10)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E6']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['E6']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B6']})`, conditions:{ showNoteStemFlipped: true }},
      { component: 'ChordLedger', transform:`translate(-7,${mapNotePosition['A6']})`, conditions: {}},
      { component:'StemmedNoteFlipped', transform:`translate(-7,${mapNotePosition['A6']})`, conditions:{ showChordLedger: true }},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E6']})`, conditions:{ showNoteStemFlipped: true }}
    ]}
];

export const allModifierData = [
  { component:'Note', transform:`translate(${2*-STAFF_LINE_WIDTH},-80)`, conditions:{},
    subcomponents:[
      { component: 'FingerNumber', transform: 'translate(0,-36)', content: { value: '5' }, conditions: {}},
      { component: 'FingerNumber', transform: 'translate(0,-31)', content: { value: '3' }, conditions: {}},
      { component: 'FingerNumber', transform: 'translate(0,-26)', content: { value: '1' }, conditions: {}},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['B3']})`, conditions:{}},
      { component:'GraceNote', transform:`translate(0,${mapNotePosition['F3']})`, conditions:{ showGraceNoteUpperSlur: true }},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['B3']})`, conditions:{ showNoteStem: true }},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['D3']})`, conditions:{ showNoteStem: true }},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['F3']})`, conditions:{ showNoteStem: true }},
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B3']}
    ]},
  { component:'Note', transform:`translate(${-STAFF_LINE_WIDTH},-80)`, conditions:{},
    subcomponents:[
      { component: 'ChordNotation', transform: 'translate(3,0)', content: { value: 'F', suffix: '7' }, conditions: { showChordNotationSharp: true }},
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A3']},
      { component:'Staccato', transform:`translate(0,${mapStaccatoPosition['A3']})`, conditions:{}},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['A3']})`, conditions:{}},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['C3']})`, conditions:{}},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['E3']})`, conditions:{}},
      { component:'NoteNatural', transform:`translate(0,${mapNotePosition['A3']})`, conditions:{}},
      { component:'NoteFlat', transform:`translate(-5,${mapNotePosition['C3']})`, conditions:{}},
      { component:'NoteSharp', transform:`translate(0,${mapNotePosition['E3']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A3']})`, conditions:{ showNoteStem: true }},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['C3']})`, conditions:{ showNoteStem: true }},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['E3']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:'translate(0,-80)', conditions:{},
    subcomponents:[
      { component:'GraceNote', transform:`translate(-2.5,${mapNotePosition['A4']})`, conditions:{ showGraceNoteBottomSlur: true }},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['G4']})`, conditions:{ showNoteStem: true }},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['E4']})`, conditions:{ showNoteStem: true }},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['C4']})`, conditions:{ showNoteStem: true }},
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B3']}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},-80)`, conditions:{},
    subcomponents:[
      { component:'Triplet', transform:'translate(13,0)', conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['G4']})`, conditions:{ showNoteStem: true }},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['E4']})`, conditions:{ showNoteStem: true }},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['C4']})`, conditions:{ showNoteStem: true }},
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B3']}
    ]},
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},-80)`, conditions:{},
    subcomponents:[
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['G4']})`, conditions:{ showNoteStem: true }},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['E4']})`, conditions:{ showNoteStem: true }},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['C4']})`, conditions:{ showNoteStem: true }},
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B3']}
    ]}
];

const hollowKnightRestingGroundsDataLineOne = [
  { component:'Title', transform:'translate(0,0)', conditions:{}, subcomponents:[],
    content: { name: 'Hollow Knight', subname: 'Resting Grounds', author: 'Christopher Larkin', tempo: 'Moderate' } },
  { component:'Clef', transform:'translate(0,0)', conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:'translate(0,0)', conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'TimeSignature', transform:'translate(0,0)', conditions:{},
    subcomponents:[
      { component:'TimeValue', transform:'translate(0,0)', conditions:{}, content: { value: 3 }},
      { component:'TimeValue', transform:'translate(0,10.04)', conditions:{}, content: { value: 4 } }] },
  { component:'TimeSignature', transform:`translate(0,${BASS_GAP})`, conditions:{},
    subcomponents:[
      { component:'TimeValue', transform:'translate(0,0)', conditions:{}, content: { value: 3 }},
      { component:'TimeValue', transform:'translate(0,10.04)', conditions:{}, content: { value: 4 } }] },
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${3*STAFF_LINE_WIDTH},0)`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${6*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${6*STAFF_LINE_WIDTH},0)`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${7*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${9*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${9*STAFF_LINE_WIDTH},0)`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${10*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${12*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${12*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${12*STAFF_LINE_WIDTH},0)`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] }
];
const hollowKnightRestingGroundsDataLineTwo = [
  { component:'Clef', transform:`translate(0,${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${2*BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Note', transform:`translate(0,${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(0,${2*BASS_GAP+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${STAFF_LINE_WIDTH},${2*BASS_GAP+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${2*STAFF_LINE_WIDTH},${2*BASS_GAP+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${3*STAFF_LINE_WIDTH},${2*BASS_GAP+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${2*BASS_GAP+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${5*STAFF_LINE_WIDTH},${2*BASS_GAP+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${6*STAFF_LINE_WIDTH},${2*BASS_GAP+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${7*STAFF_LINE_WIDTH},${2*BASS_GAP+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${8*STAFF_LINE_WIDTH},${2*BASS_GAP+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${9*STAFF_LINE_WIDTH},${2*BASS_GAP+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${10*STAFF_LINE_WIDTH},${2*BASS_GAP+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${11*STAFF_LINE_WIDTH},${2*BASS_GAP+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] }
];
export const hollowKnightRestingGroundsData = [...hollowKnightRestingGroundsDataLineOne, ...hollowKnightRestingGroundsDataLineTwo];