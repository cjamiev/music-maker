import React from 'react';
import { pianoKeyList } from 'constants';
import './piano.css';

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