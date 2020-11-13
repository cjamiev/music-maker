import React, { useState } from 'react';
import SheetMusic from './components/SheetMusic';
import NotationSelector from './components/NotationSelector';
// import MusicSheetCreator from './MusicSheetCreator';
import './App.css';

const App = () => {
  const [keySignature, setKeySignature] = useState('');
  const [timeSignature, setTimeSignature] = useState('4/4');
  const [pianoKey, setPianoKey] = useState('C4');
  const [noteType, setNoteType] = useState('quarter');
  const [noteModification, setNoteModification] = useState({ accidental: '', accent: false, rolled: false, stacatto: false, fermata: false });
  const [musicalSymbol, setMusicalSymbol] = useState('');
  const [pedal, setPedal] = useState('');

  const selectKeySignature = (selected) => {
    setKeySignature(selected);
  };

  const selectTimeSignature = (selected) => {
    setTimeSignature(selected);
  };

  const selectPianoKey = (selected) => {
    setPianoKey(selected);
    setMusicalSymbol('');
  };

  const selectNoteType = (selected) => {
    setNoteType(selected);
  };

  const selectNoteModification = (selected) => {
    const isSameAccidental = noteModification.accidental === selected.accidental;
    const isAccent = selected.accent;
    const isRolled = selected.rolled;
    const isFermata = selected.fermata;
    const isStacatto = selected.stacatto;

    const updatedNoteModification = {
      accidental: isSameAccidental ? '' : selected.accidental || noteModification.accidental,
      accent: isAccent ? !noteModification.accent : noteModification.accent,
      rolled: isRolled ? !noteModification.rolled : noteModification.rolled,
      stacatto: isStacatto ? !noteModification.stacatto : noteModification.stacatto,
      fermata: isFermata ? !noteModification.fermata : noteModification.fermata
    };
    setNoteModification(updatedNoteModification);
  };

  const selectMusicalSymbol = (selected) => {
    setMusicalSymbol(selected);
    setPianoKey('');
  };

  const selectPedal = (selected) => {
    setPedal(selected);
  };

  return (
    <div className='main'>
      <SheetMusic
        keySignature={keySignature}
        timeSignature={timeSignature}
        pianoKey={pianoKey}
        noteType={noteType}
        noteModification={noteModification}
        musicalSymbol={musicalSymbol}
        pedal={pedal}
      />
      <NotationSelector
        selectKeySignature={selectKeySignature}
        selectTimeSignature={selectTimeSignature}
        selectPianoKey={selectPianoKey}
        selectNoteType={selectNoteType}
        selectNoteModification={selectNoteModification}
        selectMusicalSymbol={selectMusicalSymbol}
        selectPedal={selectPedal}
      />
      {/* <MusicSheetCreator /> */}
    </div>
  );
};

export default App;
