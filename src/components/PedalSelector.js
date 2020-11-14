import React, { useState } from 'react';
import './pedal-selector.css';

const pedalTypes = [
  { key: 'pedal-start', label: 'Pedal Start' },
  { key: 'pedal-continue', label: 'Continue' },
  { key: 'pedal-overlap', label: 'Overlap' },
  { key: 'pedal-end', label: 'End' },
  { key: '', label: 'Remove' }
];

const PedalTypeSelector = ({ selectPedal }) => {
  const [toggle, setToggle] = useState(false);
  const renderPedalTypeButtons = pedalTypes.map(item => {
    return (<button className="pedal-btns" key={item.key} onClick={() => { selectPedal(item.key); }}>{item.label}</button>);
  });

  const toggleDropdownSelection = () => {
    setToggle(!toggle);
  };
  return (
    <div className="pedal-container" onClick={toggleDropdownSelection}>
      {renderPedalTypeButtons}
    </div>
  );
};

export default PedalTypeSelector;

