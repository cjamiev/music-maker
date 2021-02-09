import React, { useState } from 'react';
import Draw from './svg/Draw';
import SheetMusic from './components/SheetMusic';
import NotationSelector from './components/NotationSelector';
import Footer from './layout/Footer';
import './App.css';

const App = () => {
  const [row, setRow] = useState([]);
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

  const addItem = () => {
    const item = {
      pianoKey,
      noteType,
      noteModification,
      musicalSymbol,
      pedal
    };
    const updatedRow = row.concat([item]);
    setRow(updatedRow);
  };

  return (
    <div>
      <main className='main'>
        <SheetMusic
          keySignature={keySignature}
          timeSignature={timeSignature}
          row={row}
          pianoKey={pianoKey}
          noteType={noteType}
          noteModification={noteModification}
          musicalSymbol={musicalSymbol}
          pedal={pedal}
        />
        <NotationSelector
          addItem={addItem}
          selectKeySignature={selectKeySignature}
          selectTimeSignature={selectTimeSignature}
          selectPianoKey={selectPianoKey}
          selectNoteType={selectNoteType}
          selectNoteModification={selectNoteModification}
          selectMusicalSymbol={selectMusicalSymbol}
          selectPedal={selectPedal}
        />
      </main>
      <Footer />

      {/* <Draw musicalSymbol={'sixteenth-rest'} pianoKey={'A#4'} noteType={'whole-note'} /> */}

    </div >
  );
};

export default App;
