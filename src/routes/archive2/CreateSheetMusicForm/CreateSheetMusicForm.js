import React from 'react';
import Piano from '../Piano';
import './createsheetmusicform.css';

const CreateSheetMusicForm = ({ selectPianoKey }) => {
  return (
    <div className='input-grid'>
      <div className="keyboard-container">
        <Piano selectPianoKey={selectPianoKey} />
      </div>
    </div>
  );
};

export default CreateSheetMusicForm;
