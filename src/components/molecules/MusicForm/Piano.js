import React from 'react';
import { pianoKeyList, bassPianoKeyList } from 'constants/pianokeys';

const Piano = ({ selectedNote, isBassSelection }) => {
  const renderPianoKeys = pianoKeyList.map((pianoKeyId, index) => {
    const isBlackKey = isBassSelection ? bassPianoKeyList[index].includes('#') : pianoKeyId.includes('#');
    const className = isBlackKey ? 'key black' : 'key white';
    const pianoKeyName = isBassSelection ? bassPianoKeyList[index] : pianoKeyId;

    return (
      <div key={pianoKeyId} className={className} onClick={() => { selectedNote({ pianoKey: pianoKeyId.replace('#',''), showNoteSharp: isBlackKey }); }}>
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