import React from 'react';
import Keyboard from './Keyboard';
import NoteTypeSelector from './NoteTypeSelector';
import NoteModifierSelector from './NoteModifierSelector';
import RestSelector from './RestSelector';
import './notation-selector.css';

const NotationSelector = ({ selectKeySignature, selectTimeSignature, selectPianoKey, selectNoteType, selectNoteModification, selectMusicalSymbol, selectPedal, addItem }) => {
  return (
    <div className='input-grid'>
      <NoteTypeSelector selectNoteType={selectNoteType} />
      <NoteModifierSelector selectNoteModification={selectNoteModification} />
      <RestSelector selectMusicalSymbol={selectMusicalSymbol} />
      <div className="keyboard-container">
        <Keyboard selectPianoKey={selectPianoKey} />
        <div className="keyboard-right-area">
          <button onClick={addItem}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default NotationSelector;
