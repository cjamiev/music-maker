import React from 'react';
import Keyboard from './Keyboard';
import NoteTypeSelector from './NoteTypeSelector';
import './note-type-selector.css';

const NotationSelector = ({ selectPianoKey, selectNoteType }) => {
  return (
    <div className='input-grid'>
      <NoteTypeSelector selectNoteType={selectNoteType} />
      <Keyboard selectPianoKey={selectPianoKey} />
    </div>
  );
};

export default NotationSelector;

