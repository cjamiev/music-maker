import React, { useState } from 'react';
import './time-signature-selector.css';

const timeSignatures = [
  { key: '2/2', label: '2/2' },
  { key: '2/4', label: '2/4' },
  { key: '3/4', label: '3/4' },
  { key: '4/4', label: '4/4' },
  { key: '3/8', label: '3/8' },
  { key: '6/8', label: '6/8' }
];

const TimeSignatureSelector = ({ selectTimeSignature }) => {
  const [toggle, setToggle] = useState(false);
  const renderTimeSignatureButtons = timeSignatures.map(item => {
    return (<button key={item.key} onClick={() => { selectTimeSignature(item.key); }}>{item.label}</button>);
  });

  const toggleDropdownSelection = () => {
    setToggle(!toggle);
  };
  const className = toggle ? 'time-signature-dropdown time-signature-dropdown-active' : 'time-signature-dropdown';

  return (
    <div className={className} onClick={toggleDropdownSelection}>
      Time Signature
      <div className="time-signature-dropdown-content">
        {renderTimeSignatureButtons}
      </div>
    </div>
  );
};

export default TimeSignatureSelector;

