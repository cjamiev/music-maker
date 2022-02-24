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
const DEFAULT_ADDED_NOTES = [{},{},{},{}];

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
  const [selectedAddedNotes, setSelectedAddedNotes] = useState(DEFAULT_ADDED_NOTES);
  const [chordQuality, setChordQuality] = useState(chordList);
  const [addedNoteTwo, setAddedNoteTwo] = useState(intervalList);
  const [addedNoteThree, setAddedNoteThree] = useState(intervalList);
  const [addedNoteFour, setAddedNoteFour] = useState(intervalList);
  const [addedNoteFive, setAddedNoteFive] = useState(intervalList);
  const selectedAddedNotesQuality = chordQuality.findIndex(item => item.selected);
  const selectedAddedNoteTwo = selectedAddedNotes[ZERO];
  const selectedAddedNoteThree = selectedAddedNotes[ONE];
  const selectedAddedNoteFour = selectedAddedNotes[TWO];
  const selectedAddedNoteFive = selectedAddedNotes[THREE];

  useMemo(() => {
    if(selectedAddedNoteTwo.value) {
      const updatedNoteThree = getUpdatedValues(intervalList, selectedAddedNoteThree.value, selectedAddedNoteTwo.value);
      setAddedNoteThree(updatedNoteThree);
    }
    if(selectedAddedNoteThree.value) {
      const updatedNoteFour = getUpdatedValues(intervalList, selectedAddedNoteFour.value, selectedAddedNoteThree.value);
      setAddedNoteFour(updatedNoteFour);
    }
    if(selectedAddedNoteFour.value) {
      const updatedNoteFive = getUpdatedValues(intervalList, selectedAddedNoteFive.value, selectedAddedNoteFour.value);
      setAddedNoteFive(updatedNoteFive);
    }
  }, [selectedAddedNoteTwo.value, selectedAddedNoteThree.value, selectedAddedNoteFour.value, selectedAddedNoteFive.value]);

  const handleAccidentalChangeForNoteTwo = (update) => {
    const updatedAddedNotes = [{...selectedAddedNotes[ZERO], ...update}, selectedAddedNotes[ONE], selectedAddedNotes[TWO], selectedAddedNotes[THREE]];

    setSelectedAddedNotes(updatedAddedNotes);
    selectNoteType({ addedNotes: updatedAddedNotes});
  };

  const handleAccidentalChangeForNoteThree = (update) => {
    const updatedAddedNotes = [selectedAddedNotes[ZERO], {...selectedAddedNotes[ONE], ...update}, selectedAddedNotes[TWO], selectedAddedNotes[THREE]];

    setSelectedAddedNotes(updatedAddedNotes);
    selectNoteType({ addedNotes: updatedAddedNotes});
  };

  const handleAccidentalChangeForNoteFour = (update) => {
    const updatedAddedNotes = [selectedAddedNotes[ZERO], selectedAddedNotes[ONE], {...selectedAddedNotes[TWO], ...update}, selectedAddedNotes[THREE]];

    setSelectedAddedNotes(updatedAddedNotes);
    selectNoteType({ addedNotes: updatedAddedNotes});
  };

  const handleAccidentalChangeForNoteFive = (update) => {
    const updatedAddedNotes = [selectedAddedNotes[ZERO], selectedAddedNotes[ONE], selectedAddedNotes[TWO], {...selectedAddedNotes[THREE], ...update}];

    setSelectedAddedNotes(updatedAddedNotes);
    selectNoteType({ addedNotes: updatedAddedNotes});
  };

  return (
    <>
      <label className="music-form__chord-builder-label">Build Chord</label>
      <div className="flex--horizontal">
        <Dropdown
          classNames={{
            container: 'music-form__chord-builder-dropdown',
            label: 'music-form__chord-builder-preselect-dropdown-label',
            content: 'music-form__chord-builder-dropdown-content'
          }}
          label='Preselect Chord'
          showDescription={false}
          values={chordQuality}
          onChange={({ values }) => {
            const updatedAddedNoteValues = values.find(item => item.selected).addedNotes;
            const updatedAddedNoteTwo = updatedAddedNoteValues[ZERO];
            const updatedAddedNoteThree = updatedAddedNoteValues[ONE];
            const updatedAddedNoteFour = updatedAddedNoteValues[TWO] || {};

            const updatedNoteTwo = getUpdatedValues(intervalList, updatedAddedNoteTwo.value, ZERO);
            const updatedNoteThree = getUpdatedValues(intervalList, updatedAddedNoteThree.value, updatedAddedNoteTwo.value);
            const updatedNoteFour = getUpdatedValues(intervalList, updatedAddedNoteFour.value, updatedAddedNoteThree.value);

            const updatedAddedNotes = [
              updatedAddedNoteTwo,
              updatedAddedNoteThree,
              updatedAddedNoteFour,
              {}
            ];

            setChordQuality(values);
            setSelectedAddedNotes(updatedAddedNotes);
            setAddedNoteTwo(updatedNoteTwo);
            setAddedNoteThree(updatedNoteThree);
            setAddedNoteFour(updatedNoteFour);
            setAddedNoteFive([]);
            selectNoteType({ addedNotes: updatedAddedNotes});
          }}
        />
        <Button label="X" className="music-form__chord-builder-reset"
          onClick={() => {
            setChordQuality(chordList);
            setAddedNoteTwo(intervalList);
            setAddedNoteThree(intervalList);
            setAddedNoteFour(intervalList);
            setAddedNoteFive(intervalList);
            setSelectedAddedNotes(DEFAULT_ADDED_NOTES);
            selectNoteType({ addedNotes: DEFAULT_ADDED_NOTES});
          }}
        />
      </div>
      <div className="flex--horizontal">
        <Dropdown
          classNames={{
            container: 'music-form__chord-builder-dropdown',
            label: 'music-form__chord-builder-dropdown-label',
            content: 'music-form__chord-builder-dropdown-content'
          }}
          label='Add'
          showDescription={false}
          values={addedNoteTwo}
          onChange={({ values }) => {
            const selectedNoteTwo = values.find(item => item.selected);
            const updatedAddedNotes = [selectedNoteTwo, selectedAddedNotes[ONE], selectedAddedNotes[TWO], selectedAddedNotes[THREE]];

            setSelectedAddedNotes(updatedAddedNotes);
            setAddedNoteTwo(values);
            selectNoteType({ addedNotes: updatedAddedNotes});
          }}
        />
        {selectedAddedNoteTwo.value && <ChordAccidentalModifier noteConfig={selectedAddedNotes[ZERO]} selectNoteModifier={handleAccidentalChangeForNoteTwo} />}
      </div>
      {selectedAddedNoteTwo.value &&
        <div className="flex--horizontal">
          <Dropdown
            classNames={{
              container: 'music-form__chord-builder-dropdown',
              label: 'music-form__chord-builder-dropdown-label',
              content: 'music-form__chord-builder-dropdown-content'
            }}
            label='Add'
            showDescription={false}
            values={addedNoteThree}
            onChange={({ values }) => {
              const selectedNoteThree = values.find(item => item.selected);
              const updatedAddedNotes = [selectedAddedNotes[ZERO], selectedNoteThree, selectedAddedNotes[TWO], selectedAddedNotes[THREE]];

              setSelectedAddedNotes(updatedAddedNotes);
              setAddedNoteThree(values);
              selectNoteType({ addedNotes: updatedAddedNotes});
            }}
          />
          {selectedAddedNoteThree.value &&<ChordAccidentalModifier noteConfig={selectedAddedNotes[ONE]} selectNoteModifier={handleAccidentalChangeForNoteThree } />}
        </div>
      }
      {selectedAddedNoteThree.value &&
        <div className="flex--horizontal">
          <Dropdown
            classNames={{
              container: 'music-form__chord-builder-dropdown',
              label: 'music-form__chord-builder-dropdown-label',
              content: 'music-form__chord-builder-dropdown-content'
            }}
            label='Add'
            showDescription={false}
            values={addedNoteFour}
            onChange={({ values }) => {
              const selectedNoteFour = values.find(item => item.selected);
              const updatedAddedNotes = [selectedAddedNotes[ZERO], selectedAddedNotes[ONE], selectedNoteFour, selectedAddedNotes[THREE]];

              setSelectedAddedNotes(updatedAddedNotes);
              setAddedNoteFour(values);
              selectNoteType({ addedNotes: updatedAddedNotes});
            }}
          />
          {selectedAddedNoteFour.value &&<ChordAccidentalModifier noteConfig={selectedAddedNotes[TWO]} selectNoteModifier={handleAccidentalChangeForNoteFour} />}
        </div>
      }
      {selectedAddedNoteFour.value &&
          <div className="flex--horizontal">
            <Dropdown
              classNames={{
                container: 'music-form__chord-builder-dropdown',
                label: 'music-form__chord-builder-dropdown-label',
                content: 'music-form__chord-builder-dropdown-content'
              }}
              label='Add'
              showDescription={false}
              values={addedNoteFive}
              onChange={({ values }) => {
                const selectedNoteFive = values.find(item => item.selected);
                const updatedAddedNotes = [selectedAddedNotes[ZERO], selectedAddedNotes[ONE], selectedAddedNotes[TWO], selectedNoteFive];

                setSelectedAddedNotes(updatedAddedNotes);
                setAddedNoteFive(values);
                selectNoteType({ addedNotes: updatedAddedNotes});
              }}
            />
            {selectedAddedNoteFive.value && <ChordAccidentalModifier noteConfig={selectedAddedNotes[THREE]} selectNoteModifier={handleAccidentalChangeForNoteFive} />}
          </div>
      }
    </>
  );
};

export default ChordBuilder;
