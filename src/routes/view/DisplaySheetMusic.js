import React, { useRef, useState } from 'react';
import MusicNotationMapper from 'components/MusicNotationComponents/MusicNotationMapper';

const ZERO = 0;
const ONE = 1;

const DisplaySheetMusic = ({sheetMusic}) => {
  const [pageNumber, setPageNumber] = useState(ZERO);
  const ref = useRef();

  const prevPageNumber = () => {
    if(pageNumber > ZERO) {
      setPageNumber(pageNumber - ONE);
    }
  };

  const nextPageNumber = () => {
    if(pageNumber < sheetMusic.length - ONE) {
      setPageNumber(pageNumber + ONE);
    }
  };

  return (
    <div className="container--center">
      <button onClick={prevPageNumber}>Previous Page</button>
      <button onClick={nextPageNumber}>Next Page</button>
      <div ref={ref}>
        <svg className="svg--primary-color"
          width="5000"
          height="3000"
          viewBox="0 0 1322.9166 793.75005">
          <MusicNotationMapper parentRef={ref} data={sheetMusic[pageNumber]}/>
        </svg>
      </div>
    </div>
  );
};

export default DisplaySheetMusic;
