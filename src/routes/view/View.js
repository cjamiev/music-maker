import React, { useState } from 'react';
import DisplaySheetMusic from 'components/DisplaySheetMusic';
import Page from 'components/layout';
import ViewCards from './ViewCards';
import ViewFooter from './ViewFooter';
import useLocalStorage from 'hooks/useLocalStorage';
import { ZOOM_LEVELS, DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES } from 'constants/page';
import Button from 'components/button';

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
  const [musicImages, setMusicImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(ZERO);
  const [currentZoom, setCurrentZoom] = useLocalStorage(LS_ZOOM, DEFAULT_ZOOM_INDEX, false);
  const musicNotationSvgAttributes = getSvgAttributes(Number(currentZoom));

  const handleResetMusicSelection = () => {
    setMusicSelection([]);
    setMusicImages([]);
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

  const handleShowImage = (imgs) => {
    setMusicImages(imgs);
  };

  const renderView = () => {
    if(musicSelection.length > ZERO) {
      return <DisplaySheetMusic sheetMusic={musicSelection[pageNumber]} {...musicNotationSvgAttributes}/>;
    } else if (musicImages.length > ZERO) {
      return (<div>
        <div className="view__sheet_music_page">
          {musicImages.map(img => {
            return (<img
              key={img}
              className="view__sheet_music_image"
              src={img}
            />);
          })}
        </div>
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
