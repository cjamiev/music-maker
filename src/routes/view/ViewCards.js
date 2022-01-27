import React from 'react';
import Card from 'components/Card';
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
import { ICON_TYPES, ICON_SIZES } from 'constants/icon';
import 'assets/img/seer.jpg';

const ViewCards = ({ onChangeSelection, onShowImage }) => {
  return (
    <div className="flex--horizontal">
      <Card
        title="Resting Grounds"
        body={
          <img
            className="clickable view__image"
            src="seer.jpg"
            alt="Seer"
            onClick={() => {
              onChangeSelection(hollowKnightRestingGroundsData);
            }} />
        }
        footer={
          <>
            <div>
              <label>Song:</label> <a className="" href="https://www.youtube.com/watch?v=5rwagL7Yrxo" target="_blank">Resting Grounds</a>
            </div>
            <div>
              <label>Synthesia:</label> <a className="" href="https://www.youtube.com/watch?v=qZ2yWvholHw" target="_blank">Tutorial</a>
            </div>
          </>
        }
      />
      <Card
        className="clickable"
        title="Test"
        onClick={() => {
          onChangeSelection([allWholeNoteData,allQuarterNoteData, allQuarterChordData, allModifierData]);
        }}
      />
      <Card
        className="clickable"
        title="Dearly Beloved"
        onClick={() => {
          onShowImage();
        }}
      />
    </div>
  );
};

export default ViewCards;