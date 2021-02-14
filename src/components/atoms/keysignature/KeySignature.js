import React, { useState } from 'react';
import './keysignature.css';

import { keySignatures } from 'constants';

const KeySignature = ({ keySignature, selectKeySignature }) => {
  const [toggle, setToggle] = useState(false);
  const renderKeySignatureButtons = keySignatures.map(item => {
    return (<button key={item.key} onClick={() => { selectKeySignature(item.key); }}>{item.label}</button>);
  });

  const toggleDropdownSelection = () => {
    setToggle(!toggle);
  };
  const className = toggle ? 'keysignature-dropdown keysignature-dropdown-active' : 'keysignature-dropdown';
  const keySignatureLabel = keySignatures.find(item => item.key === keySignature).label;

  return (
    <div className={className} onClick={toggleDropdownSelection}>
      Key of {keySignatureLabel}
      <div className="keysignature-dropdown-content">
        {renderKeySignatureButtons}
      </div>
    </div>
  );
};

export default KeySignature;