import React, { useState } from 'react';
import DisplaySelection from './DisplaySelection';
import Piano from './Piano';
import './music-sheet-creator.css';

const keyList = ['F6', 'E6', 'D6', 'C6', 'B5', 'A5', 'G5', 'F5', 'E5', 'D5', 'C5', 'B4', 'A4', 'G4', 'F4', 'E4', 'D4', 'C4', 'B3', 'A3', 'G3', 'F3', 'E3'];
const trebleList = ['F', 'E', 'D', 'C', 'B', 'High A', 'G', 'F', 'E', 'D', 'C', 'B', 'A', 'G', 'F', 'E', 'D', 'Middle C', 'B', 'A', 'G', 'F', 'E'];
const bassList = ['A', 'G', 'F', 'E', 'D', 'Middle C', 'B', 'A', 'G', 'F', 'E', 'D', 'C', 'B', 'A', 'G', 'F', 'Low E', 'D', 'C', 'B', 'A', 'G'];
const INDEX_ZERO = 0;
const INDEX_NONE = -1;
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

const MusicSheetCreator = () => {
  const [trebleStaff, setTrebleStaff] = useState([DEFAULT_TREBLE]);
  const [bassStaff, setBassStaff] = useState([DEFAULT_BASS]);
  const [trebleIndex, setTrebleIndex] = useState(INDEX_ZERO);
  const [bassIndex, setBassIndex] = useState(INDEX_NONE);

  const addNote = () => {
    setTrebleIndex(trebleStaff.length);
    const updatedTrebleStaff = trebleStaff.concat(DEFAULT_TREBLE);
    setTrebleStaff(updatedTrebleStaff);

    setBassIndex(INDEX_NONE);
    const updatedBassStaff = bassStaff.concat(DEFAULT_BASS);
    setBassStaff(updatedBassStaff);
  };

  const removeNote = () => {
    if (trebleIndex !== INDEX_NONE && trebleStaff.length > AT_LEAST_ONE) {
      const updatedTrebleStaff = trebleStaff.filter((item, i) => i !== trebleIndex);
      setTrebleStaff(updatedTrebleStaff);
      setTrebleIndex(INDEX_ZERO);
      const updatedBassStaff = bassStaff.filter((item, i) => i !== trebleIndex);
      setBassStaff(updatedBassStaff);
      setBassIndex(INDEX_NONE);
    }
    if (bassIndex !== INDEX_NONE && bassStaff.length > AT_LEAST_ONE) {
      const updatedTrebleStaff = trebleStaff.filter((item, i) => i !== bassIndex);
      setTrebleStaff(updatedTrebleStaff);
      setTrebleIndex(INDEX_ZERO);
      const updatedBassStaff = bassStaff.filter((item, i) => i !== bassIndex);
      setBassStaff(updatedBassStaff);
      setBassIndex(INDEX_NONE);
    }
  };

  const selectKey = key => {
    if (trebleIndex !== INDEX_NONE) {
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
    if (bassIndex !== INDEX_NONE) {
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

  const selectTrebleItem = newIndex => {
    setTrebleIndex(newIndex);
    setBassIndex(INDEX_NONE);
  };

  const selectBassItem = newIndex => {
    setBassIndex(newIndex);
    setTrebleIndex(INDEX_NONE);
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
      <Piano selectPianoKey={selectKey} />
      <button className="add-btn" onClick={addNote}>Add New</button>
      <button className="add-btn" onClick={removeNote}>Remove Selected</button>
    </div>
  );
};

export default MusicSheetCreator;
