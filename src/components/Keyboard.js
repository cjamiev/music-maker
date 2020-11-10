import React from 'react';
import './keyboard.css';

const keyList = [
  'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2',
  'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3',
  'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4',
  'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5',
  'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6'
];

const Keyboard = ({ selectPianoKey }) => {
  const renderPianoKeys = keyList.map((keyId) => {
    const isBlackKey = keyId.includes('#');
    const className = isBlackKey ? 'key black' : 'key white';
    const keyName = isBlackKey ? '' : keyId;

    return (<div key={keyId} className={className} onClick={() => { selectPianoKey(keyId); }}>{keyName}</div>);
  });

  return (
    <div className="keyboard">
      {renderPianoKeys}
    </div>
  );
};

export default Keyboard;