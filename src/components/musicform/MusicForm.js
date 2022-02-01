import React, { useState } from 'react';
import RestSelector from './RestSelector';
import PedalSelector from './PedalSelector';
import Piano from './Piano';
import Button from 'components/button';

const MusicForm = ({ selectSymbol }) => {
  const [type, setType] = useState('piano');

  return (
    <div className='music-form'>
      <Button
        label='Select Rest'
        classColor="primary"
        onClick={() => { setType('rest'); }}
      />
      <Button
        label='Select Notes'
        classColor="primary"
        onClick={() => { setType('piano'); }}
      />
      <Button
        label='Select Pedal'
        classColor="primary"
        onClick={() => { setType('pedal'); }}
      />
      {type === 'rest' && <RestSelector selectRestSymbol={(selectedRestSymbol) => {
        selectSymbol({
          component: 'Rest',
          conditions: selectedRestSymbol
        });
      }} />}
      {type === 'pedal' && <PedalSelector selectPedalSymbol={(selectedPedalSymbol) => {
        selectSymbol({
          component: 'Pedal',
          conditions: selectedPedalSymbol
        });
      }} />}
      {type === 'piano' && <Piano selectPianoKey={(selectedNoteSymbol) => {
        selectSymbol({
          component: 'Note',
          pianoKey: selectedNoteSymbol
        });
      }} />}
    </div>
  );
};

export default MusicForm;