import React from 'react';
import './testdisplay.css';

import { keySignatures } from 'constants';

const getCurrentMod = noteModifier => {
  const showAccent = noteModifier.accent ? 'Accent' : '';
  const showStacatto = noteModifier.stacatto ? 'Stacatto' : '';
  const showFermata = noteModifier.fermata ? 'Fermata' : '';
  const showRolled = noteModifier.rolled ? 'Rolled' : '';
  const showAccidental = noteModifier.accidental ? ` ${noteModifier.accidental}`: '';

  return `${showAccidental} ${showAccent} ${showStacatto} ${showFermata} ${showRolled}`;
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