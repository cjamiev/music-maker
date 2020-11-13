import React, { useState } from 'react';
import './note-modifier-selector.css';

const noteModifierTypes = [
  { key: { accidental: 'flat' }, label: 'flat' },
  { key: { accidental: 'sharp' }, label: 'sharp' },
  { key: { accidental: 'natural' }, label: 'natural' },
  { key: { accent: true }, label: 'accent' },
  { key: { rolled: true }, label: 'rolled' },
  { key: { fermata: true }, label: 'fermata' },
  { key: { stacatto: true }, label: 'stacatto' }
];

const NoteModifierSelector = ({ selectNoteModification }) => {
  const [toggle, setToggle] = useState(false);
  const renderNoteModifierTypeButtons = noteModifierTypes.map(item => {
    return (<button key={item.label} onClick={() => { selectNoteModification(item.key); }}>{item.label}</button>);
  });

  const toggleDropdownSelection = () => {
    setToggle(!toggle);
  };
  const className = toggle ? 'note-modifier-dropdown note-modifier-dropdown-active' : 'note-modifier-dropdown';

  return (
    <div className={className} onClick={toggleDropdownSelection}>
      Note Modifier Selector
      <div className="note-modifier-dropdown-content">
        {renderNoteModifierTypeButtons}
      </div>
    </div>
  );
};

export default NoteModifierSelector;

