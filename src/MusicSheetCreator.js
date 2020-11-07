import React, { useState } from 'react';
import MusicSymbolGenerator from './MusicSymbols/MusicSymbolGenerator';
import './music-sheet-creator.css';

const DisplaySelection = ({ notes, selectedNote, selectItem }) => {
  const displayNotes = notes.map((note, index) => {
    const className = selectedNote === index ? 'display-note display-note-active' : 'display-note';
    return (
      <div key={note + index} className={className} onClick={() => { selectItem(index); }}>
        <MusicSymbolGenerator symbols={[note]} />
      </div>
    );
  });

  return (
    <div className="display-selection">
      {displayNotes}
    </div>
  );
};

const SymbolSelector = ({ selectSymbol, selectNoteType }) => {
  return (
    <div className="symbol-selection">
      <div className="note-type-selection">
        <button className="add-btn" onClick={() => { selectNoteType('whole'); }}>Whole Note</button>
        <button className="add-btn" onClick={() => { selectNoteType('half'); }}>Half Note</button>
        <button className="add-btn" onClick={() => { selectNoteType('quarter'); }}>Quarter Note</button>
      </div>
      <div>
        <div className="note-selection">
          <button className='note-btn' onClick={() => selectSymbol('C6')}>C</button>
          <button className='note-btn' onClick={() => selectSymbol('D6')}>D</button>
          <button className='note-btn' onClick={() => selectSymbol('E6')}>E</button>
          <button className='note-btn' onClick={() => selectSymbol('F6')}>F</button>
        </div>
        <div className="note-selection">
          <button className='note-btn' onClick={() => selectSymbol('C5')}>C</button>
          <button className='note-btn' onClick={() => selectSymbol('D5')}>D</button>
          <button className='note-btn' onClick={() => selectSymbol('E5')}>E</button>
          <button className='note-btn' onClick={() => selectSymbol('F5')}>F</button>
          <button className='note-btn' onClick={() => selectSymbol('G5')}>G</button>
          <button className='note-btn' onClick={() => selectSymbol('A5')}>High A</button>
          <button className='note-btn' onClick={() => selectSymbol('B5')}>B</button>
        </div>
        <div className="note-selection">
          <button className='note-btn' onClick={() => selectSymbol('C4')}>Middle C</button>
          <button className='note-btn' onClick={() => selectSymbol('D4')}>D</button>
          <button className='note-btn' onClick={() => selectSymbol('E4')}>E</button>
          <button className='note-btn' onClick={() => selectSymbol('F4')}>F</button>
          <button className='note-btn' onClick={() => selectSymbol('G4')}>G</button>
          <button className='note-btn' onClick={() => selectSymbol('A4')}>A</button>
          <button className='note-btn' onClick={() => selectSymbol('B4')}>B</button>
        </div>
        <div className="note-selection">
          <button className='note-btn' onClick={() => selectSymbol('E3')}>E</button>
          <button className='note-btn' onClick={() => selectSymbol('F3')}>F</button>
          <button className='note-btn' onClick={() => selectSymbol('G3')}>G</button>
          <button className='note-btn' onClick={() => selectSymbol('A3')}>A</button>
          <button className='note-btn' onClick={() => selectSymbol('B3')}>B</button>
        </div>
      </div>
      <div className="divider-selection">
        <button className='note-btn' onClick={() => selectSymbol('SymbolMeasureBar')}> Measure Bar</button>
        <button className='note-btn' onClick={() => selectSymbol('SymbolEndBar')}>End Bar</button>
        <button className='note-btn' onClick={() => selectSymbol('SymbolLeftRepeatBar')}>Left Repeat Bar</button>
        <button className='note-btn' onClick={() => selectSymbol('SymbolRightRepeatBar')}>Right Repeat Bar</button>
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

  const selectSymbol = note => {
    const updatedSheet = sheet.map((item, i) => {
      if (!note.includes('Symbol')) {
        return i === index ? note + noteType : item;
      }
      else {
        return i === index ? note : item;
      }
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
      <DisplaySelection notes={sheet} selectedNote={index} selectItem={selectIndex} />
      <SymbolSelector selectSymbol={selectSymbol} selectNoteType={selectNoteType} />
      <button className="add-btn" onClick={addNote}>Add New Note</button>
      <button className="add-btn" onClick={removeNote}>Remove Selected Note</button>
    </div>
  );
};

export default MusicSheetCreator;
