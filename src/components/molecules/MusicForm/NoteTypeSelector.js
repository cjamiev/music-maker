import React from 'react';
import { MusicIconButton } from 'components/atoms/MusicIconButton';
import { noteTypes } from 'constants/musicnotation';

const ZERO = 0;
const ONE = 1;
const NoteTypeSelector = ({ noteConfig, selectNoteType }) => {
  const renderNoteType = noteTypes.map(({key, value}) => {
    const filteredKeys = Object.keys(value).filter(showNoteKey => value[showNoteKey]);
    const selectedKey = filteredKeys[filteredKeys.length - ONE];
    const isActive = noteConfig[selectedKey];

    return (
      <MusicIconButton
        key={key}
        type={key}
        isActive={isActive}
        onClick={() => { selectNoteType(value); }}
      />
    );
  }).filter(Boolean);

  return (
    <div className='music-form__btn-group'>
      {renderNoteType}
    </div>
  );
};

export default NoteTypeSelector;