import React, { useState } from 'react';
import './key-signature-selector.css';

const keySignatures = [
  { key: '', label: 'C/a' },
  { key: '1#', label: 'G/e' },
  { key: '2#', label: 'D/b' },
  { key: '3#', label: 'A/f#' },
  { key: '4#', label: 'E/c#' },
  { key: '5#', label: 'B/g#' },
  { key: '6#', label: 'F#/d#' },
  { key: '7#', label: 'C#/a#' },
  { key: '1b', label: 'F/D minor' },
  { key: '2b', label: 'Bb/G minor' },
  { key: '3b', label: 'Eb/C minor' },
  { key: '4b', label: 'Ab/F minor' },
  { key: '5b', label: 'Db/Bb minor' },
  { key: '6b', label: 'Gb/Eb minor' },
  { key: '7b', label: 'Cb/Ab minor' }
];

const KeySignatureSelector = ({ selectKeySignature }) => {
  const [toggle, setToggle] = useState(false);
  const renderKeySignatureButtons = keySignatures.map(item => {
    return (<button key={item.key} onClick={() => { selectKeySignature(item.key); }}>{item.label}</button>);
  });

  const toggleDropdownSelection = () => {
    setToggle(!toggle);
  };
  const className = toggle ? 'key-signature-dropdown key-signature-dropdown-active' : 'key-signature-dropdown';

  return (
    <div className={className} onClick={toggleDropdownSelection}>
      Key Signature
      <div className="key-signature-dropdown-content">
        {renderKeySignatureButtons}
      </div>
    </div>
  );
};

export default KeySignatureSelector;

