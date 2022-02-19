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

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const DEFAULT_CHORD = [{},{},{},{}];

const getUpdatedValues = (list, selectedValue, filterValue) => {
  return list.map(item => {
    if(item.value === selectedValue && item.value > filterValue)
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
  const selectedChord2 = selectedChord[ZERO];
  const selectedChord3 = selectedChord[ONE];
  const selectedChord4 = selectedChord[TWO];
  const selectedChord5 = selectedChord[THREE];

  useMemo(() => {
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
  }, [selectedChord2.value, selectedChord3.value, selectedChord4.value, selectedChord5.value]);

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
            const updatedChordValues = values.find(item => item.selected).chord;
            const updatedChord2 = updatedChordValues[ZERO];
            const updatedChord3 = updatedChordValues[ONE];
            const updatedChord4 = updatedChordValues[TWO] || {};

            const updatedNote2 = getUpdatedValues(intervalList, updatedChord2.value, ZERO);
            const updatedNote3 = getUpdatedValues(intervalList, updatedChord3.value, updatedChord2.value);
            const updatedNote4 = getUpdatedValues(intervalList, updatedChord4.value, updatedChord3.value);

            const updatedChord = [
              updatedChord2,
              updatedChord3,
              updatedChord4,
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
        {selectedChord2.value && <ChordAccidentalModifier noteConfig={selectedChord[ZERO]} selectNoteModifier={handleAccidentalChangeForNote2} />}
      </div>
      {selectedChord2.value &&
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
          {selectedChord3.value &&<ChordAccidentalModifier noteConfig={selectedChord[ONE]} selectNoteModifier={handleAccidentalChangeForNote3 } />}
        </div>
      }
      {selectedChord3.value &&
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
          {selectedChord4.value &&<ChordAccidentalModifier noteConfig={selectedChord[TWO]} selectNoteModifier={handleAccidentalChangeForNote4} />}
        </div>
      }
      {selectedChord4.value &&
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
            {selectedChord5.value && <ChordAccidentalModifier noteConfig={selectedChord[THREE]} selectNoteModifier={handleAccidentalChangeForNote5} />}
          </div>
      }
    </>
  );
};

export default ChordBuilder;
