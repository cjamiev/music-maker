import React from 'react';
import Button from 'components/button';
import {
  restTypes
} from 'constants/musicnotation';

const RestSelector = ({ selectRestSymbol }) => {
  const renderRestSymbol = restTypes.map(item => {
    return (
      <Button
        key={item.key}
        label={item.label}
        classColor="primary"
        onClick={() => { selectRestSymbol(item.value); }}
      />
    );
  });

  return (
    <div className='music-form__rest-selector'>
      {renderRestSymbol}
    </div>
  );
};

export default RestSelector;