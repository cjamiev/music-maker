/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers */
import { mapStaccatoPosition, mapDottedPosition, mapNotePosition, mapStaffLines } from 'constants/stafflines';
import {
  STAFF_LINE_WIDTH,
  MEASURE_BOTH_STAFFS_HEIGHT,
  MEASURE_SINGLE_STAFF_HEIGHT,
  STAFF_LINE_HEIGHT,
  HEIGHT_BETWEEN_ROWS,
  BASS_GAP
} from 'constants/svgattributes';

const hollowKnightRestingGroundsDataPageOneLineOne = [
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
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'PedalStart', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${2*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${3*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${4*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${5*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${6*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${7*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${8*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${9*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${10*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${11*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${12*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'PedalEnd', transform:'translate(0,0)', conditions:{}}] }
];
const hollowKnightRestingGroundsDataPageOneLineTwo = [
  { component:'Clef', transform:`translate(0,${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Note', transform:`translate(0,${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(0,${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${6*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${7*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${9*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${10*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${0*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'PedalStart', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${1*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${2*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${3*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${4*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${5*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${6*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${7*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${8*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${9*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${10*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${11*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'PedalEnd', transform:'translate(0,0)', conditions:{}}] }
];
const hollowKnightRestingGroundsDataPageOneLineThree = [
  { component:'Clef', transform:`translate(0,${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Note', transform:`translate(0,${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(0,${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${6*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${7*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${9*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${10*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${0*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalStart', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${1*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${2*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${3*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${4*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${5*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${6*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${7*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${8*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${9*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${10*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${11*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalEnd', transform:'translate(0,0)', conditions:{}}] }
];
const hollowKnightRestingGroundsDataPageOneLineFour = [
  { component:'Clef', transform:`translate(0,${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Note', transform:`translate(0,${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(0,${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${6*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${7*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${9*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${10*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${0*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalStart', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${1*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${2*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${3*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${4*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${5*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${6*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${7*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${8*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${9*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${10*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalContinue', transform:'translate(0,0)', conditions:{}}] },
  { component:'Pedal', transform:`translate(${11*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'PedalEnd', transform:'translate(0,0)', conditions:{}}] }
];
const hollowKnightRestingGroundsDataPageOne = [
  ...hollowKnightRestingGroundsDataPageOneLineOne,
  ...hollowKnightRestingGroundsDataPageOneLineTwo,
  ...hollowKnightRestingGroundsDataPageOneLineThree,
  ...hollowKnightRestingGroundsDataPageOneLineFour
];

const hollowKnightRestingGroundsDataPageTwoLineOne = [
  { component:'Title', transform:'translate(0,0)', conditions:{}, subcomponents:[],
    content: { name: 'Page 2', subname: 'Resting Grounds', author: '', tempo: '' } },
  { component:'Clef', transform:`translate(0,${0})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${0})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Note', transform:`translate(0,${0})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(0,${BASS_GAP})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Rest', transform:`translate(${STAFF_LINE_WIDTH},${0})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},${BASS_GAP})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${2*STAFF_LINE_WIDTH},${0})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${0})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${0})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G4']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['G4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${0})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${5*STAFF_LINE_WIDTH},${0})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${0})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${0})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B5']},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['B5']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${BASS_GAP})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${0})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['A5']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${BASS_GAP})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${0})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']}
    ]},
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${0})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${0})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['F4']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${BASS_GAP})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Rest', transform:`translate(${10*STAFF_LINE_WIDTH},${0})`,
    conditions:{showQuarterRest:true}, subcomponents:[
      { component:'DottedRest', transform:'translate(0,0)', conditions:{}}
    ] },
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${BASS_GAP})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${0})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']}
    ]},
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${0})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] }
];
const hollowKnightRestingGroundsDataPageTwoLineTwo = [
  { component:'Clef', transform:`translate(0,${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Note', transform:`translate(0,${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C4']},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['C4']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['C4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(0,${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Rest', transform:`translate(${STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[
      { component:'DottedRest', transform:'translate(0,0)', conditions:{}}
    ] },
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:{}}
    ]},
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G4']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['G4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${5*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Rest', transform:`translate(${6*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Rest', transform:`translate(${7*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${8*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Rest', transform:`translate(${9*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Rest', transform:`translate(${10*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${11*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] }
];
const hollowKnightRestingGroundsDataPageTwoLineThree = [
  { component:'Clef', transform:`translate(0,${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${0},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Rest', transform:`translate(${2*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G4']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['G4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Rest', transform:`translate(${5*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B5']},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['B5']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['A5']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:{}}
    ]},
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['F4']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['A5']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:{}}
    ]},
  { component:'Note', transform:`translate(${0},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]}
];
const hollowKnightRestingGroundsDataPageTwoLineFour = [
  { component:'Clef', transform:`translate(0,${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${0*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G4']},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['G4']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['G4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Rest', transform:`translate(${1*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
      { component:'DottedRest', transform:'translate(0,0)', conditions:{}}
    ] },
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G4']}
    ]},
  { component:'Rest', transform:`translate(${3*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'StemmedNote', transform:`translate(-11,${mapNotePosition['F4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component: 'NoteBeam', transform:`translate(${4*STAFF_LINE_WIDTH + 17.4},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS) - 4})`, conditions:{},
    content: { heightMultiplier: -1, widthMultiplier: 2, angle: -1 },
    subcomponents:[] },
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'StemmedNote', transform:`translate(4,${mapNotePosition['E4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D4']},
      { component:'StemmedNote', transform:`translate(4,${mapNotePosition['D4']})`, conditions:{ showNoteStem: true, showEighthNoteFlag: true }}
    ]},
  { component:'Rest', transform:`translate(${7*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Rest', transform:`translate(${8*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[{ component:'DottedRest', transform:'translate(0,0)', conditions:{}}] },
  { component:'Rest', transform:`translate(${9*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Rest', transform:`translate(${10*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Rest', transform:`translate(${11*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${0*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${1*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]}
];
const hollowKnightRestingGroundsDataPageTwo = [
  ...hollowKnightRestingGroundsDataPageTwoLineOne,
  ...hollowKnightRestingGroundsDataPageTwoLineTwo,
  ...hollowKnightRestingGroundsDataPageTwoLineThree,
  ...hollowKnightRestingGroundsDataPageTwoLineFour
];

const hollowKnightRestingGroundsDataPageThreeLineOne = [
  { component:'Title', transform:'translate(0,0)', conditions:{}, subcomponents:[],
    content: { name: 'Page 3', subname: 'Resting Grounds', author: '', tempo: '' } },
  { component:'Clef', transform:`translate(0,${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${0})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${0*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C4']},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['C4']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['C4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Rest', transform:`translate(${1*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${2*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G4']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['G4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${5*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B5']},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['B5']})`, conditions:{}},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['A5']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']}
    ]},
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['F4']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['A5']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']}
    ]},

  { component:'Note', transform:`translate(${0},${BASS_GAP+0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},${BASS_GAP+0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP+0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP+0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP+0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP+0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${BASS_GAP+0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${BASS_GAP+0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP+0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${BASS_GAP+0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${BASS_GAP+0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP+0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]}
];
const hollowKnightRestingGroundsDataPageThreeLineTwo = [
  { component:'Clef', transform:`translate(0,${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP+1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${0*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G4']},
      { component:'Dotted', transform:`translate(0,${mapDottedPosition['G4']})`, conditions:{}},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['G4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Rest', transform:`translate(${1*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
      { component:'DottedRest', transform:'translate(0,0)', conditions:{}}
    ] },
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G4']}
    ]},
  { component:'Rest', transform:`translate(${3*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'StemmedNote', transform:`translate(-11,${mapNotePosition['F4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component: 'NoteBeam', transform:`translate(${4*STAFF_LINE_WIDTH + 17.4},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS) - 4})`, conditions:{},
    content: { heightMultiplier: -1, widthMultiplier: 2, angle: -1 },
    subcomponents:[] },
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'StemmedNote', transform:`translate(4,${mapNotePosition['E4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D4']},
      { component:'StemmedNote', transform:`translate(4,${mapNotePosition['D4']})`, conditions:{ showNoteStem: true, showEighthNoteFlag: true }}
    ]},
  { component:'Rest', transform:`translate(${7*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Rest', transform:`translate(${8*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[{ component:'DottedRest', transform:'translate(0,0)', conditions:{}}] },
  { component:'Rest', transform:`translate(${9*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Rest', transform:`translate(${10*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Rest', transform:`translate(${11*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${0*STAFF_LINE_WIDTH},${BASS_GAP+1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${1*STAFF_LINE_WIDTH},${BASS_GAP+1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP+1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP+1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP+1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP+1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${BASS_GAP+1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${BASS_GAP+1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP+1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${BASS_GAP+1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${BASS_GAP+1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP+1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]}
];
const hollowKnightRestingGroundsDataPageThreeLineThree = [
  { component:'Clef', transform:`translate(0,${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${0*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${1*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${2*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${3*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${5*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${6*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${7*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${8*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${9*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${10*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${11*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Note', transform:`translate(${0*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${1*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F6']})`, conditions:{ showNoteStemFlipped: true }}
    ]}
];
const hollowKnightRestingGroundsDataPageThreeLineFour = [
  { component:'Clef', transform:`translate(0,${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${0*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${1*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${2*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${3*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${5*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${6*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${7*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${8*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${9*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${10*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Rest', transform:`translate(${11*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[
    ] },
  { component:'Note', transform:`translate(${0*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${1*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C6']})`, conditions:{ showNoteStemFlipped: true }}
    ]}
];
const hollowKnightRestingGroundsDataPageThree = [
  ...hollowKnightRestingGroundsDataPageThreeLineOne,
  ...hollowKnightRestingGroundsDataPageThreeLineTwo,
  ...hollowKnightRestingGroundsDataPageThreeLineThree,
  ...hollowKnightRestingGroundsDataPageThreeLineFour
];

const hollowKnightRestingGroundsDataPageFourLineOne = [
  { component:'Title', transform:'translate(0,0)', conditions:{}, subcomponents:[],
    content: { name: 'Page 4', subname: 'Resting Grounds', author: '', tempo: '' } },
  { component:'Clef', transform:`translate(0,${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${0})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${0*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${1*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStemFlipped: true }}
    ]}
];
const hollowKnightRestingGroundsDataPageFourLineTwo = [
  { component:'Clef', transform:`translate(0,${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP+1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${0*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${1*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E4']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['E4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E4']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['E4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F4']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['F4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E4']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['E4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(-7.5,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${1*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'StemmedNoteFlipped', transform:`translate(7.5,${mapNotePosition['D5']})`, conditions:{ showNoteStemFlipped: true }}
    ]}
];
const hollowKnightRestingGroundsDataPageFourLineThree = [
  { component:'Clef', transform:`translate(0,${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${0*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${1*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]}
];
const hollowKnightRestingGroundsDataPageFour = [
  ...hollowKnightRestingGroundsDataPageFourLineOne,
  ...hollowKnightRestingGroundsDataPageFourLineTwo,
  ...hollowKnightRestingGroundsDataPageFourLineThree
];

export const hollowKnightRestingGroundsData = [
  hollowKnightRestingGroundsDataPageOne,
  hollowKnightRestingGroundsDataPageTwo,
  hollowKnightRestingGroundsDataPageThree,
  hollowKnightRestingGroundsDataPageFour
];