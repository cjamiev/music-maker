import React, { useMemo, useState } from 'react';
import Page from 'components/layout';
import {
  Dropdown
} from 'components/form';
import Button from 'components/button';
import {
  pianoKeyList,
  bassPianoKeyList,
  intervalList,
  chordList
} from 'constants/pianokeys';
import ChordAccidentalModifier from './ChordAccidentalModifier';

const NOT_FOUND = -1;
const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const DEFAULT_CHORD = [{},{},{},{}];

const getUpdatedValues = (list, selectedValue, filterValue) => {
  return list.map(item => {
    if(item.value === selectedValue)
      return {
        ...item,
        selected: true
      };
    else if(item.value > filterValue){
      return item;
    }
    return undefined;
  }).filter(Boolean);
};

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
    const selectedChord2 = selectedChord[ZERO] || {};
    const selectedChord3 = selectedChord[ONE] || {};
    const selectedChord4 = selectedChord[TWO] || {};
    const selectedChord5 = selectedChord[THREE] || {};

    if(selectedChord2.value) {
      const updatedNote3 = getUpdatedValues(intervalList, selectedChord3.value, selectedChord2.value);
      setChordNote3(updatedNote3);
    }
    if(selectedChord3.value) {
      const updatedNote4 = getUpdatedValues(intervalList, selectedChord4.value, selectedChord3.value);
      setChordNote4(updatedNote4);
    }
    if(selectedChord4.value) {
      const updatedNote5 = getUpdatedValues(intervalList, selectedChord5.value, selectedChord4.value);
      setChordNote5(updatedNote5);
    }
  }, [selectedChord]);


  const handleAccidentalChangeForNote2 = (update) => {
    const updatedChord = [{...selectedChord[ZERO], ...update}, selectedChord[ONE], selectedChord[TWO], selectedChord[THREE]];

    setSelectedChord(updatedChord);
    selectNoteType({ chord: updatedChord});
  };

  const handleAccidentalChangeForNote3 = (update) => {
    const updatedChord = [selectedChord[ZERO], {...selectedChord[ONE], ...update}, selectedChord[TWO], selectedChord[THREE]];

    setSelectedChord(updatedChord);
    selectNoteType({ chord: updatedChord});
  };

  const handleAccidentalChangeForNote4 = (update) => {
    const updatedChord = [selectedChord[ZERO], selectedChord[ONE], {...selectedChord[TWO], ...update}, selectedChord[THREE]];

    setSelectedChord(updatedChord);
    selectNoteType({ chord: updatedChord});
  };

  const handleAccidentalChangeForNote5 = (update) => {
    const updatedChord = [selectedChord[ZERO], selectedChord[ONE], selectedChord[TWO], {...selectedChord[THREE], ...update}];

    setSelectedChord(updatedChord);
    selectNoteType({ chord: updatedChord});
  };

  return (
    <>
      <label className="music-form__chord-builder-label">Build Chord</label>
      <div className="flex--horizontal">
        <Dropdown
          classNames={{container: 'music-form__chord-builder-dropdown', label: 'music-form__chord-builder-preselect-dropdown-label', content: 'music-form__chord-builder-dropdown-content'}}
          label='Preselect Chord'
          showDescription={false}
          values={chordQuality}
          onChange={({ values }) => {
            const selectedChordValues = values.find(item => item.selected).chord;
            const selectedChord2 = selectedChordValues[ZERO];
            const selectedChord3 = selectedChordValues[ONE];
            const selectedChord4 = selectedChordValues[TWO] || {};

            const updatedNote2 = intervalList.map(item => {
              if(item.value === selectedChord2.value)
                return {
                  ...item,
                  selected: true
                };
              return item;
            });
            const updatedNote3 = getUpdatedValues(intervalList, selectedChord3.value, selectedChord2.value);
            const updatedNote4 = getUpdatedValues(intervalList, selectedChord4.value, selectedChord3.value);

            const updatedChord = [
              selectedChord2,
              selectedChord3,
              selectedChord4,
              {}
            ];

            setChordQuality(values);
            setSelectedChord(updatedChord);
            setChordNote4(updatedNote4);
            setChordNote3(updatedNote3);
            setChordNote2(updatedNote2);
            selectNoteType({ chord: updatedChord});
          }}
        />
        <Button label="X" className="music-form__chord-builder-reset" onClick={() => {
          setChordQuality(chordList);
          setChordNote2(intervalList);
          setChordNote3(intervalList);
          setChordNote4(intervalList);
          setChordNote5(intervalList);
          setSelectedChord(DEFAULT_CHORD);
          selectNoteType({ chord: DEFAULT_CHORD});
        }} />
      </div>
      <div className="flex--horizontal">
        <Dropdown
          classNames={{container: 'music-form__chord-builder-dropdown', label: 'music-form__chord-builder-dropdown-label', content: 'music-form__chord-builder-dropdown-content'}}
          label='Add'
          showDescription={false}
          values={chordNote2}
          onChange={({ values }) => {
            const selectedNote2 = values.find(item => item.selected);
            const updatedChord = [selectedNote2, selectedChord[ONE], selectedChord[TWO], selectedChord[THREE]];

            setSelectedChord(updatedChord);
            setChordNote2(values);
            selectNoteType({ chord: updatedChord});
          }}
        />
        {selectedNote2Index > NOT_FOUND && <ChordAccidentalModifier noteConfig={selectedChord[ZERO]} selectNoteModifier={handleAccidentalChangeForNote2} />}
      </div>
      {selectedNote2Index > NOT_FOUND &&
        <div className="flex--horizontal">
          <Dropdown
            classNames={{container: 'music-form__chord-builder-dropdown', label: 'music-form__chord-builder-dropdown-label', content: 'music-form__chord-builder-dropdown-content'}}
            label='Add'
            showDescription={false}
            values={chordNote3}
            onChange={({ values }) => {
              const selectedNote3 = values.find(item => item.selected);
              const updatedChord = [selectedChord[ZERO], selectedNote3, selectedChord[TWO], selectedChord[THREE]];

              setSelectedChord(updatedChord);
              setChordNote3(values);
              selectNoteType({ chord: updatedChord});
            }}
          />
          {selectedNote3Index > NOT_FOUND &&<ChordAccidentalModifier noteConfig={selectedChord[ONE]} selectNoteModifier={handleAccidentalChangeForNote3 } />}
        </div>
      }
      {selectedNote3Index > NOT_FOUND &&
        <div className="flex--horizontal">
          <Dropdown
            classNames={{container: 'music-form__chord-builder-dropdown', label: 'music-form__chord-builder-dropdown-label', content: 'music-form__chord-builder-dropdown-content'}}
            label='Add'
            showDescription={false}
            values={chordNote4}
            onChange={({ values }) => {
              const selectedNote4 = values.find(item => item.selected);
              const updatedChord = [selectedChord[ZERO], selectedChord[ONE], selectedNote4, selectedChord[THREE]];

              setSelectedChord(updatedChord);
              setChordNote4(values);
              selectNoteType({ chord: updatedChord});
            }}
          />
          {selectedNote4Index > NOT_FOUND &&<ChordAccidentalModifier noteConfig={selectedChord[TWO]} selectNoteModifier={handleAccidentalChangeForNote4} />}
        </div>
      }
      {selectedNote4Index > NOT_FOUND &&
          <div className="flex--horizontal">
            <Dropdown
              classNames={{container: 'music-form__chord-builder-dropdown', label: 'music-form__chord-builder-dropdown-label', content: 'music-form__chord-builder-dropdown-content'}}
              label='Add'
              showDescription={false}
              values={chordNote5}
              onChange={({ values }) => {
                const selectedNote5 = values.find(item => item.selected);
                const updatedChord = [selectedChord[ZERO], selectedChord[ONE], selectedChord[TWO], selectedNote5];

                setSelectedChord(updatedChord);
                setChordNote5(values);
                selectNoteType({ chord: updatedChord});
              }}
            />
            {selectedNote5Index > NOT_FOUND && <ChordAccidentalModifier noteConfig={selectedChord[THREE]} selectNoteModifier={handleAccidentalChangeForNote5} />}
          </div>
      }
    </>
  );
};

export default ChordBuilder;
