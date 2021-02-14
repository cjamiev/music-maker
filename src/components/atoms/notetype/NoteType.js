import React, { useState } from 'react';
import './notetype.css';

import { noteTypes } from 'constants';

const NoteType = ({ selectNoteType }) => {
  const [toggle, setToggle] = useState(false);
  const renderNoteTypeButtons = noteTypes.map(item => {
    return (<button key={item.key} onClick={() => { selectNoteType(item.key); }}>{item.label}</button>);
  });

  const toggleDropdownSelection = () => {
    setToggle(!toggle);
  };
  const className = toggle ? 'notetype-dropdown notetype-dropdown-active' : 'notetype-dropdown';

  return (
    <div className={className} onClick={toggleDropdownSelection}>
      Note Selector
      <div className="notetype-dropdown-content">
        {renderNoteTypeButtons}
      </div>
    </div>
  );
};

export default NoteType;

