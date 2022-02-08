import React from 'react';
import Button, { MusicIconButton } from 'components/button';
import { ICON_SIZES, MUSIC_ICON_TYPES } from 'constants/icon';
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