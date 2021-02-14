import React, { useState } from 'react';
import { restTypes } from 'constants';
import './resttype.css';

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

