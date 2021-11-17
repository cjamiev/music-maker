import React from 'react';
import Piano from '../Piano';
import KeySignature from '../KeySignature';
import TimeSignature from '../TimeSignature';
import NoteType from '../NoteType';
import NoteModifier from '../NoteModifier';
import RestType from '../RestType';
import BarType from '../BarType';
import Pedal from '../Pedal';
import './createsheetmusicform.css';

const CreateSheetMusicForm = ({ keySignature, selectKeySignature, timeSignature, selectTimeSignature, selectPianoKey, selectNoteType, selectNoteModifier, selectMusicalSymbol, selectPedal, addItem }) => {
  return (
    <div className='input-grid'>
      <div className="keyboard-container">
        <Piano selectPianoKey={selectPianoKey} />
        {/* <div className="keyboard-right-area">
          <button onClick={addItem}>Add</button>
        </div> */}
      </div>
      <Pedal selectPedal={selectPedal} />
    </div>
  );
};

export default CreateSheetMusicForm;
