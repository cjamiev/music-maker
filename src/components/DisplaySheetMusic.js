import React, { useRef } from 'react';
import MusicNotationMapper from 'components/MusicNotationComponents/MusicNotationMapper';
import './display-sheet-music.css';

const DisplaySheetMusic = ({ sheetMusic, width, height, viewBox }) => {
  const ref = useRef();

  return (
    <div className="display-sheet-music" ref={ref}>
      <svg className="svg--primary-color" width={width} height={height} viewBox={viewBox}>
        <MusicNotationMapper parentRef={ref} data={sheetMusic}/>
      </svg>
    </div>
  );
};

export default DisplaySheetMusic;
