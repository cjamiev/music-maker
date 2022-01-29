import React, { useState } from 'react';
import RestSelector from './RestSelector';
import Piano from './Piano';
import Button from 'components/button';

const MusicForm = ({ selectRestSymbol, selectPianoKey }) => {
  const [type, setType] = useState('piano');

  return (
    <div className='music-form'>
      <Button
        label='Select Rest'
        classColor="primary"
        onClick={() => { setType('rest'); }}
      />
      <Button
        label='Select Notes'
        classColor="primary"
        onClick={() => { setType('piano'); }}
      />
      {type === 'rest' && <RestSelector selectRestSymbol={selectRestSymbol} />}
      {type === 'piano' && <Piano selectPianoKey={selectPianoKey} />}
    </div>
  );
};

export default MusicForm;