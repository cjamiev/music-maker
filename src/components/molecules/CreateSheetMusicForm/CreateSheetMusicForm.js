import React from 'react';
import Piano from 'components/atoms/Piano';
// import KeySignature from './KeySignature';
// import TimeSignature from './TimeSignature';
// import NoteTypeSelector from './NoteTypeSelector';
// import NoteModifierSelector from './NoteModifierSelector';
// import RestSelector from './RestSelector';
// import BarSelector from './BarSelector';
// import PedalSelector from './PedalSelector';
import './createsheetmusicform.css';

const CreateSheetMusicForm = ({ selectKeySignature, selectTimeSignature, selectPianoKey, selectNoteType, selectNoteModification, selectMusicalSymbol, selectPedal, addItem }) => {
  return (
    <div className='input-grid'>
      {/* <NoteTypeSelector selectNoteType={selectNoteType} />
      <NoteModifierSelector selectNoteModification={selectNoteModification} />
      <BarSelector selectMusicalSymbol={selectMusicalSymbol} />
      <RestSelector selectMusicalSymbol={selectMusicalSymbol} /> */}
      <div className="keyboard-container">
        {/* <div className="keyboard-left-area">
          <KeySignature selectKeySignature={selectKeySignature} />
          <TimeSignature selectTimeSignature={selectTimeSignature} />
        </div> */}
        <Piano selectPianoKey={selectPianoKey} />
        {/* <div className="keyboard-right-area">
          <button onClick={addItem}>Add</button>
        </div> */}
      </div>
      {/* <PedalSelector selectPedal={selectPedal} /> */}
    </div>
  );
};

export default CreateSheetMusicForm;
