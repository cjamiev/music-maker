import React from 'react';
import MusicSymbolGenerator from './MusicSymbols/MusicSymbolGenerator';

const DisplaySelection = ({ trebleStaff, currentTrebleIndex, selectTrebleItem, bassStaff, currentBassIndex, selectBassItem }) => {
  const trebleNotes = trebleStaff.map((symbol, index) => {
    const className = currentTrebleIndex === index ? 'display-note display-note-active' : 'display-note';
    return (
      <div key={symbol.key + index} className={className} onClick={() => { selectTrebleItem(index); }}>
        <MusicSymbolGenerator symbol={symbol} />
      </div>
    );
  });

  const bassNotes = bassStaff.map((symbol, index) => {
    const className = currentBassIndex === index ? 'display-note display-note-active' : 'display-note';
    return (
      <div key={symbol.key + index} className={className} onClick={() => { selectBassItem(index); }}>
        <MusicSymbolGenerator symbol={symbol} />
      </div>
    );
  });

  return (
    <div>
      <div className="display-selection">
        {trebleNotes}
      </div >
      <div className="display-selection">
        {bassNotes}
      </div >
    </div>
  );
};

export default DisplaySelection;