import React, { useState } from 'react';
import DisplaySheetMusic from 'components/DisplaySheetMusic';
import Page from 'components/layout';
import ViewCards from './ViewCards';
import ViewFooter from './ViewFooter';
import useLocalStorage from 'hooks/useLocalStorage';
import { ZOOM_LEVELS, DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES } from 'constants/page';
import Button from 'components/button';
import 'assets/img/dearly-beloved.jpg';
import 'assets/img/ff7-prelude.jpg';
import 'assets/img/mario-theme.jpg';

const ZERO = 0;
const ONE = 1;
const DEFAULT_ZOOM_INDEX = 6;
const LS_ZOOM = 'zoomLevel';

const getSvgAttributes = (currentZoom) => {
  const zoomModifier = ZOOM_LEVELS[currentZoom];

  return {
    width: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.width * zoomModifier,
    height: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.height * zoomModifier,
    viewBox: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.viewBox
  };
};

const View = () => {
  const [musicSelection, setMusicSelection] = useState([]);
  const [musicImage, setMusicImage] = useState('');
  const [pageNumber, setPageNumber] = useState(ZERO);
  const [currentZoom, setCurrentZoom] = useLocalStorage(LS_ZOOM, DEFAULT_ZOOM_INDEX, false);
  const musicNotationSvgAttributes = getSvgAttributes(Number(currentZoom));

  const handleResetMusicSelection = () => {
    setMusicSelection([]);
    setMusicImage('');
    setPageNumber([]);
  };

  const handleChangeMusicSelection = (selection) => {
    setMusicSelection(selection);
    setPageNumber(ZERO);
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

  const handleShowImage = (src) => {
    setMusicImage(src);
  };

  const renderView = () => {
    if(musicSelection.length > ZERO) {
      return <DisplaySheetMusic sheetMusic={musicSelection[pageNumber]} {...musicNotationSvgAttributes}/>;
    } else if (musicImage) {
      return (<div>
        <img
          className="view__sheet_music_image"
          src={musicImage}
        />
        <div className="viewHeader">
          <Button
            label="Back to Selection"
            classColor="primary"
            onClick={handleResetMusicSelection}
          />
        </div>
      </div>);
    } else {
      return <ViewCards onChangeSelection={handleChangeMusicSelection} onShowImage={handleShowImage} />;
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
        {renderView()}
      </div>
    </Page>
  );
};

export default View;
