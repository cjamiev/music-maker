import React, { useState } from 'react';
import { barTypes } from 'constants';
import './bartype.css';

const BarType = ({ selectMusicalSymbol }) => {
  const [toggle, setToggle] = useState(false);
  const renderBarTypeButtons = barTypes.map(item => {
    return (<button key={item.key} onClick={() => { selectMusicalSymbol(item.key); }}>{item.label}</button>);
  });

  const toggleDropdownSelection = () => {
    setToggle(!toggle);
  };
  const className = toggle ? 'bartype-dropdown bartype-dropdown-active' : 'bartype-dropdown';

  return (
    <div className={className} onClick={toggleDropdownSelection}>
      Bar Selector
      <div className="bartype-dropdown-content">
        {renderBarTypeButtons}
      </div>
    </div>
  );
};

export default BarType;

