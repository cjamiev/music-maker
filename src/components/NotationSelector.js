import React from 'react';
import Keyboard from './Keyboard';
import KeySignature from './KeySignature';
import TimeSignature from './TimeSignature';
import NoteTypeSelector from './NoteTypeSelector';
import NoteModifierSelector from './NoteModifierSelector';
import RestSelector from './RestSelector';
import BarSelector from './BarSelector';
import PedalSelector from './PedalSelector';
import './note-type-selector.css';

const NotationSelector = ({ selectKeySignature, selectTimeSignature, selectPianoKey, selectNoteType, selectNoteModification, selectMusicalSymbol, selectPedal }) => {
  return (
    <div className='input-grid'>
      <KeySignature selectKeySignature={selectKeySignature} />
      <TimeSignature selectTimeSignature={selectTimeSignature} />
      <NoteTypeSelector selectNoteType={selectNoteType} />
      <NoteModifierSelector selectNoteModification={selectNoteModification} />
      <RestSelector selectMusicalSymbol={selectMusicalSymbol} />
      <BarSelector selectMusicalSymbol={selectMusicalSymbol} />
      <PedalSelector selectPedal={selectPedal} />
      <Keyboard selectPianoKey={selectPianoKey} />
    </div>
  );
};

export default NotationSelector;
