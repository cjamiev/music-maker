import React from 'react';

export const SongCard = ({ songTitle, albumTitle, body, onClick }) => {
  return (<>
    <div className={'songcard'} onClick={onClick}>
      <div className="songcard-body">{body}</div>
      <div className="songcard-title">
        <span className="songcard-song-title">{songTitle}</span>
        <span className="songcard-album-title">{albumTitle}</span>
      </div>
    </div>
  </>);
};
