import React from 'react';
import { MusicIconButton } from 'components/atoms/MusicIconButton';
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
    <div className='music-form__btn-group'>
      {renderRestSymbol}
    </div>
  );
};

export default RestSelector;