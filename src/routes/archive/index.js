import React, { useState } from 'react';
import DisplaySelection from './DisplaySelection';
import './music-sheet-creator.css';

const keyList = ['F6', 'E6', 'D6', 'C6', 'B5', 'A5', 'G5', 'F5', 'E5', 'D5', 'C5', 'B4', 'A4', 'G4', 'F4', 'E4', 'D4', 'C4', 'B3', 'A3', 'G3', 'F3', 'E3'];
const trebleList = ['F', 'E', 'D', 'C', 'B', 'High A', 'G', 'F', 'E', 'D', 'C', 'B', 'A', 'G', 'F', 'E', 'D', 'Middle C', 'B', 'A', 'G', 'F', 'E'];
const bassList = ['A', 'G', 'F', 'E', 'D', 'Middle C', 'B', 'A', 'G', 'F', 'E', 'D', 'C', 'B', 'A', 'G', 'F', 'Low E', 'D', 'C', 'B', 'A', 'G'];
const INDEX_ZERO = 0;
const AT_LEAST_ONE = 1;
const DEFAULT_TREBLE = {
  key: 'C4',
  type: 'quarter',
  dotted: false,
  stacatto: false,
  flat: false,
  sharp: false,
  fermata: false
};
const DEFAULT_BASS = {
  ...DEFAULT_TREBLE,
  key: 'A5'
};

const SymbolSelector = ({ selectKey, selectNoteType, selectDotted, selectStacatto, selectSymbol, isTreble }) => {
  const noteLabels = isTreble ? trebleList : bassList;
  const renderNotes = keyList.map((item, index) => {
    return (<button key={item + index} className='note-btn' onClick={() => selectKey(item)}>{noteLabels[index]}</button>);
  });

  return (
    <div className="symbol-selection">
      <div className="column-selection">
        <button className="add-btn" onClick={() => { selectSymbol('wholerest'); }}>Whole Rest</button>
        <button className="add-btn" onClick={() => { selectSymbol('halfrest'); }}>Half Rest</button>
        <button className="add-btn" onClick={() => { selectSymbol('quarterrest'); }}>Quarter Rest</button>
        <button className="add-btn" onClick={() => { selectSymbol('8threst'); }}>8th Rest</button>
        <button className="add-btn" onClick={() => { selectSymbol('16threst'); }}>16th Rest</button>
      </div>
      <div className="column-selection">
        <button className="add-btn" onClick={() => { selectNoteType('whole'); }}>Whole Note</button>
        <button className="add-btn" onClick={() => { selectNoteType('half'); }}>Half Note</button>
        <button className="add-btn" onClick={() => { selectNoteType('quarter'); }}>Quarter Note</button>
        <button className="add-btn" onClick={() => { selectDotted(); }}>Dotted</button>
        {/* <button className="add-btn" onClick={() => { selectStacatto(); }}>Stacatto</button> */}
      </div>
      <div className="note-selection">
        {renderNotes}
      </div>
      <div className="column-selection">
        <button className='note-btn' onClick={() => selectSymbol('SymbolMeasureBar')}> Measure Bar</button>
        <button className='note-btn' onClick={() => selectSymbol('SymbolEndBar')}>End Bar</button>
        <button className='note-btn' onClick={() => selectSymbol('SymbolLeftRepeatBar')}>Left Repeat Bar</button>
        <button className='note-btn' onClick={() => selectSymbol('SymbolRightRepeatBar')}>Right Repeat Bar</button>
      </div>
    </div>
  );
};

const MusicSheetCreator = () => {
  const [trebleStaff, setTrebleStaff] = useState([DEFAULT_TREBLE]);
  const [bassStaff, setBassStaff] = useState([DEFAULT_BASS]);
  const [trebleIndex, setTrebleIndex] = useState(INDEX_ZERO);
  const [bassIndex, setBassIndex] = useState(-1);

  const addNote = () => {
    setTrebleIndex(trebleStaff.length);
    const updatedTrebleStaff = trebleStaff.concat(DEFAULT_TREBLE);
    setTrebleStaff(updatedTrebleStaff);

    setBassIndex(-1);
    const updatedBassStaff = bassStaff.concat(DEFAULT_BASS);
    setBassStaff(updatedBassStaff);
  };

  const removeNote = () => {
    if (trebleIndex !== -1 && trebleStaff.length > AT_LEAST_ONE) {
      const updatedTrebleStaff = trebleStaff.filter((item, i) => i !== trebleIndex);
      setTrebleStaff(updatedTrebleStaff);
      setTrebleIndex(INDEX_ZERO);
      const updatedBassStaff = bassStaff.filter((item, i) => i !== trebleIndex);
      setBassStaff(updatedBassStaff);
      setBassIndex(-1);
    }
    if (bassIndex !== -1 && bassStaff.length > AT_LEAST_ONE) {
      const updatedTrebleStaff = trebleStaff.filter((item, i) => i !== bassIndex);
      setTrebleStaff(updatedTrebleStaff);
      setTrebleIndex(INDEX_ZERO);
      const updatedBassStaff = bassStaff.filter((item, i) => i !== bassIndex);
      setBassStaff(updatedBassStaff);
      setBassIndex(-1);
    }
  };

  const selectKey = key => {
    if (trebleIndex !== -1) {
      const updatedTrebleStaff = trebleStaff.map((item, i) => {
        const type = item.type ? item.type : 'quarter';
        if (i === trebleIndex) {
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
      setTrebleStaff(updatedTrebleStaff);
    }
    if (bassIndex !== -1) {
      const updatedBassStaff = bassStaff.map((item, i) => {
        const type = item.type ? item.type : 'quarter';
        if (i === bassIndex) {
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
      setBassStaff(updatedBassStaff);
    }
  };

  const selectNoteType = noteType => {
    if (trebleIndex !== -1) {
      const updatedTrebleStaff = trebleStaff.map((item, i) => {
        if (i === trebleIndex) {
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
      setTrebleStaff(updatedTrebleStaff);
    }
    if (bassIndex !== -1) {
      const updatedBassStaff = bassStaff.map((item, i) => {
        if (i === bassIndex) {
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
      setBassStaff(updatedBassStaff);
    }
  };

  const selectDotted = () => {
    if (trebleIndex !== -1) {
      const updatedTrebleStaff = trebleStaff.map((item, i) => {
        if (i === trebleIndex) {
          return {
            ...item,
            dotted: !item.dotted
          };
        }
        else {
          return item;
        }
      });
      setTrebleStaff(updatedTrebleStaff);
    }
    if (bassIndex !== -1) {
      const updatedBassStaff = bassStaff.map((item, i) => {
        if (i === bassIndex) {
          return {
            ...item,
            dotted: !item.dotted
          };
        }
        else {
          return item;
        }
      });
      setBassStaff(updatedBassStaff);
    }
  };

  const selectStacatto = () => {
    const updatedTrebleStaff = trebleStaff.map((item, i) => {
      if (i === trebleIndex) {
        return {
          ...item,
          stacatto: !item.stacatto
        };
      }
      else {
        return item;
      }
    });
    setTrebleStaff(updatedTrebleStaff);
  };

  const selectSymbol = key => {
    if (trebleIndex !== -1) {
      const updatedTrebleStaff = trebleStaff.map((item, i) => {
        if (i === trebleIndex) {
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
      setTrebleStaff(updatedTrebleStaff);
    }
    if (bassIndex !== -1) {
      const updatedBassStaff = bassStaff.map((item, i) => {
        if (i === bassIndex) {
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
      setBassStaff(updatedBassStaff);
    }
  };

  const selectTrebleItem = newIndex => {
    setTrebleIndex(newIndex);
    setBassIndex(-1);
  };

  const selectBassItem = newIndex => {
    setBassIndex(newIndex);
    setTrebleIndex(-1);
  };

  return (
    <div className="main">
      <DisplaySelection
        trebleStaff={trebleStaff}
        currentTrebleIndex={trebleIndex}
        selectTrebleItem={selectTrebleItem}
        bassStaff={bassStaff}
        currentBassIndex={bassIndex}
        selectBassItem={selectBassItem}
      />
      <SymbolSelector selectKey={selectKey} selectNoteType={selectNoteType} selectDotted={selectDotted} selectStacatto={selectStacatto} selectSymbol={selectSymbol} isTreble={trebleIndex !== -1} />
      <button className="add-btn" onClick={addNote}>Add New Note</button>
      <button className="add-btn" onClick={removeNote}>Remove Selected Note</button>
    </div>
  );
};

export default MusicSheetCreator;
