import React from 'react';
import { keySignatures } from 'constants';
import './musicstand.css';

const getModifier = noteModifier => {
  const showAccent = noteModifier.accent ? 'Accent' : '';
  const showStacatto = noteModifier.stacatto ? 'Stacatto' : '';
  const showFermata = noteModifier.fermata ? 'Fermata' : '';
  const showRolled = noteModifier.rolled ? 'Rolled' : '';
  const showAccidental = noteModifier.accidental ? ` ${noteModifier.accidental}`: '';

  return `${showAccidental} ${showAccent} ${showStacatto} ${showFermata} ${showRolled}`;
};

const MusicStand = ({ keySignature, timeSignature, row, pianoKey, noteType, noteModifier, musicalSymbol, pedal }) => {
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

  const symbol = pianoKey || musicalSymbol;
  const modifier = getModifier(noteModifier);
  const keySignatureLabel = keySignatures.find(item => item.key === keySignature).label;

  return (
    <div className="music-stand">
      <div className="sheet">
        <label>{'Key of ' + keySignatureLabel}</label><br />
        <label>{'Time Signature: ' + timeSignature}</label><br />
        <label>{'Selection ' + symbol}&nbsp;</label>
        <label>{pianoKey && noteType }</label>
        <label>{modifier}</label><br/>
        <label>{pedal}</label>
        <div className="row">
          {renderRow}
        </div>
      </div>
    </div>
  );
};

export default MusicStand;