import React, { useState } from 'react';
import {
  musicNotationData,
  allWholeNoteData,
  allQuarterNoteData,
  allQuarterChordData,
  allModifierData
} from 'mock/music-notation';
import {
  hollowKnightRestingGroundsData
} from 'mock/resting-grounds-sheet-music';
import Card from 'components/Card';
import DisplaySheetMusic from './DisplaySheetMusic';
import Page from 'components/layout';

const ZERO = 0;
const ONE = 1;
const musicNotationSvgAttributes = {
  width: '5000',
  height: '3000',
  viewBox: '0 0 1322.9166 793.75005'
};

const View = () => {
  const [musicSelection, setMusicSelection] = useState([]);
  const [pageNumber, setPageNumber] = useState(ZERO);

  const prevPageNumber = () => {
    if(pageNumber > ZERO) {
      setPageNumber(pageNumber - ONE);
    }
  };

  const nextPageNumber = () => {
    if(pageNumber < musicSelection.length - ONE) {
      setPageNumber(pageNumber + ONE);
    }
  };

  const viewFooter = () => {
    return (
      <>
        {!!musicSelection.length && <div>
          <button onClick={prevPageNumber}>Previous Page</button>
          <button onClick={nextPageNumber}>Next Page</button>
          <button onClick={() => { setMusicSelection([]);}} > Go Back to Selection </button>
        </div>}
      </>
    );
  };

  return (
    <Page footerComponent={viewFooter()}>
      <div className="container--center">
        {!musicSelection.length &&
        <div className="flex--horizontal">
          <Card
            className="clickable"
            title="Resting Grounds"
            onClick={() => {
              setMusicSelection(hollowKnightRestingGroundsData);
              setPageNumber(ZERO);
            }}
          />
          <Card
            className="clickable"
            title="Test"
            onClick={() => {
              setMusicSelection([allWholeNoteData,allQuarterNoteData, allQuarterChordData]);
              setPageNumber(ZERO);
            }}
          />
        </div>
        }
        {!!musicSelection.length && <DisplaySheetMusic sheetMusic={musicSelection[pageNumber]} {...musicNotationSvgAttributes}/>}
      </div>
    </Page>
  );
};

export default View;
