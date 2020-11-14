import React from 'react';
import Keyboard from './Keyboard';
import KeySignature from './KeySignature';
import TimeSignature from './TimeSignature';
import NoteTypeSelector from './NoteTypeSelector';
import NoteModifierSelector from './NoteModifierSelector';
import RestSelector from './RestSelector';
import BarSelector from './BarSelector';
import PedalSelector from './PedalSelector';
import './notation-selector.css';

const NotationSelector = ({ selectKeySignature, selectTimeSignature, selectPianoKey, selectNoteType, selectNoteModification, selectMusicalSymbol, selectPedal, addItem }) => {
  return (
    <div className='input-grid'>
      <NoteTypeSelector selectNoteType={selectNoteType} />
      <NoteModifierSelector selectNoteModification={selectNoteModification} />
      <BarSelector selectMusicalSymbol={selectMusicalSymbol} />
      <RestSelector selectMusicalSymbol={selectMusicalSymbol} />
      <div className="keyboard-container">
        <div className="keyboard-left-area">
          <KeySignature selectKeySignature={selectKeySignature} />
          <TimeSignature selectTimeSignature={selectTimeSignature} />
        </div>
        <Keyboard selectPianoKey={selectPianoKey} />
        <div className="keyboard-right-area">
          <button onClick={addItem}>Add</button>
        </div>
      </div>
      <PedalSelector selectPedal={selectPedal} />
    </div>
  );
};

export default NotationSelector;
