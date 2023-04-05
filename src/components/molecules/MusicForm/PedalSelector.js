import React from 'react';
import { MusicIconButton } from 'components/atoms/MusicIconButton';
import { pedalTypes } from 'constants/musicnotation';

const PedalSelector = ({ selectPedalSymbol }) => {
  const renderPedalSymbol = pedalTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { selectPedalSymbol({
          conditions: item.value,
          shouldRemove: item.shouldRemove
        }); }}
      />
    );
  }).filter(Boolean);

  return (
    <div className='music-form__btn-group'>
      {renderPedalSymbol}
    </div>
  );
};

export default PedalSelector;