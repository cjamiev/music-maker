import React, { useState } from 'react';
import RestSelector from './RestSelector';
import MeasureBarSelector from './MeasureBarSelector';
import PedalSelector from './PedalSelector';
import OttavaSelector from './OttavaSelector';
import DynamicsSelector from './DynamicsSelector';
import NoteTypeSelector from './NoteTypeSelector';
import NoteModifierSelector from './NoteModifierSelector';
import ChordBuilder from './ChordBuilder';
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
      <div className="music-form__middle">
        <div className="music-form__side-btns">
          <ChordBuilder pianoKey={noteConfig.pianoKey} isBassSelection={isBassSelection} selectNoteType={selectNoteType}/>
        </div>
        <div className="music-form__piano">
          <Piano
            selectPianoKey={(selectedNoteSymbol) => {
              selectNoteType({ component: 'Note', pianoKey: selectedNoteSymbol });
            }}
            isBassSelection={isBassSelection}
          />
        </div>
      </div>
      <div className='music-form__bottom-buttons'>
        <PedalSelector selectPedalSymbol={(selectedPedalSymbol) => {
          selectSymbol({
            component: 'Pedal',
            ...selectedPedalSymbol
          });
        }} />
        <OttavaSelector selectOttavaSymbol={(selectedOttavaSymbol) => {
          selectSymbol({
            component: 'Ottava',
            ...selectedOttavaSymbol
          });
        }} />
        <MeasureBarSelector selectMeasureBar={(selectedMeasureBar) => {
          selectSymbol({
            component: 'Measure',
            ...selectedMeasureBar
          });
        }} />
      </div>
      <div className='music-form__dynamics-buttons'>
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