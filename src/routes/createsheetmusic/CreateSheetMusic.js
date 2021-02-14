import React, { useState } from 'react';
import CreateSheetMusicForm from 'components/molecules/CreateSheetMusicForm';

const CreateSheetMusic = () => {
  const [row, setRow] = useState([]);
  const [keySignature, setKeySignature] = useState('');
  const [timeSignature, setTimeSignature] = useState('4/4');
  const [pianoKey, setPianoKey] = useState('C4');
  const [noteType, setNoteType] = useState('quarter');
  const [noteModifier, setNoteModifier] = useState({ flat: false, sharp: false, natural: false, accent: false, rolled: false, stacatto: false, fermata: false });
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

  const selectNoteModifier = (selected) => {
    const isSharp = selected.sharp;
    const isFlat = selected.flat;
    const isNatural = selected.Natural;
    const isAccent = selected.accent;
    const isRolled = selected.rolled;
    const isStacatto = selected.stacatto;
    const isFermata = selected.fermata;

    const updatedNoteModifier = {
      sharp: isSharp ? !noteModifier.sharp : noteModifier.sharp,
      flat: isFlat ? !noteModifier.flat : noteModifier.flat,
      natural: isNatural ? !noteModifier.natural : noteModifier.natural,
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

  return (
    <div>
      <div>Selection:{pianoKey}</div>
      <CreateSheetMusicForm
        addItem={addItem}
        selectKeySignature={selectKeySignature}
        selectTimeSignature={selectTimeSignature}
        selectPianoKey={selectPianoKey}
        selectNoteType={selectNoteType}
        selectNoteModifier={selectNoteModifier}
        selectMusicalSymbol={selectMusicalSymbol}
        selectPedal={selectPedal}
      />
    </div>
  );
};

export default CreateSheetMusic;
