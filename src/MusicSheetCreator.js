import React, { useState } from 'react';
import SVGCreator from './SVGCreator';
import './music-sheet-creator.css';

const DisplaySelection = ({ notes, selectedNote, selectItem }) => {
  const displayNotes = notes.map((note, index) => {
    const className = selectedNote === index ? 'display-note display-note-active' : 'display-note';
    return (
      <div key={note + index} className={className} onClick={() => { selectItem(index); }}>
        <SVGCreator notes={[note]} />
      </div>
    );
  });

  return (
    <div className="display-selection">
      {displayNotes}
    </div>
  );
};

const NoteSelector = (props) => {
  return (
    <div>
      <div className="note-selection">
        <button className='note-btn' onClick={() => props.selectNote('E3')}>E</button>
        <button className='note-btn' onClick={() => props.selectNote('F3')}>F</button>
        <button className='note-btn' onClick={() => props.selectNote('G3')}>G</button>
        <button className='note-btn' onClick={() => props.selectNote('A3')}>A</button>
        <button className='note-btn' onClick={() => props.selectNote('B3')}>B</button>
      </div>
      <div className="note-selection">
        <button className='note-btn' onClick={() => props.selectNote('C4')}>Middle C</button>
        <button className='note-btn' onClick={() => props.selectNote('D4')}>D</button>
        <button className='note-btn' onClick={() => props.selectNote('E4')}>E</button>
        <button className='note-btn' onClick={() => props.selectNote('F4')}>F</button>
        <button className='note-btn' onClick={() => props.selectNote('G4')}>G</button>
        <button className='note-btn' onClick={() => props.selectNote('A4')}>A</button>
        <button className='note-btn' onClick={() => props.selectNote('B4')}>B</button>
      </div>
      <div className="note-selection">
        <button className='note-btn' onClick={() => props.selectNote('C5')}>C</button>
        <button className='note-btn' onClick={() => props.selectNote('D5')}>D</button>
        <button className='note-btn' onClick={() => props.selectNote('E5')}>E</button>
        <button className='note-btn' onClick={() => props.selectNote('F5')}>F</button>
        <button className='note-btn' onClick={() => props.selectNote('G5')}>G</button>
        <button className='note-btn' onClick={() => props.selectNote('A5')}>High A</button>
        <button className='note-btn' onClick={() => props.selectNote('B5')}>B</button>
      </div>
      <div className="note-selection">
        <button className='note-btn' onClick={() => props.selectNote('C6')}>C</button>
        <button className='note-btn' onClick={() => props.selectNote('D6')}>D</button>
        <button className='note-btn' onClick={() => props.selectNote('E6')}>E</button>
        <button className='note-btn' onClick={() => props.selectNote('F6')}>F</button>
      </div>
    </div>
  );
};

const MusicSheetCreator = () => {
  const [sheet, setSheet] = useState(['C4quarter']);
  const [index, setIndex] = useState(0);
  const [noteType, setNoteType] = useState('quarter');

  const addNote = () => {
    setIndex(sheet.length);
    const updatedSheet = sheet.concat('C4quarter');
    setSheet(updatedSheet);
  };

  const removeNote = () => {
    if (sheet.length > 1) {
      const updatedSheet = sheet.filter((item, i) => i !== index);
      setSheet(updatedSheet);
      setIndex(0);
    }
  };

  const selectNote = note => {
    const updatedSheet = sheet.map((item, i) => {
      return i === index ? note + noteType : item;
    });
    setSheet(updatedSheet);
  };

  const selectIndex = newIndex => {
    setIndex(newIndex);
  };

  const selectNoteType = newNoteType => {
    setNoteType(newNoteType);
    const updatedSheet = sheet.map((item, i) => {
      return i === index ? item.substring(0, 2) + newNoteType : item;
    });
    setSheet(updatedSheet);
  };

  return (
    <div className="main">
      <div>
        <button className="add-btn" onClick={() => { selectNoteType('whole'); }}>Whole Note</button>
        <button className="add-btn" onClick={() => { selectNoteType('half'); }}>Half Note</button>
        <button className="add-btn" onClick={() => { selectNoteType('quarter'); }}>Quarter Note</button>
      </div>
      <DisplaySelection notes={sheet} selectedNote={index} selectItem={selectIndex} />
      <NoteSelector selectNote={selectNote} />
      <button className="add-btn" onClick={addNote}>Add New Note</button>
      <button className="add-btn" onClick={removeNote}>Remove Selected Note</button>
    </div>
  );
};

export default MusicSheetCreator;
