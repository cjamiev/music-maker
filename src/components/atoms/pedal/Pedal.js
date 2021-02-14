import React, { useState } from 'react';
import { pedalTypes } from 'constants';
import './pedal.css';

const Pedal = ({ selectPedal }) => {
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

export default Pedal;
