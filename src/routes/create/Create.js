import React, { useState } from 'react';
import DisplaySheetMusic from 'components/DisplaySheetMusic';
import Piano from './Piano';
import { mapStaccatoPosition, mapDottedPosition, mapNotePosition } from 'constants';
import { mapStaffLines } from 'constants/stafflines';
import {
  STAFF_LINE_WIDTH,
  MEASURE_BOTH_STAFFS_HEIGHT,
  MEASURE_SINGLE_STAFF_HEIGHT,
  STAFF_LINE_HEIGHT,
  HEIGHT_BETWEEN_ROWS,
  BASS_GAP
} from 'constants/svgattributes';

const attributes = {
  width: 1000,
  height: 600,
  viewBox: '0 0 529.2 317.5'
};
const THREE = 3;

const Create = () => {
  const [pianoKey, setPianoKey] = useState('C4');
  const [index, setIndex] = useState(THREE);

  return (
    <div className="main">
      <DisplaySheetMusic sheetMusic={[
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
            { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines[pianoKey]},
            { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition[pianoKey]})`, conditions:{ showNoteStemFlipped: true }}
          ]}
      ]} {...attributes}/>
      <Piano selectPianoKey={(id) => { setPianoKey(id); }} />
    </div>
  );
};

export default Create;
