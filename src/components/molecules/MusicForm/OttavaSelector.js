import React from 'react';
import { MusicIconButton } from 'components/atoms/MusicIconButton';
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