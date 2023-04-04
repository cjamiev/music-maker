import React from 'react';

export const SongCard = ({ songTitle, albumTitle, children, onClick }) => {
  return (<>
    <div className={'songcard'} onClick={onClick}>
      <div className="songcard-body">{children}</div>
      <div className="songcard-title">
        <span className="songcard-song-title">{songTitle}</span>
        <span className="songcard-album-title">{albumTitle}</span>
      </div>
    </div>
  </>);
};
