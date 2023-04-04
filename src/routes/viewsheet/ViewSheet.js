import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DisplaySheetMusic from 'components/DisplaySheetMusic';
import Page from 'components/layout';
import ViewFooter from './ViewFooter';
import useLocalStorage from 'hooks/useLocalStorage';
import { ZOOM_LEVELS, DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES } from 'constants/page';
import { songs } from 'data/songs';

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

const parseUrlInfo = (songid, page) => {
  const selectedSong = songs.find(song => song.id === songid) ?? songs[ZERO];
  const pageNumber = Number(page) ? Number(page) - ONE : ZERO;
  const selectedPage = selectedSong.sheets.length > pageNumber ? pageNumber : ZERO;

  return { selectedSong, selectedPage};
};

const ViewSheet = () => {
  const { songid, page } = useParams();
  const { selectedSong, selectedPage } = parseUrlInfo(songid, page);
  const [pageNumber, setPageNumber] = useState(selectedPage);
  const [currentZoom, setCurrentZoom] = useLocalStorage(LS_ZOOM, DEFAULT_ZOOM_INDEX, false);
  const musicNotationSvgAttributes = getSvgAttributes(Number(currentZoom));

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
      footerComponent={
        <ViewFooter
          numberOfPages={selectedSong.sheets.length}
          onChangePage={handleChangePageNumber}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
        />}
    >
      <div className="viewsheet">
        <DisplaySheetMusic sheetMusic={selectedSong.sheets[pageNumber]} {...musicNotationSvgAttributes}/>
      </div>
    </Page>
  );
};

export default ViewSheet;
