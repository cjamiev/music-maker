import React from 'react';
import './testdisplay.css';

import { keySignatures } from 'constants';

const getCurrentMod = noteModifier => {
  const currentShowAccent = noteModifier.accent ? 'Accent' : '';
  const currentShowStacatto = noteModifier.stacatto ? 'Stacatto' : '';
  const currentShowFermata = noteModifier.fermata ? 'Fermata' : '';
  const currentShowRolled = noteModifier.rolled ? 'Rolled' : '';
  const currentFlat = noteModifier.flat ? ' flat' : '';
  const currentSharp = noteModifier.sharp ? 'sharp' : '';
  const currentNatural = noteModifier.natural ? 'natural': '';

  return `${currentFlat} ${currentSharp} ${currentNatural} ${currentShowAccent} ${currentShowStacatto} ${currentShowFermata} ${currentShowRolled}`;
};

const TestDisplay = ({ keySignature, timeSignature, row, pianoKey, noteType, noteModifier, musicalSymbol, pedal }) => {
  const renderRow = row.map((item, index) => {
    const mainSymbol = item.pianoKey || item.musicalSymbol;
    const showAccent = item.noteModifier.accent ? 'Accent' : '';
    const showStacatto = item.noteModifier.stacatto ? 'Stacatto' : '';
    const showFermata = item.noteModifier.fermata ? 'Fermata' : '';
    const showRolled = item.noteModifier.rolled ? 'Rolled' : '';
    const mod = `${item.noteModifier.accidental} ${showAccent} ${showStacatto} ${showFermata} ${showRolled}`;

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
  const currentMod = getCurrentMod(noteModifier);
  const keySignatureLabel = keySignatures.find(item => item.key === keySignature).label;

  return (
    <div className="staff-container">
      {'Key of ' + keySignatureLabel}<br />
      {'Time Signature: ' + timeSignature}<br />
      <div className="row">
        {renderRow}
      </div>
      <div>
        Selection: {currentMainSymbol || pianoKey} &nbsp;
        {pianoKey && noteType }
        {currentMod} <br/>
        {pedal}
      </div>
    </div>
  );
};

export default TestDisplay;