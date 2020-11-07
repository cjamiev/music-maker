import React, { useState } from 'react';
import MusicSymbolGenerator from './MusicSymbols/MusicSymbolGenerator';
import './music-sheet-creator.css';

const INDEX_ZERO = 0;
const AT_LEAST_ONE = 1;
const DEFAULT_SYMBOL = {
  key: 'C4',
  type: 'quarter',
  dotted: false,
  stacatto: false,
  flat: false,
  sharp: false,
  fermata: false
};

const DisplaySelection = ({ sheet, selectItem, currentIndex }) => {
  const displayNotes = sheet.map((symbol, index) => {
    const className = currentIndex === index ? 'display-note display-note-active' : 'display-note';
    return (
      <div key={symbol.key + index} className={className} onClick={() => { selectItem(index); }}>
        <MusicSymbolGenerator symbol={symbol} />
      </div>
    );
  });

  return (
    <div className="display-selection">
      {displayNotes}
    </div>
  );
};

const SymbolSelector = ({ selectKey, selectNoteType, selectDotted, selectStacatto, selectSymbol }) => {
  return (
    <div className="symbol-selection">
      <div className="note-type-selection">
        <button className="add-btn" onClick={() => { selectNoteType('whole'); }}>Whole Note</button>
        <button className="add-btn" onClick={() => { selectNoteType('half'); }}>Half Note</button>
        <button className="add-btn" onClick={() => { selectNoteType('quarter'); }}>Quarter Note</button>
        <button className="add-btn" onClick={() => { selectDotted(); }}>Dotted</button>
        <button className="add-btn" onClick={() => { selectStacatto(); }}>Stacatto</button>
      </div>
      <div>
        <div className="note-selection">
          <button className='note-btn' onClick={() => selectKey('C6')}>C</button>
          <button className='note-btn' onClick={() => selectKey('D6')}>D</button>
          <button className='note-btn' onClick={() => selectKey('E6')}>E</button>
          <button className='note-btn' onClick={() => selectKey('F6')}>F</button>
        </div>
        <div className="note-selection">
          <button className='note-btn' onClick={() => selectKey('C5')}>C</button>
          <button className='note-btn' onClick={() => selectKey('D5')}>D</button>
          <button className='note-btn' onClick={() => selectKey('E5')}>E</button>
          <button className='note-btn' onClick={() => selectKey('F5')}>F</button>
          <button className='note-btn' onClick={() => selectKey('G5')}>G</button>
          <button className='note-btn' onClick={() => selectKey('A5')}>High A</button>
          <button className='note-btn' onClick={() => selectKey('B5')}>B</button>
        </div>
        <div className="note-selection">
          <button className='note-btn' onClick={() => selectKey('C4')}>Middle C</button>
          <button className='note-btn' onClick={() => selectKey('D4')}>D</button>
          <button className='note-btn' onClick={() => selectKey('E4')}>E</button>
          <button className='note-btn' onClick={() => selectKey('F4')}>F</button>
          <button className='note-btn' onClick={() => selectKey('G4')}>G</button>
          <button className='note-btn' onClick={() => selectKey('A4')}>A</button>
          <button className='note-btn' onClick={() => selectKey('B4')}>B</button>
        </div>
        <div className="note-selection">
          <button className='note-btn' onClick={() => selectKey('E3')}>E</button>
          <button className='note-btn' onClick={() => selectKey('F3')}>F</button>
          <button className='note-btn' onClick={() => selectKey('G3')}>G</button>
          <button className='note-btn' onClick={() => selectKey('A3')}>A</button>
          <button className='note-btn' onClick={() => selectKey('B3')}>B</button>
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
  const [sheet, setSheet] = useState([DEFAULT_SYMBOL]);
  const [index, setIndex] = useState(INDEX_ZERO);

  const addNote = () => {
    setIndex(sheet.length);
    const updatedSheet = sheet.concat(DEFAULT_SYMBOL);
    setSheet(updatedSheet);
  };

  const removeNote = () => {
    if (sheet.length > AT_LEAST_ONE) {
      const updatedSheet = sheet.filter((item, i) => i !== index);
      setSheet(updatedSheet);
      setIndex(INDEX_ZERO);
    }
  };

  const selectKey = key => {
    const updatedSheet = sheet.map((item, i) => {
      const type = item.type ? item.type : 'quarter';
      if (i === index) {
        return {
          ...item,
          key,
          type
        };
      }
      else {
        return item;
      }
    });
    setSheet(updatedSheet);
  };

  const selectNoteType = noteType => {
    const updatedSheet = sheet.map((item, i) => {
      if (i === index) {
        const key = item.type ? item.key : 'C4';
        return {
          ...item,
          type: noteType,
          key
        };
      }
      else {
        return item;
      }
    });
    setSheet(updatedSheet);
  };

  const selectDotted = () => {
    const updatedSheet = sheet.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          dotted: !item.dotted
        };
      }
      else {
        return item;
      }
    });
    setSheet(updatedSheet);
  };

  const selectStacatto = () => {
    const updatedSheet = sheet.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          stacatto: !item.stacatto
        };
      }
      else {
        return item;
      }
    });
    setSheet(updatedSheet);
  };

  const selectSymbol = key => {
    const updatedSheet = sheet.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          key,
          dotted: false,
          stacatto: false,
          type: ''
        };
      }
      else {
        return item;
      }
    });
    setSheet(updatedSheet);
  };

  const selectIndex = newIndex => {
    setIndex(newIndex);
  };

  return (
    <div className="main">
      <DisplaySelection sheet={sheet} currentIndex={index} selectItem={selectIndex} />
      <SymbolSelector selectKey={selectKey} selectNoteType={selectNoteType} selectDotted={selectDotted} selectStacatto={selectStacatto} selectSymbol={selectSymbol} />
      <button className="add-btn" onClick={addNote}>Add New Note</button>
      <button className="add-btn" onClick={removeNote}>Remove Selected Note</button>
    </div>
  );
};

export default MusicSheetCreator;
