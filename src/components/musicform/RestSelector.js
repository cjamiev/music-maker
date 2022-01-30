import React from 'react';
import Button, { MusicIconButton } from 'components/button';
import { ICON_SIZES, MUSIC_ICON_TYPES } from 'constants/icon';
import { restTypes } from 'constants/musicnotation';

const RestSelector = ({ selectRestSymbol }) => {
  const renderRestSymbol = restTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { selectRestSymbol(item.value); }}
      />
    );
  }).filter(Boolean);

  return (
    <div className='music-form__rest-selector'>
      {renderRestSymbol}
    </div>
  );
};

export default RestSelector;