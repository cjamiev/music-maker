import React, { useState } from 'react';
import './notemodifier.css';

import { noteModifierTypes } from 'constants';

const NoteModifier = ({ selectNoteModification }) => {
  const [toggle, setToggle] = useState(false);
  const renderNoteModifierTypeButtons = noteModifierTypes.map(item => {
    return (<button key={item.label} onClick={() => { selectNoteModification(item.key); }}>{item.label}</button>);
  });

  const toggleDropdownSelection = () => {
    setToggle(!toggle);
  };
  const className = toggle ? 'notemodifier-dropdown notemodifier-dropdown-active' : 'notemodifier-dropdown';

  return (
    <div className={className} onClick={toggleDropdownSelection}>
      Note Modifier
      <div className="notemodifier-dropdown-content">
        {renderNoteModifierTypeButtons}
      </div>
    </div>
  );
};

export default NoteModifier;

