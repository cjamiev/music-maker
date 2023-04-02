import React from 'react';

export const Card = ({ songTitle, albumTitle, body, className, onClick }) => {
  return (<>
    <div className={`card ${className}`} onClick={onClick}>
      <div className="card-body">{body}</div>
      <div className="card-title">
        <span className="card-song-title">{songTitle}</span>
        <span className="card-album-title">{albumTitle}</span>
      </div>
    </div>
  </>);
};
