import React, { useMemo, useState } from 'react';
import Page from 'components/layout';
import {
  Dropdown
} from 'components/form';
import {
  pianoKeyList,
  bassPianoKeyList,
  intervalList,
  chordList
} from 'constants/pianokeys';

const NOT_FOUND = -1;
const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const DEFAULT_CHORD = [{},{},{},{}];

const ChordBuilder = ({pianoKey, isBassSelection, selectNoteType}) => {
  const [selectedChord, setSelectedChord] = useState(DEFAULT_CHORD);
  const [chordQuality, setChordQuality] = useState(chordList);
  const [chordNote2, setChordNote2] = useState(intervalList);
  const [chordNote3, setChordNote3] = useState(intervalList);
  const [chordNote4, setChordNote4] = useState(intervalList);
  const [chordNote5, setChordNote5] = useState(intervalList);
  const selectedChordQuality = chordQuality.findIndex(item => item.selected);
  const selectedNote2Index = chordNote2.findIndex(item => item.selected);
  const selectedNote3Index = chordNote3.findIndex(item => item.selected);
  const selectedNote4Index = chordNote4.findIndex(item => item.selected);
  const selectedNote5Index = chordNote5.findIndex(item => item.selected);

  useMemo(() => {
    if(selectedNote2Index > NOT_FOUND && selectedChordQuality === NOT_FOUND){
      setChordNote3(intervalList.filter(item => item.value > chordNote2[selectedNote2Index].value));
    }
  }, [selectedNote2Index, selectedChordQuality, chordNote2]);

  useMemo(() => {
    if(selectedNote3Index > NOT_FOUND && selectedChordQuality === NOT_FOUND){
      setChordNote4(chordNote3.filter(item => item.value > chordNote3[selectedNote3Index].value));
    }
  }, [chordNote3, selectedNote3Index, selectedChordQuality]);

  useMemo(() => {
    if(selectedNote4Index > NOT_FOUND && selectedChordQuality === NOT_FOUND){
      setChordNote5(chordNote4.filter(item => item.value > chordNote4[selectedNote4Index].value));
    }
  }, [chordNote4, selectedNote4Index, selectedChordQuality]);

  return (
    <>
      <label className="music-form__chord-builder-label">Build Chord</label>
      <button onClick={() => {
        setChordQuality(chordList);
        setChordNote2(intervalList);
        setChordNote3(intervalList);
        setChordNote4(intervalList);
        setChordNote5(intervalList);
        selectNoteType({ chord: DEFAULT_CHORD});
      }}>Reset</button>
      <Dropdown
        classNames={{container: 'music-form__chord-builder-dropdown', label: 'music-form__chord-builder-dropdown-label', content: 'music-form__chord-builder-dropdown-content'}}
        label='Chord Quality'
        values={chordQuality}
        onChange={({ values }) => {
          const selectedChordValues = values.find(item => item.selected).chord;
          const updatedNote2 = intervalList.map(item => {
            if(item.label === selectedChordValues[ZERO].label)
              return {
                ...item,
                selected: true
              };
            return item;
          });
          const updatedNote3 = intervalList.map(item => {
            if(item.label === selectedChordValues[ONE].label)
              return {
                ...item,
                selected: true
              };
            return item;
          });
          const updatedNote4 = selectedChordValues[TWO]
            ? intervalList.map(item => {
              if(item.label === selectedChordValues[TWO].label)
                return {
                  ...item,
                  selected: true
                };
              return item;
            })
            : intervalList;
          const updatedChord = [updatedNote2.find(item => item.selected), updatedNote3.find(item => item.selected), updatedNote4.find(item => item.selected) || {}, { }];
          setChordQuality(values);
          setSelectedChord(updatedChord);
          setChordNote2(updatedNote2);
          setChordNote3(updatedNote3);
          setChordNote4(updatedNote4);
          selectNoteType({ chord: updatedChord});
        }}
      />
      <Dropdown
        classNames={{container: 'music-form__chord-builder-dropdown', label: 'music-form__chord-builder-dropdown-label', content: 'music-form__chord-builder-dropdown-content'}}
        label='2nd Chord Note'
        values={chordNote2}
        onChange={({ values }) => {
          const selectedNote2 = values.find(item => item.selected);
          const updatedChord = [selectedNote2, selectedChord[ONE], selectedChord[TWO], selectedChord[THREE]];

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
          const selectedNote3 = values.find(item => item.selected);
          const updatedChord = [selectedChord[ZERO], selectedNote3, selectedChord[TWO], selectedChord[THREE]];
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
          const selectedNote4 = values.find(item => item.selected);
          const updatedChord = [selectedChord[ZERO], selectedChord[ONE], selectedNote4, selectedChord[THREE]];
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
          const selectedNote5 = values.find(item => item.selected);
          const updatedChord = [selectedChord[ZERO], selectedChord[ONE], selectedChord[TWO], selectedNote5];
          setSelectedChord(updatedChord);
          setChordNote5(values);
          selectNoteType({ chord: updatedChord});
        }}
      />}
    </>
  );
};

export default ChordBuilder;
