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

const data = [
  { component:'Note', transform:`translate(${-2*STAFF_LINE_WIDTH},${(-1/2)*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C4']},
      { component:'StemmedNote', transform:`translate(0,${mapNotePosition['C4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${-2*STAFF_LINE_WIDTH},${(-1/2)*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'StemmedNote', transform:`translate(${STAFF_LINE_WIDTH/2},${mapNotePosition['E4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${-2*STAFF_LINE_WIDTH},${(-1/2)*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'StemmedNote', transform:`translate(${STAFF_LINE_WIDTH},${mapNotePosition['G4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component: 'NoteBeam', transform:`translate(${-2*STAFF_LINE_WIDTH},${(-1/2)*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    content: { beamNotes: ['C4', 'E4', 'G4'] },
    subcomponents:[] }
];

const ONE = 1;
const DEFAULT_ZOOM_INDEX = 14;
const getSvgAttributes = (currentZoom) => {
  const zoomModifier = ZOOM_LEVELS[currentZoom];

  return {
    width: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.width * zoomModifier,
    height: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.height * zoomModifier,
    viewBox: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.viewBox
  };
};

export const BeamTest = () => {
  return <DisplaySheetMusic sheetMusic={data} {...getSvgAttributes(DEFAULT_ZOOM_INDEX)}/>;
};