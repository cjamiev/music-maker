import React, { useState } from 'react';
import Page from 'components/layout';
import { SongCard } from 'components/SongCard';
import { songs } from 'data/songs';

const YoutubeLinks = ({ links }) => {
  if(!links.length) {
    return null;
  }

  return (<div>
    <div className='view__url-buttons-header'>Youtube Videos</div>
    <div className="view__url-buttons">
      {links.map(link => <a key={link.url} className="view__url-btn" href={link.url} target="_blank">{link.name}</a>)}
    </div>;
  </div>);
};

const View = () => {
  const [selectedSong, setSelectedSong] = useState(undefined);

  const handleChangeSongSelection = (songId) => {
    setSelectedSong(songs.find(song => song.id === songId));
  };

  return (
    <Page sidePanelContent={selectedSong ? <div><YoutubeLinks links={selectedSong.youtubelinks} /></div> : null} >
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
