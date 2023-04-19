import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DisplaySheetMusic } from 'components/molecules/DisplaySheetMusic';
import { Page }from 'components/core/Page';
import { ViewSheetMusicFooter } from './ViewSheetMusicFooter';
import { getSheetMusic, getTitleForSheetMusic, getTimeSignatureForSheetMusic } from 'utils/sheetMusicMapper';
import { getDecompressedSheetMusicData } from 'utils/compressSheetMusicData';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { ZOOM_LEVELS, DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES } from 'constants/page';
import { songsWithSheetMusic } from 'data/songs';

const ZERO = 0;
const ONE = 1;
const FOUR = 4;
const DEFAULT_ZOOM_INDEX = 6;
const LS_ZOOM = 'zoomLevel';

const getParsedSongData = (rawData) => {
  return JSON.parse(getDecompressedSheetMusicData(rawData));
};

const getPages = (configuration, songData, pageSize) => {
  const sheets = [];

  songData.forEach((line, lineIndex) => {
    const currentPageIndex = Math.floor(lineIndex / pageSize);
    const currentLineindex = lineIndex % pageSize;
    const currentPage = sheets[currentPageIndex] ?? [];
    const constructedSheetMusic = getSheetMusic({ configuration, line, lineIndex: currentLineindex, pageIndex: currentPageIndex });
    const constructedTitleSection = currentLineindex === ZERO ? getTitleForSheetMusic(configuration, currentPageIndex) : [];
    const updatedCurrentPage = currentPage.concat(constructedSheetMusic).concat(constructedTitleSection);

    sheets[currentPageIndex] = updatedCurrentPage;
  });

  const pageOne = sheets[ZERO].concat(getTimeSignatureForSheetMusic(configuration));

  sheets[ZERO] = pageOne;

  return sheets;
};

const getSvgAttributes = (currentZoom) => {
  const zoomModifier = ZOOM_LEVELS[currentZoom];

  return {
    width: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.width * zoomModifier,
    height: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.height * zoomModifier,
    viewBox: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.viewBox
  };
};

const parseUrlInfo = (songid, page) => {
  const selectedSongEntry = songsWithSheetMusic.find(song => song.id === songid) ?? songsWithSheetMusic[ZERO];
  const pageIndex = Number(page) ? Number(page) - ONE : ZERO;
  if(!selectedSongEntry.songRawData) {
    const selectedPage = selectedSongEntry.sheets.length > pageIndex ? pageIndex : ZERO;
    return { selectedSong: selectedSongEntry.sheets, selectedPage };
  }
  const songData = getParsedSongData(selectedSongEntry.songRawData);
  const selectedSong = getPages(songData.configuration, songData.data, FOUR);
  const selectedPage = selectedSong.length > pageIndex ? pageIndex : ZERO;

  return { selectedSong, selectedPage};
};

export const ViewSheetMusic = () => {
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
        <ViewSheetMusicFooter
          currentPage={pageNumber}
          numberOfPages={selectedSong.length}
          onChangePage={handleChangePageNumber}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
        />}
    >
      <div className="viewsheetmusic">
        <DisplaySheetMusic sheetMusic={selectedSong[pageNumber]} {...musicNotationSvgAttributes}/>
      </div>
    </Page>
  );
};
