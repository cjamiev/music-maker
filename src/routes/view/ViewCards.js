import React from 'react';
import { SongCard } from 'components/SongCard';
import {
  musicNotationData,
  allWholeNoteData,
  allQuarterNoteData,
  allQuarterChordData,
  allModifierData
} from 'data/testing-notation';
import {
  hollowKnightRestingGroundsData
} from 'data/resting-grounds-sheet-music';
import { songs } from 'data/songs';

const ViewCards = ({ onChangeSelection, onShowImage }) => {
  return (
    <div className="flex--horizontal">
      {songs.map(song => <SongCard
        key={song.songTitle + song.albumTitle}
        songTitle={song.songTitle}
        albumTitle={song.albumTitle}
        body={
          <img
            className="view__image"
            src={song.cardImg}
          />
        }
        onClick={() => {
          onShowImage(song.sheetMusicImg);
        }}
      />)}
      <SongCard
        songTitle="Resting Grounds"
        albumTitle="Hollow Knight"
        body={
          <img
            className="clickable view__image"
            src="seer.jpg"
            onClick={() => {
              onChangeSelection(hollowKnightRestingGroundsData);
            }} />
        }
      />
      <SongCard
        songTitle="Test"
        onClick={() => {
          onChangeSelection([musicNotationData, allWholeNoteData,allQuarterNoteData, allQuarterChordData, allModifierData]);
        }}
      />
    </div>
  );
};

export default ViewCards;