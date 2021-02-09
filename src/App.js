import React, { useState } from 'react';
import Piano from './components/Piano';

const App = () => {
  const [pianoKey, setPianoKey] = useState('C4');

  const selectPianoKey = (selected) => {
    setPianoKey(selected);
  };

  return (
    <div>
      <div>Selection:{pianoKey}</div>
      <Piano selectPianoKey={setPianoKey} />
    </div>
  );
};

export default App;
