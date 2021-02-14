import React from 'react';
import Piano from 'components/atoms/Piano';
import KeySignature from 'components/atoms/KeySignature';
import TimeSignature from 'components/atoms/TimeSignature';
import NoteType from 'components/atoms/NoteType';
import NoteModifier from 'components/atoms/NoteModifier';
import RestType from 'components/atoms/RestType';
import BarType from 'components/atoms/BarType';
import Pedal from 'components/atoms/Pedal';
import './createsheetmusicform.css';

const CreateSheetMusicForm = ({ keySignature, selectKeySignature, timeSignature, selectTimeSignature, selectPianoKey, selectNoteType, selectNoteModifier, selectMusicalSymbol, selectPedal, addItem }) => {
  return (
    <div className='input-grid'>
      <div className="keyboard-container">
        <div className="keyboard-leftarea">
          <KeySignature keySignature={keySignature} selectKeySignature={selectKeySignature} />
          <TimeSignature timeSignature={timeSignature} selectTimeSignature={selectTimeSignature} />
          <NoteType selectNoteType={selectNoteType} />
          <NoteModifier selectNoteModifier={selectNoteModifier} />
          <RestType selectMusicalSymbol={selectMusicalSymbol} />
          <BarType selectMusicalSymbol={selectMusicalSymbol} />
        </div>
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
