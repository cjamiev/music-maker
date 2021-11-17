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

const MusicStand = ({ keySignature, timeSignature, row, pianoKey, noteType, noteModifier, musicalSymbol, pedal, handleClick }) => {
  const renderRow = row.map((item, index) => {
    const mainSymbol = item.pianoKey || item.musicalSymbol;
    const showAccent = item.noteModifier.accent ? 'Accent' : '';
    const showStacatto = item.noteModifier.stacatto ? 'Stacatto' : '';
    const showFermata = item.noteModifier.fermata ? 'Fermata' : '';
    const showRolled = item.noteModifier.rolled ? 'Rolled' : '';
    const mod = `${item.noteModifier.accidental} ${showAccent} ${showStacatto} ${showFermata} ${showRolled}`;

    return (
      <div key={item.pianoKey || item.musicalSymbol + index} className="item" >
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
        <button onClick={() => { handleClick('key'); }}>Key</button>
        <label>&nbsp;{keySignatureLabel}</label><br />
        <button onClick={() => { handleClick('time'); }}>Time</button>
        <label>&nbsp;{timeSignature}</label><br />
        <button onClick={() => { handleClick('symbol'); }}>Symbol</button>
        <label>&nbsp;{symbol}&nbsp;</label><br/>
        <button onClick={() => { handleClick('note'); }}>Note</button>
        <label>{pianoKey && noteType }</label>
        <button onClick={() => { handleClick('modifier'); }}>Modofier</button>
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