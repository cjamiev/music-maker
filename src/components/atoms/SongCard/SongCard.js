import React from 'react';

export const SongCard = ({ songTitle, children, onClick }) => {
  return (<>
    <div className={'songcard'} onClick={onClick}>
      <div className="songcard-body">{children}</div>
      <div className="songcard-title">
        <span className="songcard-song-title">{songTitle}</span>
      </div>
    </div>
  </>);
};
