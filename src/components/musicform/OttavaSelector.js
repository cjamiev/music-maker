import React from 'react';
import Button, { MusicIconButton } from 'components/button';
import { ICON_SIZES, MUSIC_ICON_TYPES } from 'constants/icon';
import { ottavaTypes } from 'constants/musicnotation';

const OttavaSelector = ({ selectOttavaSymbol }) => {
  const renderOttavaSymbol = ottavaTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { selectOttavaSymbol({
          conditions: item.value,
          shouldRemove: item.shouldRemove,
          isAlta: item.isAlta
        }); }}
      />
    );
  }).filter(Boolean);

  return (
    <div className='music-form__btn-group'>
      {renderOttavaSymbol}
    </div>
  );
};

export default OttavaSelector;