import React, { useState } from 'react';
import Draw from '../archive/svg/Draw';
import CreateSheetMusicForm from './CreateSheetMusicForm';
import './styles.css';

const CreateSheetMusic = () => {
  const [pianoKey, setPianoKey] = useState('C4');
  const [musicalSymbol, setMusicalSymbol] = useState('');

  const selectPianoKey = (selected) => {
    setPianoKey(selected);
    setMusicalSymbol('');
  };

  return (
    <div>
      <Draw musicalSymbol={musicalSymbol} pianoKey={pianoKey} noteType={'quarter'} noteModifier={{}} />
      <CreateSheetMusicForm selectPianoKey={selectPianoKey} />
    </div>
  );
};

export default CreateSheetMusic;
