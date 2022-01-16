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
import DisplaySheetMusic from 'components/DisplaySheetMusic';
import Page from 'components/layout';
import Pagination from 'components/pagination';
import Button from 'components/button';
import './view.css';

const ZERO = 0;
const ONE = 1;
const musicNotationSvgAttributes = {
  width: 2500,
  height: 1500,
  viewBox: '0 0 1322.9166 793.75005'
};
const SIX = 6;
// eslint-disable-next-line no-magic-numbers
const ZOOM_LEVELS = [0.25, 0.33, 0.5, 0.75, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2];

const View = () => {
  const [musicSelection, setMusicSelection] = useState([]);
  const [pageNumber, setPageNumber] = useState(ZERO);
  const [zoomLevel, setZoomLevel] = useState(SIX);
  const attributes = {
    width: musicNotationSvgAttributes.width*ZOOM_LEVELS[zoomLevel],
    height: musicNotationSvgAttributes.height*ZOOM_LEVELS[zoomLevel],
    viewBox: musicNotationSvgAttributes.viewBox
  };


  const handleChangePageNumber = (number) => {
    setPageNumber(number);
  };

  const viewFooter = () => {
    return (
      <>
        {!!musicSelection.length && <div className="viewFooter">
          <Button
            label="Go Back to Selection"
            classColor="primary"
            onClick={() => { setMusicSelection([]);}}
          />
          <Pagination size={musicSelection.length} onChange={handleChangePageNumber} />
          <Button
            label="Zoom Increase"
            classColor="primary"
            onClick={() => {
              if(zoomLevel <= ZOOM_LEVELS.length - ONE) {
                setZoomLevel(zoomLevel+ONE);
              }
            }}
          />
          <Button
            label="Zoom Decrease"
            classColor="primary"
            onClick={() => {
              if(zoomLevel > ZERO) {
                setZoomLevel(zoomLevel-ONE);
              }
            }}
          />
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
              setMusicSelection([allWholeNoteData,allQuarterNoteData, allQuarterChordData, allModifierData]);
              setPageNumber(ZERO);
            }}
          />
        </div>
        }
        {!!musicSelection.length && <DisplaySheetMusic sheetMusic={musicSelection[pageNumber]} {...attributes}/>}
      </div>
    </Page>
  );
};

export default View;
