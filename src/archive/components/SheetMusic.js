import React from 'react';
import './sheet-music.css';

const SheetMusic = ({ keySignature, timeSignature, row, pianoKey, noteType, noteModification, musicalSymbol, pedal }) => {
  const renderRow = row.map((item, index) => {
    const mainSymbol = item.pianoKey || item.musicalSymbol;
    const showAccent = item.noteModification.accent ? 'Accent' : '';
    const showStacatto = item.noteModification.stacatto ? 'Stacatto' : '';
    const showFermata = item.noteModification.fermata ? 'Fermata' : '';
    const showRolled = item.noteModification.rolled ? 'Rolled' : '';
    const mod = `${item.noteModification.accidental} ${showAccent} ${showStacatto} ${showFermata} ${showRolled}`;

    return (
      <div key={item.pianoKey || item.musicalSymbol + index} className="item">
        {mainSymbol}<br />
        {item.pianoKey && item.noteType}<br />
        {mod}<br />
        {item.pedal}
      </div>
    );
  });

  const currentMainSymbol = pianoKey || musicalSymbol;
  const currentShowAccent = noteModification.accent ? 'Accent' : '';
  const currentShowStacatto = noteModification.stacatto ? 'Stacatto' : '';
  const currentShowFermata = noteModification.fermata ? 'Fermata' : '';
  const currentShowRolled = noteModification.rolled ? 'Rolled' : '';
  const currentMod = `${noteModification.accidental} ${currentShowAccent} ${currentShowStacatto} ${currentShowFermata} ${currentShowRolled}`;

  return (
    <div className="staff-container">
      {'Key Signature: ' + keySignature}<br />
      {'Time Signature: ' + timeSignature}<br />
      <div className="row">
        {renderRow}
      </div>
      <div>
        Current selection<br />
        {currentMainSymbol}<br />
        {pianoKey && noteType}<br />
        {currentMod}<br />
        {pedal}
      </div>
    </div>
  );
};

export default SheetMusic;