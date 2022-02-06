import React from 'react';
import Button, { MusicIconButton } from 'components/button';
import { ICON_SIZES, MUSIC_ICON_TYPES } from 'constants/icon';
import { noteTypes } from 'constants/musicnotation';

const NoteTypeSelector = ({ selectNoteType }) => {
  const renderNoteType = noteTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { selectNoteType(item.key); }}
      />
    );
  }).filter(Boolean);

  return (
    <div className='music-form__selector'>
      {renderNoteType}
    </div>
  );
};

export default NoteTypeSelector;