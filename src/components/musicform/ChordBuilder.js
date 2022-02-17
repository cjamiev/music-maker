import React, { useMemo, useState } from 'react';
import Page from 'components/layout';
import {
  Dropdown
} from 'components/form';
import {
  pianoKeyList,
  bassPianoKeyList,
  intervalList
} from 'constants/pianokeys';

const NOT_FOUND = -1;
const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const DEFAULT_CHORD = [{ pianoKey: ''},{ pianoKey: '' },{ pianoKey: '' },{ pianoKey: '' }];

const ChordBuilder = ({pianoKey, isBassSelection, selectNoteType}) => {
  const [selectedChord, setSelectedChord] = useState(DEFAULT_CHORD);
  const [chordNote2, setChordNote2] = useState(intervalList);
  const [chordNote3, setChordNote3] = useState(intervalList);
  const [chordNote4, setChordNote4] = useState(intervalList);
  const [chordNote5, setChordNote5] = useState(intervalList);
  const selectedNote2Index = chordNote2.findIndex(item => item.selected);
  const selectedNote3Index = chordNote3.findIndex(item => item.selected);
  const selectedNote4Index = chordNote4.findIndex(item => item.selected);
  const selectedNote5Index = chordNote5.findIndex(item => item.selected);

  useMemo(() => {
    if(selectedNote2Index > NOT_FOUND){
      setChordNote3(intervalList.filter((item, index) => index > selectedNote2Index));
    }
  }, [selectedNote2Index]);

  useMemo(() => {
    if(selectedNote3Index > NOT_FOUND){
      setChordNote4(chordNote3.filter((item, index) => index > selectedNote3Index));
    }
  }, [chordNote3, selectedNote3Index]);

  useMemo(() => {
    if(selectedNote4Index > NOT_FOUND){
      setChordNote5(chordNote4.filter((item, index) => index > selectedNote4Index));
    }
  }, [chordNote4, selectedNote4Index]);

  return (
    <>
      <label className="music-form__chord-builder-label">Build Chord</label>
      <button onClick={() => {
        setChordNote2(intervalList);
        setChordNote3(intervalList);
        setChordNote4(intervalList);
        setChordNote5(intervalList);
        selectNoteType({ chord: DEFAULT_CHORD});
      }}>Reset</button>
      <Dropdown
        classNames={{container: 'music-form__chord-builder-dropdown', label: 'music-form__chord-builder-dropdown-label', content: 'music-form__chord-builder-dropdown-content'}}
        label='2nd Chord Note'
        values={chordNote2}
        onChange={({ values }) => {
          const note2Increment = values.find(item => item.selected).value;
          const pianoKeyIndex = pianoKeyList.findIndex(item => item === pianoKey);
          const note2Key = { pianoKey: pianoKeyList[pianoKeyIndex + note2Increment].replace('#','')};
          const updatedChord = [note2Key, selectedChord[ONE], selectedChord[TWO], selectedChord[THREE]];
          setSelectedChord(updatedChord);
          setChordNote2(values);
          selectNoteType({ chord: updatedChord});
        }}
      />
      {selectedNote2Index > NOT_FOUND && <Dropdown
        classNames={{container: 'music-form__chord-builder-dropdown', label: 'music-form__chord-builder-dropdown-label', content: 'music-form__chord-builder-dropdown-content'}}
        label='3rd Chord Note'
        values={chordNote3}
        onChange={({ values }) => {
          const note3Increment = values.find(item => item.selected).value;
          const pianoKeyIndex = pianoKeyList.findIndex(item => item === pianoKey);
          const note3Key = { pianoKey: pianoKeyList[pianoKeyIndex + note3Increment].replace('#','')};
          const updatedChord = [selectedChord[ZERO], note3Key, selectedChord[TWO], selectedChord[THREE]];
          setSelectedChord(updatedChord);
          setChordNote3(values);
          selectNoteType({ chord: updatedChord});
        }}
      />}
      {selectedNote3Index > NOT_FOUND && <Dropdown
        classNames={{container: 'music-form__chord-builder-dropdown', label: 'music-form__chord-builder-dropdown-label', content: 'music-form__chord-builder-dropdown-content'}}
        label='4rth Chord Note'
        values={chordNote4}
        onChange={({ values }) => {
          const note4Increment = values.find(item => item.selected).value;
          const pianoKeyIndex = pianoKeyList.findIndex(item => item === pianoKey);
          const note4Key = { pianoKey: pianoKeyList[pianoKeyIndex + note4Increment].replace('#','')};
          const updatedChord = [selectedChord[ZERO], selectedChord[ONE], note4Key, selectedChord[THREE]];
          setSelectedChord(updatedChord);
          setChordNote4(values);
          selectNoteType({ chord: updatedChord});
        }}
      />}
      {selectedNote4Index > NOT_FOUND && <Dropdown
        classNames={{container: 'music-form__chord-builder-dropdown', label: 'music-form__chord-builder-dropdown-label', content: 'music-form__chord-builder-dropdown-content'}}
        label='5th Chord Note'
        values={chordNote5}
        onChange={({ values }) => {
          const note5Increment = values.find(item => item.selected).value;
          const pianoKeyIndex = pianoKeyList.findIndex(item => item === pianoKey);
          const note5Key = { pianoKey: pianoKeyList[pianoKeyIndex + note5Increment].replace('#','')};
          const updatedChord = [selectedChord[ZERO], selectedChord[ONE], selectedChord[TWO], note5Key];
          setSelectedChord(updatedChord);
          setChordNote5(values);
          selectNoteType({ chord: updatedChord});
        }}
      />}
    </>
  );
};

export default ChordBuilder;
