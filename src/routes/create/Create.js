import React, { useState } from 'react';
import DisplaySheetMusic from 'components/DisplaySheetMusic';
import Piano from 'components/piano';
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
import CreateSidePanel from './CreateSidePanel';
import Page from 'components/layout';

const attributes = {
  width: 1000,
  height: 600,
  viewBox: '0 0 529.2 317.5'
};
const THREE = 3;

const Create = () => {
  const [pianoKey, setPianoKey] = useState('C4');
  const [index, setIndex] = useState(THREE);
  const [data, setData] = useState({
    title: '',
    subtitle: '',
    tempo: '',
    author: '',
    keySignature: '',
    timeSignature: {
      numerator: 4,
      denominator: 4,
      commonTime: true,
      cutTime: false
    }
  });

  const handleChange = (update) => {
    setData({
      ...data,
      ...update
    });
  };

  return (
    <Page sidePanelContent={<CreateSidePanel onChange={handleChange}/>}>
      <DisplaySheetMusic sheetMusic={[
        { component:'Title', transform:'translate(0,0)', conditions:{}, subcomponents:[],
          content: { name: data.title, subname: data.subtitle, author: data.author, tempo: data.tempo } },
        { component:'Clef', transform:'translate(0,0)', conditions:{},
          subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
            { component:'Treble', transform:'translate(0,0)', conditions:{}},
            { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
        { component:'KeySignature', transform:'translate(0,0)', conditions:{},
          subcomponents:[{ component: data.keySignature.includes('#') ? 'SharpKeySignature' : 'FlatKeySignature', transform:'translate(0,0)',
            conditions:mapKeySignatures[data.keySignature]}]},
        { component:'KeySignature', transform:`translate(0,${BASS_GAP})`, conditions:{},
          subcomponents:[{ component:data.keySignature.includes('#') ? 'SharpKeySignature' : 'FlatKeySignature', transform:'translate(0,0)',
            conditions:mapKeySignatures[data.keySignature]}]},
        { component:'TimeSignature', transform:'translate(0,0)', conditions:{},
          subcomponents:[
            { component:data.timeSignature.commonTime ? 'CommonTime':'TimeValue', transform:'translate(0,0)', conditions:{ showCut: data.timeSignature.cutTime }, content: { value: data.timeSignature.numerator }},
            { component:data.timeSignature.commonTime ? 'CommonTime':'TimeValue', transform:'translate(0,10.04)', conditions:{}, content: { value: data.timeSignature.denominator } }] },
        { component:'TimeSignature', transform:`translate(0,${BASS_GAP})`, conditions:{},
          subcomponents:[
            { component:data.timeSignature.commonTime ? 'CommonTime':'TimeValue', transform:'translate(0,0)', conditions:{ showCut: data.timeSignature.cutTime }, content: { value: data.timeSignature.numerator }},
            { component:data.timeSignature.commonTime ? 'CommonTime':'TimeValue', transform:'translate(0,10.04)', conditions:{}, content: { value: data.timeSignature.denominator } }] },
        { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},0)`, conditions:{},
          subcomponents:[
            { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines[pianoKey]},
            { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition[pianoKey]})`, conditions:{ showNoteStemFlipped: true }}
          ]}
      ]} {...attributes}/>
      <Piano selectPianoKey={(id) => { setPianoKey(id); }} />
    </Page>
  );
};

export default Create;
