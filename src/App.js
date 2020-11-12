import React, { useState } from 'react';
import SheetMusic from './components/SheetMusic';
import NotationSelector from './components/NotationSelector';
// import MusicSheetCreator from './MusicSheetCreator';
import './App.css';

const App = () => {
  const [pianoKey, setPianoKey] = useState('C4');
  const [noteType, setNoteType] = useState('quarter');

  const selectPianoKey = (selected) => {
    setPianoKey(selected);
  };

  const selectNoteType = (selected) => {
    setNoteType(selected);
  };

  return (
    <div className='main'>
      <SheetMusic pianoKey={pianoKey} noteType={noteType} />
      <NotationSelector selectPianoKey={selectPianoKey} selectNoteType={selectNoteType} />
      {/* <MusicSheetCreator /> */}
    </div>
  );
};

export default App;
