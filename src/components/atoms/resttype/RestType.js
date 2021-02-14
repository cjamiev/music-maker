import React, { useState } from 'react';
import './resttype.css';

const restTypes = [
  { key: 'whole-rest', label: 'Whole Rest' },
  { key: 'half-rest', label: 'Half Rest' },
  { key: 'quarter-rest', label: 'Quarter Rest' },
  { key: 'eigth-rest', label: '8th Rest' },
  { key: 'sixteenth-rest', label: '16th Rest' },
  { key: 'dotted-whole-rest', label: 'Dotted Whole Rest' },
  { key: 'dotted-half-rest', label: 'Dotted Half Rest' },
  { key: 'dotted-quarter-rest', label: 'Dotted Quarter Rest' },
  { key: 'dotted-eigth-rest', label: 'Dotted 8th Rest' },
  { key: 'dotted-sixteenth-rest', label: 'Dotted 16th Rest' }
];

const RestType = ({ selectMusicalSymbol }) => {
  const [toggle, setToggle] = useState(false);
  const renderRestTypeButtons = restTypes.map(item => {
    return (<button key={item.key} onClick={() => { selectMusicalSymbol(item.key); }}>{item.label}</button>);
  });

  const toggleDropdownSelection = () => {
    setToggle(!toggle);
  };
  const className = toggle ? 'resttype-dropdown resttype-dropdown-active' : 'resttype-dropdown';

  return (
    <div className={className} onClick={toggleDropdownSelection}>
      Rest Selector
      <div className="resttype-dropdown-content">
        {renderRestTypeButtons}
      </div>
    </div>
  );
};

export default RestType;

