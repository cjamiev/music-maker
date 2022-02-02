import React from 'react';
import Button, { MusicIconButton } from 'components/button';
import { ICON_SIZES, MUSIC_ICON_TYPES } from 'constants/icon';
import { pedalTypes } from 'constants/musicnotation';

const PedalSelector = ({ selectPedalSymbol }) => {
  const renderPedalSymbol = pedalTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { selectPedalSymbol(item.value); }}
      />
    );
  }).filter(Boolean);

  return (
    <div className='music-form__selector'>
      {renderPedalSymbol}
    </div>
  );
};

export default PedalSelector;