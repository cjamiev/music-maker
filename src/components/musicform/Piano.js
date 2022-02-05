import React from 'react';
import { pianoKeyList, bassPianoKeyList } from 'constants/pianokeys';

const Piano = ({ selectPianoKey, isBassSelection }) => {
  const renderPianoKeys = pianoKeyList.map((pianoKeyId, index) => {
    const isBlackKey = isBassSelection ? bassPianoKeyList[index].includes('#') : pianoKeyId.includes('#');
    const className = isBlackKey ? 'key black' : 'key white';
    const pianoKeyName = isBassSelection ? bassPianoKeyList[index] : pianoKeyId;

    return (
      <div key={pianoKeyId} className={className} onClick={() => { selectPianoKey(pianoKeyId.replace('#','')); }}>
        <span className='piano-text'>
          {!isBlackKey ? pianoKeyName : ''}
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