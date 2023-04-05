import React from 'react';
import { MusicIconButton } from 'components/atoms/MusicIconButton';
import { measureBarTypes } from 'constants/musicnotation';

const ZERO = 0;
const MeasureBarSelector = ({ noteConfig, selectMeasureBar }) => {
  const renderMeasureBar = measureBarTypes.map(({ key, value }) => {
    return (
      <MusicIconButton
        key={key}
        type={key}
        onClick={() => { selectMeasureBar(value); }}
      />
    );
  }).filter(Boolean);

  return (
    <div className='music-form__btn-group'>
      {renderMeasureBar}
    </div>
  );
};

export default MeasureBarSelector;