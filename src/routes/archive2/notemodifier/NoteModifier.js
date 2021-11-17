import React, { useState } from 'react';
import { noteModifierTypes } from 'constants';
import './notemodifier.css';


const NoteModifier = ({ selectNoteModifier }) => {
  const [toggle, setToggle] = useState(false);
  const renderNoteModifierTypeButtons = noteModifierTypes.map(item => {
    return (<button key={item.label} onClick={() => { selectNoteModifier(item.key); }}>{item.label}</button>);
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

