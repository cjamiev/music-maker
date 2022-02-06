import React from 'react';
import Button, { MusicIconButton } from 'components/button';
import { ICON_SIZES, MUSIC_ICON_TYPES } from 'constants/icon';
import { noteModifierTypes } from 'constants/musicnotation';

const NoteModifierSelector = ({ selectNoteModifier }) => {
  const renderNoteModifier = noteModifierTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { selectNoteModifier(item.key); }}
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