import React, { useState } from 'react';
import RestSelector from './RestSelector';
import PedalSelector from './PedalSelector';
import DynamicsSelector from './DynamicsSelector';
import NoteTypeSelector from './NoteTypeSelector';
import Piano from './Piano';
import Button from 'components/button';

const renderSelector = ({type, selectSymbol, noteType, selectNoteType, isBassSelection}) => {
  if(type === 'rest') {
    return (<RestSelector selectRestSymbol={(selectedRestSymbol) => {
      selectSymbol({
        component: 'Rest',
        conditions: selectedRestSymbol
      });
    }} />);
  }
  else if(type === 'pedal') {
    return (<PedalSelector selectPedalSymbol={(selectedPedalSymbol) => {
      selectSymbol({
        component: 'Pedal',
        ...selectedPedalSymbol
      });
    }} />);
  }
  else if (type === 'dynamic') {
    return (<DynamicsSelector selectDynamicsSymbol={(selectDynamicsSymbol) => {
      selectSymbol({
        component: 'Dynamics',
        ...selectDynamicsSymbol
      });
    }} />);
  } else if (type === 'note-type') {
    return ( <NoteTypeSelector selectNoteType={selectNoteType} />);
  } else {
    return (
      <Piano selectPianoKey={(selectedNoteSymbol) => {
        selectSymbol({
          component: 'Note',
          pianoKey: selectedNoteSymbol,
          noteType
        });
      }} isBassSelection={isBassSelection}
      />);
  }
};

const MusicForm = ({ selectSymbol, noteType, selectNoteType, isBassSelection }) => {
  const [type, setType] = useState('piano');

  return (
    <div className='music-form'>
      <div className='music-form__btn-group'>
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
          label='Select Note Type'
          classColor="primary"
          onClick={() => { setType('note-type'); }}
        />
        <Button
          label='Select Pedal'
          classColor="primary"
          onClick={() => { setType('pedal'); }}
        />
        <Button
          label='Select Dynamics'
          classColor="primary"
          onClick={() => { setType('dynamic'); }}
        />
      </div>
      {renderSelector({type, selectSymbol, noteType, selectNoteType, isBassSelection})}
    </div>
  );
};

export default MusicForm;