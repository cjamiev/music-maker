import React, { useState } from 'react';
import Page from 'components/layout';
import { SongCard } from 'components/SongCard';
import { songs } from 'data/songs';

const View = () => {
  const [selectedSong, setSelectedSong] = useState(undefined);

  const handleChangeSongSelection = (songId) => {
    setSelectedSong(songs.find(song => song.id === songId));
  };

  return (
    <Page sidePanelContent={selectedSong ? <div>{JSON.stringify(selectedSong)}</div> : null} >
      <div className="view flex--horizontal">
        {songs.map(song => <SongCard
          key={song.songTitle + song.albumTitle}
          songTitle={song.songTitle}
          albumTitle={song.albumTitle}
          onClick={() => {handleChangeSongSelection(song.id);}}
        >          <img
            className="view__image"
            src={song.cardImg}
          /></SongCard>)}
      </div>
    </Page>
  );
};

export default View;
