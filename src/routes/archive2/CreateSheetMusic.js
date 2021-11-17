import React, { useState } from 'react';
import Draw from '../archive/svg/Draw';
import MusicStand from './MusicStand';
import CreateSheetMusicForm from './CreateSheetMusicForm';
import Footer from '../archive/layout/Footer';
import './styles.css';

const CreateSheetMusic = () => {
  const [row, setRow] = useState([]);
  const [keySignature, setKeySignature] = useState('');
  const [timeSignature, setTimeSignature] = useState('4/4');
  const [pianoKey, setPianoKey] = useState('C4');
  const [noteType, setNoteType] = useState('quarter');
  const [noteModifier, setNoteModifier] = useState({ flat: false, sharp: false, natural: false, accent: false, rolled: false, stacatto: false, fermata: false });
  const [musicalSymbol, setMusicalSymbol] = useState('');
  const [pedal, setPedal] = useState('');
  const [showSelector, setShowSelector] = useState(false);

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

  const selectNoteModifier = (selected) => {
    const isSameAccidental = noteModifier.accidental === selected.accidental;
    const isAccent = selected.accent;
    const isRolled = selected.rolled;
    const isStacatto = selected.stacatto;
    const isFermata = selected.fermata;

    const updatedNoteModifier = {
      accidental: isSameAccidental ? '' : selected.accidental || noteModifier.accidental,
      accent: isAccent ? !noteModifier.accent : noteModifier.accent,
      rolled: isRolled ? !noteModifier.rolled : noteModifier.rolled,
      stacatto: isStacatto ? !noteModifier.stacatto : noteModifier.stacatto,
      fermata: isFermata ? !noteModifier.fermata : noteModifier.fermata
    };
    setNoteModifier(updatedNoteModifier);
  };

  const selectMusicalSymbol = (selected) => {
    setMusicalSymbol(selected);
    setPianoKey('');
  };

  const selectPedal = (selected) => {
    setPedal(selected);
  };

  const addItem = () => {
    const item = { pianoKey, noteType, noteModifier, musicalSymbol, pedal };
    const updatedRow = row.concat([item]);

    setRow(updatedRow);
  };

  const handleShowSelector = () => {
    setShowSelector(!showSelector);
  };

  return (
    <div>
      <Draw musicalSymbol={musicalSymbol} pianoKey={pianoKey} noteType={noteType} noteModifier={noteModifier} />
      {!showSelector &&
        <div className='divStyle'>
          Test Area
        </div>
      }
      <MusicStand
        keySignature={keySignature}
        timeSignature={timeSignature}
        row={row}
        pianoKey={pianoKey}
        noteType={noteType}
        noteModifier={noteModifier}
        musicalSymbol={musicalSymbol}
        pedal={pedal}
        handleClick={handleShowSelector}
      />
      <CreateSheetMusicForm
        addItem={addItem}
        keySignature={keySignature}
        selectKeySignature={selectKeySignature}
        timeSignature={timeSignature}
        selectTimeSignature={selectTimeSignature}
        selectPianoKey={selectPianoKey}
        selectNoteType={selectNoteType}
        selectNoteModifier={selectNoteModifier}
        selectMusicalSymbol={selectMusicalSymbol}
        selectPedal={selectPedal}
      />
      <Footer />
    </div>
  );
};

export default CreateSheetMusic;
