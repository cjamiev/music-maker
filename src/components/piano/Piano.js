import React from 'react';
const pianoKeyList = ['A3', 'A#3', 'B3',
  'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A4', 'A#4', 'B4',
  'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A5', 'A#5', 'B5',
  'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A6', 'A#6', 'B6',
  'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A7'
];

const Piano = ({ selectPianoKey }) => {
  const renderPianoKeys = pianoKeyList.map(pianoKeyId => {
    const isBlackKey = pianoKeyId.includes('#');
    const className = isBlackKey ? 'key black' : 'key white';
    const pianoKeyName = isBlackKey ? '' : pianoKeyId;

    return (
      <div key={pianoKeyId} className={className} onClick={() => { selectPianoKey(pianoKeyId); }}>
        <span className='piano-text'>
          {pianoKeyName}
        </span>
      </div>
    );
  });

  return (
    <div className='piano'>
      {renderPianoKeys}
    </div>
  );
};

export default Piano;