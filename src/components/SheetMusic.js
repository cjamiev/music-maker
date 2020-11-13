import React from 'react';
import './sheet-music.css';

const SheetMusic = ({ keySignature, timeSignature, pianoKey, noteType, noteModification, musicalSymbol, pedal }) => {

  return (
    <div className="staff-container">
      {'Key Signature: ' + keySignature}<br />
      {'Time Signature: ' + timeSignature}<br />
      <div className="selection">
        <div className="item">
          {'Piano Key: ' + pianoKey}<br />
          {'Note Type: ' + noteType}<br />
          {'Note Modification: ' + JSON.stringify(noteModification)}<br />
          {'Musical Symbol: ' + musicalSymbol}<br />
          {'Pedal: ' + pedal}<br />
        </div>
      </div>
    </div>
  );
};

export default SheetMusic;