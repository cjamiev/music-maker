import React, { useRef } from 'react';
import MusicNotationMapper from 'components/MusicNotationComponents/MusicNotationMapper';

const DisplaySheetMusic = ({ sheetMusic, width, height, viewBox, isOneLineMode = false }) => {
  const ref = useRef();
  const className = isOneLineMode ? 'display-sheet-music--one-line' : 'display-sheet-music';

  return (
    <div className={className} ref={ref}>
      <svg className="svg--primary-color" width={width} height={height} viewBox={viewBox}>
        <MusicNotationMapper parentRef={ref} data={sheetMusic}/>
      </svg>
    </div>
  );
};

export default DisplaySheetMusic;
