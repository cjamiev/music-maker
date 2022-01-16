import React, { useRef, useState } from 'react';
import MusicNotationMapper from 'components/MusicNotationComponents/MusicNotationMapper';

const DisplaySheetMusic = ({ sheetMusic, width, height, viewBox }) => {
  console.log('width', width);
  const ref = useRef();

  return (
    <div className="container--center" ref={ref}>
      <svg className="svg--primary-color" width={width} height={height} viewBox={viewBox}>
        <MusicNotationMapper parentRef={ref} data={sheetMusic}/>
      </svg>
    </div>
  );
};

export default DisplaySheetMusic;
