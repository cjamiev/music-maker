import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Page }from 'components/core/Page';
import { SongCard } from 'components/atoms/SongCard';
import { ImageCarousel } from 'components/atoms/ImageCarousel';
import { songs, songsWithSheetMusic } from 'data/songs';

const ImageSheetMusic = ({ imgList }) => {
  if(!imgList.length) {
    return null;
  }

  return <ImageCarousel imgList={imgList} />;
};

const SheetMusicLink = ({ id }) => {
  const navigate = useNavigate();

  if(!songsWithSheetMusic.find(song => song.id === id)) {
    return null;
  }

  return (
    <div className='viewsongs__sidepanel-btn-group'>
      <div className='viewsongs__sidepanel-btn' onClick={() => { navigate(`/viewsheet/${id}/0`);}}>Personal Sheet Music</div>
    </div>);
};

const SheetMusicSection = ({ id, imgList }) => {
  return (<div className='viewsongs__sidepanel-header'>
    <div>Sheet Music</div>
    <SheetMusicLink id={id} />
    <ImageSheetMusic imgList={imgList} />
  </div>);
};

const YoutubeLinks = ({ links }) => {
  if(!links.length) {
    return null;
  }

  return (<div>
    <div className='viewsongs__sidepanel-header'>Youtube Videos</div>
    <div className='viewsongs__sidepanel-btn-group'>
      {links.map(link => <a key={link.url} className='viewsongs__sidepanel-btn' href={link.url} target='_blank'>{link.name}</a>)}
    </div>;
  </div>);
};

export const ViewSongs = () => {
  const [selectedSong, setSelectedSong] = useState(undefined);

  const handleChangeSongSelection = (songId) => {
    setSelectedSong(songs.find(song => song.id === songId));
  };

  return (
    <Page sidePanelContent={selectedSong ? <div><SheetMusicSection id={selectedSong.id} imgList={selectedSong.sheetMusicImgs} /><YoutubeLinks links={selectedSong.youtubelinks} /></div> : null} >
      <div className='viewsongs flex--horizontal'>
        {songs.map(song => <SongCard
          key={song.songTitle + song.albumTitle}
          songTitle={song.songTitle}
          albumTitle={song.albumTitle}
          onClick={() => {handleChangeSongSelection(song.id);}}
        >
          <img
            className='viewsongs__image'
            src={song.cardImg}
          />
        </SongCard>)}
      </div>
    </Page>
  );
};
