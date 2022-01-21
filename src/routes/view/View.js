import React, { useState } from 'react';
import Card from 'components/Card';
import DisplaySheetMusic from 'components/DisplaySheetMusic';
import Page from 'components/layout';
import ViewFooter from './ViewFooter';
import useLocalStorage from 'hooks/useLocalStorage';
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
import { ICON_TYPES, ICON_SIZES } from 'constants/icon';
import 'assets/img/seer.jpg';

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
const LS_ZOOM = 'zoomLevel';

const View = () => {
  const [musicSelection, setMusicSelection] = useState([]);
  const [pageNumber, setPageNumber] = useState(ZERO);
  const [currentZoom, setCurrentZoom] = useLocalStorage(LS_ZOOM, SIX, false);
  const attributes = {
    width: musicNotationSvgAttributes.width*ZOOM_LEVELS[Number(currentZoom)],
    height: musicNotationSvgAttributes.height*ZOOM_LEVELS[Number(currentZoom)],
    viewBox: musicNotationSvgAttributes.viewBox
  };

  const handleResetMusicSelection = () => {
    setMusicSelection([]);
  };

  const handleChangePageNumber = (number) => {
    setPageNumber(number);
  };

  const handleZoomIn = () => {
    if(Number(currentZoom) < ZOOM_LEVELS.length - ONE) {
      setCurrentZoom(Number(currentZoom)+ONE);
    }
  };

  const handleZoomOut = () => {
    if(Number(currentZoom) > ZERO) {
      setCurrentZoom(Number(currentZoom)-ONE);
    }
  };

  return (
    <Page
      footerComponent={!!musicSelection.length
        ? <ViewFooter
          numberOfPages={musicSelection.length}
          onBackToSelection={handleResetMusicSelection}
          onChangePage={handleChangePageNumber}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
        />
        : null}
    >
      <div className="view">
        {!musicSelection.length &&
        <div className="flex--horizontal">
          <Card
            title="Resting Grounds"
            body={
              <img
                className="clickable view__image"
                src="seer.jpg"
                alt="Seer"
                onClick={() => {
                  setMusicSelection(hollowKnightRestingGroundsData);
                  setPageNumber(ZERO);
                }} />
            }
            footer={
              <>
                <div>
                  <label>Song:</label> <a className="" href="https://www.youtube.com/watch?v=5rwagL7Yrxo" target="_blank">Resting Grounds</a>
                </div>
                <div>
                  <label>Synthesia:</label> <a className="" href="https://www.youtube.com/watch?v=qZ2yWvholHw" target="_blank">Tutorial</a>
                </div>
              </>
            }
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
