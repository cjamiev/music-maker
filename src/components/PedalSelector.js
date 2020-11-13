import React, { useState } from 'react';
import './pedal-type-selector.css';

const pedalTypes = [
  { key: 'pedal-start', label: 'Pedal Start' },
  { key: 'pedal-continue', label: 'Pedal Continue' },
  { key: 'pedal-press-release', label: 'Pedal Press/Release' },
  { key: 'pedal-end', label: 'Pedal End' },
  { key: '', label: 'Remove Pedal' }
];

const PedalTypeSelector = ({ selectPedal }) => {
  const [toggle, setToggle] = useState(false);
  const renderPedalTypeButtons = pedalTypes.map(item => {
    return (<button key={item.key} onClick={() => { selectPedal(item.key); }}>{item.label}</button>);
  });

  const toggleDropdownSelection = () => {
    setToggle(!toggle);
  };
  const className = toggle ? 'pedal-type-dropdown pedal-type-dropdown-active' : 'pedal-type-dropdown';

  return (
    <div className={className} onClick={toggleDropdownSelection}>
      Pedal Selector
      <div className="pedal-type-dropdown-content">
        {renderPedalTypeButtons}
      </div>
    </div>
  );
};

export default PedalTypeSelector;

