/* eslint-disable no-magic-numbers */
import React, { useMemo, useEffect, useState } from 'react';
import { mapNotePosition, mapStaffLines } from 'constants/stafflines';
import {
  STAFF_LINE_WIDTH,
  MEASURE_BOTH_STAFFS_HEIGHT,
  HEIGHT_BETWEEN_ROWS
} from 'constants/svgattributes';
import { ZOOM_LEVELS, DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES } from 'constants/page';
import DisplaySheetMusic from 'components/DisplaySheetMusic';

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const DEFAULT_ZOOM_INDEX = 14;

const getSvgAttributes = (currentZoom) => {
  const zoomModifier = ZOOM_LEVELS[currentZoom];

  return {
    width: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.width * zoomModifier,
    height: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.height * zoomModifier,
    viewBox: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.viewBox
  };
};

const getNotes = (beamNotes) => {
  return beamNotes.map((noteData,index) => {
    const shiftX = index === ZERO ? ZERO : STAFF_LINE_WIDTH/TWO*index;

    return { component:'Note',
      transform:`translate(${shiftX - 50},${(-ONE/TWO)*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
      subcomponents:[
        { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines[noteData.pianoKey]},
        { component:'StemmedNote', transform:`translate(0,${mapNotePosition[noteData.pianoKey]})`, conditions:{}}
      ]};
  });
};

const beamNotes = [
  { pianoKey: 'F5' },
  { pianoKey: 'C4' },
  { pianoKey: 'G4' },
  { pianoKey: 'F4' },
  { pianoKey: 'C5' }
];

export const BeamTest = () => {
  return (
    <DisplaySheetMusic
      sheetMusic={[
        ...getNotes(beamNotes),
        { component: 'NoteBeam', transform:`translate(-50,${(-1/2)*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
          content: { beamNotes },
          subcomponents:[] }
      ]}
      {...getSvgAttributes(DEFAULT_ZOOM_INDEX)}
    />);
};