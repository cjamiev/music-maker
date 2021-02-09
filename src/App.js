import React, { useState } from 'react';
import Keyboard from  './components/keyboard';

const App = () => {
  const [pianoKey, setPianoKey] = useState('C4');

  const selectPianoKey = (selected) => {
    setPianoKey(selected);
    setMusicalSymbol('');
  };

  return (
    <div>
      <div>Selection:{pianoKey}</div>
      <Keyboard selectPianoKey={setPianoKey} />
    </div>
  );
};

export default App;
