import React, { useState } from 'react';
import './bar-type-selector.css';

const barTypes = [
  { key: 'measure-bar', label: 'Measure Bar' },
  { key: 'line-end-bar', label: 'Line End Bar' },
  { key: 'double-line-end-bar', label: 'Double Line End Bar' },
  { key: 'repeat-start-bar', label: 'Repeat Bar Start' },
  { key: 'repeat-end-bar', label: 'Repeat Bar End' }
];

const BarTypeSelector = ({ selectMusicalSymbol }) => {
  const [toggle, setToggle] = useState(false);
  const renderBarTypeButtons = barTypes.map(item => {
    return (<button key={item.key} onClick={() => { selectMusicalSymbol(item.key); }}>{item.label}</button>);
  });

  const toggleDropdownSelection = () => {
    setToggle(!toggle);
  };
  const className = toggle ? 'bar-type-dropdown bar-type-dropdown-active' : 'bar-type-dropdown';

  return (
    <div className={className} onClick={toggleDropdownSelection}>
      Bar Selector
      <div className="bar-type-dropdown-content">
        {renderBarTypeButtons}
      </div>
    </div>
  );
};

export default BarTypeSelector;

