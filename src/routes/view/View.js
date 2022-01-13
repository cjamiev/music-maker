import React, { useState } from 'react';
import {
  musicNotationData,
  allWholeNoteData,
  allQuarterNoteData,
  allQuarterChordData,
  allModifierData
} from 'mock/music-notation';
import {
  hollowKnightRestingGroundsData
} from 'mock/resting-grounds-sheet-music';
import DisplaySheetMusic from './DisplaySheetMusic';

const View = () => {
  const [musicSelection, setMusicSelection] = useState([]);

  return (

    <div>
      {!musicSelection.length &&
        <div>
          <button onClick={() => { setMusicSelection(hollowKnightRestingGroundsData);}}>Resting Grounds</button>
          <button onClick={() => { setMusicSelection([allWholeNoteData,allQuarterNoteData, allQuarterChordData]);}}>Test</button>
        </div>
      }
      {!!musicSelection.length && <DisplaySheetMusic sheetMusic={musicSelection} />}
    </div>
  );
};

export default View;
