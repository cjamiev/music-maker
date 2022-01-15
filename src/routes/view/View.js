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
import Card from 'components/Card';
import DisplaySheetMusic from './DisplaySheetMusic';
import Page from 'components/layout';

const View = () => {
  const [musicSelection, setMusicSelection] = useState([]);

  return (
    <Page>
      <div className="container--center">
        {!musicSelection.length &&
        <div className="flex--horizontal">
          <Card
            className="clickable"
            title="Resting Grounds"
            onClick={() => { setMusicSelection(hollowKnightRestingGroundsData);}}
          />
          <Card
            className="clickable"
            title="Test"
            onClick={() => { setMusicSelection([allWholeNoteData,allQuarterNoteData, allQuarterChordData]);}}
          />
        </div>
        }
        {!!musicSelection.length && <DisplaySheetMusic sheetMusic={musicSelection} />}
      </div>
    </Page>
  );
};

export default View;
