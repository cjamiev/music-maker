import React, { useState } from 'react';
import RestSelector from './RestSelector';
import MeasureBarSelector from './MeasureBarSelector';
import PedalSelector from './PedalSelector';
import DynamicsSelector from './DynamicsSelector';
import NoteTypeSelector from './NoteTypeSelector';
import NoteModifierSelector from './NoteModifierSelector';
import Piano from './Piano';
import Button from 'components/button';

const MusicForm = ({
  noteConfig,
  selectSymbol,
  selectNoteType,
  isBassSelection
}) => {
  const [type, setType] = useState('piano');

  return (
    <div className='music-form'>
      <div className='music-form__top-buttons'>
        <NoteTypeSelector noteConfig={noteConfig} selectNoteType={selectNoteType} />
        <NoteModifierSelector noteConfig={noteConfig} selectNoteModifier={selectNoteType} />
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
          pianoKey: selectedNoteSymbol
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
        <MeasureBarSelector selectMeasureBar={(selectedMeasureBar) => {
          selectSymbol({
            component: 'Measure',
            ...selectedMeasureBar
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