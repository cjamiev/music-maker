import React, { useState } from 'react';
import RestSelector from './RestSelector';
import PedalSelector from './PedalSelector';
import DynamicsSelector from './DynamicsSelector';
import NoteTypeSelector from './NoteTypeSelector';
import NoteModifierSelector from './NoteModifierSelector';
import Piano from './Piano';
import Button from 'components/button';

const MusicForm = ({ selectSymbol, noteType, selectNoteType, selectNoteModifier, isBassSelection }) => {
  const [type, setType] = useState('piano');

  return (
    <div className='music-form'>
      <div className='music-form__top-buttons'>
        <NoteTypeSelector selectNoteType={selectNoteType} />
        <NoteModifierSelector selectNoteModifier={selectNoteModifier} />
        <RestSelector selectRestSymbol={(selectedRestSymbol) => {
          selectSymbol({
            component: 'Rest',
            conditions: selectedRestSymbol
          });
        }} />
      </div>
      <Piano selectPianoKey={(selectedNoteSymbol) => {
        selectSymbol({
          component: 'Note',
          pianoKey: selectedNoteSymbol,
          noteType
        });
      }} isBassSelection={isBassSelection}
      />
      <div className='music-form__bottom-buttons'>
        <PedalSelector selectPedalSymbol={(selectedPedalSymbol) => {
          selectSymbol({
            component: 'Pedal',
            ...selectedPedalSymbol
          });
        }} />
        <DynamicsSelector selectDynamicsSymbol={(selectDynamicsSymbol) => {
          selectSymbol({
            component: 'Dynamics',
            ...selectDynamicsSymbol
          });
        }} />
      </div>
    </div>
  );
};

export default MusicForm;