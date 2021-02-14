import React, { useState } from 'react';
import './timesignature.css';

import { timeSignatures } from 'constants';

const TimeSignatureSelector = ({ timeSignature, selectTimeSignature }) => {
  const [toggle, setToggle] = useState(false);
  const renderTimeSignatureButtons = timeSignatures.map(item => {
    return (<button key={item.key} onClick={() => { selectTimeSignature(item.key); }}>{item.label}</button>);
  });

  const toggleDropdownSelection = () => {
    setToggle(!toggle);
  };
  const className = toggle ? 'timesignature-dropdown timesignature-dropdown-active' : 'timesignature-dropdown';
  const timeSignatureLabel = timeSignatures.find(item => item.key === timeSignature).label;

  return (
    <div className={className} onClick={toggleDropdownSelection}>
      Time {timeSignatureLabel}
      <div className="timesignature-dropdown-content">
        {renderTimeSignatureButtons}
      </div>
    </div>
  );
};

export default TimeSignatureSelector;

