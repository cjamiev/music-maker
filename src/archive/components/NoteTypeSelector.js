import React, { useState } from 'react';
import './note-type-selector.css';

const noteTypes = [
  { key: 'whole-note', label: 'Whole Note' },
  { key: 'half-note', label: 'Half Note' },
  { key: 'quarter-note', label: 'Quarter Note' },
  { key: 'eigth-note', label: '8th Note' },
  { key: 'sixteenth-note', label: '16th Note' },
  { key: 'dotted-whole-note', label: 'Dotted Whole Note' },
  { key: 'dotted-half-note', label: 'Dotted Half Note' },
  { key: 'dotted-quarter-note', label: 'Dotted Quarter Note' },
  { key: 'dotted-eigth-note', label: 'Dotted 8th Note' },
  { key: 'dotted-sixteenth-note', label: 'Dotted 16th Note' }
];

const NoteTypeSelector = ({ selectNoteType }) => {
  const [toggle, setToggle] = useState(false);
  const renderNoteTypeButtons = noteTypes.map(item => {
    return (<button key={item.key} onClick={() => { selectNoteType(item.key); }}>{item.label}</button>);
  });

  const toggleDropdownSelection = () => {
    setToggle(!toggle);
  };
  const className = toggle ? 'note-type-dropdown note-type-dropdown-active' : 'note-type-dropdown';

  return (
    <div className={className} onClick={toggleDropdownSelection}>
      Note Selector
      <div className="note-type-dropdown-content">
        {renderNoteTypeButtons}
      </div>
    </div>
  );
};

export default NoteTypeSelector;

