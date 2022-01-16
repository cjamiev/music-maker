import React, { useState } from 'react';
import { mapStaccatoPosition, mapDottedPosition, mapNotePosition } from 'constants';
import { mapStaffLines } from 'constants/stafflines';
import DisplaySheetMusic from 'components/DisplaySheetMusic';
import Piano from './Piano';
import './music-sheet-creator.css';

const attributes = {
  width: 500,
  height: 300,
  viewBox: '0 0 264.6 158.75'
};
const TWO = 2;

const Create = () => {
  const [pianoKey, setPianoKey] = useState('C4');
  const [index, setIndex] = useState[TWO];

  return (
    <div className="main">
      <DisplaySheetMusic sheetMusic={[
        { component:'Note', transform:'translate(0,0)', conditions:{},
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
