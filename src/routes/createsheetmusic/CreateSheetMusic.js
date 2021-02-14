import React, { useState } from 'react';
import CreateSheetMusicForm from 'components/molecules/CreateSheetMusicForm';

const CreateSheetMusic = () => {
  const [pianoKey, setPianoKey] = useState('C4');

  const selectPianoKey = (selected) => {
    setPianoKey(selected);
  };

  return (
    <div>
      <div>Selection:{pianoKey}</div>
      <CreateSheetMusicForm selectPianoKey={setPianoKey} />
    </div>
  );
};

export default CreateSheetMusic;
