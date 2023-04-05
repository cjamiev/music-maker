import React from 'react';
import { MusicIconButton } from 'components/atoms/MusicIconButton';
import { noteModifierTypes } from 'constants/musicnotation';

const ZERO = 0;

const NoteModifierSelector = ({ noteConfig, selectNoteModifier }) => {
  const renderNoteModifier = noteModifierTypes.map(({ key, value }) => {
    const selectedKey = Object.keys(value)[ZERO];
    const isActive = noteConfig[selectedKey];

    return (
      <MusicIconButton
        key={key}
        type={key}
        isActive={isActive}
        onClick={() => { selectNoteModifier({ ...value, [selectedKey]: !isActive }); }}
      />
    );
  }).filter(Boolean);

  return (
    <div className='music-form__btn-group'>
      {renderNoteModifier}
    </div>
  );
};

export default NoteModifierSelector;