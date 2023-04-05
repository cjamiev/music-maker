import React from 'react';
import { MusicIconButton } from 'components/atoms/MusicIconButton';
import { dynamicsTypes } from 'constants/musicnotation';

const DynamicsSelector = ({ selectDynamicsSymbol }) => {
  const renderDynamicsSymbol = dynamicsTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { selectDynamicsSymbol({
          conditions: item.conditions || {},
          content: {
            value: item.value
          },
          shouldRemove: item.shouldRemove
        }); }}
      />
    );
  });

  return (
    <div className='music-form__btn-group'>
      {renderDynamicsSymbol}
    </div>
  );
};

export default DynamicsSelector;