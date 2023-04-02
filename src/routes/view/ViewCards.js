import React from 'react';
import { Card } from 'components/Card';
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
import 'assets/img/seer.jpg';
import 'assets/img/mario.jpg';
import 'assets/img/meteor.jpg';
import 'assets/img/sora.jpg';

const ViewCards = ({ onChangeSelection, onShowImage }) => {
  return (
    <div className="flex--horizontal">
      <Card
        className="clickable"
        songTitle="Dearly Beloved"
        albumTitle="Kingdom Hearts"
        body={
          <img
            className="view__image"
            src="sora.jpg"
            alt="Sora"
          />
        }
        onClick={() => {
          onShowImage(['dearly-beloved.jpg']);
        }}
      />
      <Card
        className="clickable"
        songTitle="Prelude"
        albumTitle="Final Fantasy 7"
        body={
          <img
            className="view__image"
            src="meteor.jpg"
            alt="Meteor"
          />
        }
        onClick={() => {
          onShowImage(['ff7-prelude.jpg']);
        }}
      />
      <Card
        className="clickable"
        songTitle="Main Theme"
        albumTitle="Super Mario"
        body={
          <img
            className="view__image"
            src="mario.jpg"
            alt="mario"
          />
        }
        onClick={() => {
          onShowImage(['mario-theme.jpg', 'mario-theme2.jpg', 'mario-theme3.jpg']);
        }}
      />
      <Card
        songTitle="Resting Grounds"
        albumTitle="Hollow Knight"
        body={
          <img
            className="clickable view__image"
            src="seer.jpg"
            alt="Seer"
            onClick={() => {
              onChangeSelection(hollowKnightRestingGroundsData);
            }} />
        }
      />
      <Card
        className="clickable"
        songTitle="Test"
        onClick={() => {
          onChangeSelection([musicNotationData, allWholeNoteData,allQuarterNoteData, allQuarterChordData, allModifierData]);
        }}
      />
    </div>
  );
};

export default ViewCards;