import React from 'react';
import Card from 'components/Card';
import {
  musicNotationData,
  allWholeNoteData,
  allQuarterNoteData,
  allQuarterChordData,
  allModifierData
} from 'mock/testing-notation';
import {
  hollowKnightRestingGroundsData
} from 'mock/resting-grounds-sheet-music';
import { ICON_TYPES, ICON_SIZES } from 'constants/icon';
import 'assets/img/seer.jpg';
import 'assets/img/mario.jpg';
import 'assets/img/meteor.jpg';
import 'assets/img/sora.jpg';

const ViewCards = ({ onChangeSelection, onShowImage }) => {
  return (
    <div className="flex--horizontal">
      <Card
        className="clickable"
        title="Dearly Beloved"
        body={
          <img
            className="view__image"
            src="sora.jpg"
            alt="Sora"
          />
        }
        onClick={() => {
          onShowImage('dearly-beloved.jpg');
        }}
      />
      <Card
        className="clickable"
        title="FF7 Prelude"
        body={
          <img
            className="view__image"
            src="meteor.jpg"
            alt="Meteor"
          />
        }
        onClick={() => {
          onShowImage('ff7-prelude.jpg');
        }}
      />
      <Card
        className="clickable"
        title="Mario Theme"
        body={
          <img
            className="view__image"
            src="mario.jpg"
            alt="mario"
          />
        }
        onClick={() => {
          onShowImage('mario-theme.jpg');
        }}
      />
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
    </div>
  );
};

export default ViewCards;