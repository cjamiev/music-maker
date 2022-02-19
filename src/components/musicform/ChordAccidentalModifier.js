import React from 'react';
import Button, { MusicIconButton } from 'components/button';
import { ICON_SIZES, MUSIC_ICON_TYPES } from 'constants/icon';
import { noteAccidentals } from 'constants/musicnotation';

const ZERO = 0;
const ChordAccidentalModifier = ({ noteConfig, selectNoteModifier }) => {
  const renderNoteAccidentals = noteAccidentals.map(({ key, value }) => {
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
      {renderNoteAccidentals}
    </div>
  );
};

export default ChordAccidentalModifier;