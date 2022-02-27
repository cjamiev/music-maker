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
  { component: 'NoteBeam', transform:`translate(${-3*STAFF_LINE_WIDTH + 17.3},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS) - 4})`, conditions:{},
    content: { heightMultiplier: -1, widthMultiplier: 2, angle: -1 },
    subcomponents:[] },
  { component:'Note', transform:`translate(${-2*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(-11,${mapNotePosition['F4']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${-2*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'StemmedNote', transform:`translate(4,${mapNotePosition['E4']})`, conditions:{ showNoteStem: true }}
    ]},
  // { component: 'NoteBeam', transform:`translate(${-2*STAFF_LINE_WIDTH + 17.3},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS) - 4})`, conditions:{},
  //   content: { heightMultiplier: -1.5, widthMultiplier: 2, angle: -1 },
  //   subcomponents:[] },
  // { component:'Note', transform:`translate(${-1*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
  //   subcomponents:[
  //     { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
  //     { component:'StemmedNote', transform:`translate(-11,${mapNotePosition['G4']})`, conditions:{ showNoteStem: true }}
  //   ]},
  // { component:'Note', transform:`translate(${-1*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
  //   subcomponents:[
  //     { component:'StemmedNote', transform:`translate(4,${mapNotePosition['E4']})`, conditions:{ showNoteStem: true }}
  //   ]},
  // { component: 'NoteBeam', transform:`translate(${-1*STAFF_LINE_WIDTH + 17.3},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS) - 4})`, conditions:{},
  //   content: { heightMultiplier: -2, widthMultiplier: 2, angle: -1 },
  //   subcomponents:[] },
  // { component:'Note', transform:`translate(${0*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
  //   subcomponents:[
  //     { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
  //     { component:'StemmedNote', transform:`translate(-11,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
  //   ]},
  // { component:'Note', transform:`translate(${0*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
  //   subcomponents:[
  //     { component:'StemmedNote', transform:`translate(4,${mapNotePosition['E4']})`, conditions:{ showNoteStem: true }}
  //   ]},
  // { component: 'NoteBeam', transform:`translate(${0*STAFF_LINE_WIDTH + 17.3},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS) - 9.5})`, conditions:{},
  //   content: { heightMultiplier: -1, widthMultiplier: 2, angle: 1 },
  //   subcomponents:[] },
  // { component:'Note', transform:`translate(${1*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
  //   subcomponents:[
  //     { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
  //     { component:'StemmedNote', transform:`translate(-11,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
  //   ]},
  // { component:'Note', transform:`translate(${1*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
  //   subcomponents:[
  //     { component:'StemmedNote', transform:`translate(4,${mapNotePosition['B5']})`, conditions:{ showNoteStem: true }}
  //   ]},
  { component: 'NoteBeam', transform:`translate(${1*STAFF_LINE_WIDTH + 17.3},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS) - 9.5})`, conditions:{},
    content: { heightMultiplier: -1, widthMultiplier: 3, angle: 1 },
    subcomponents:[] },
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A5']},
      { component:'StemmedNote', transform:`translate(-11,${mapNotePosition['A5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'StemmedNote', transform:`translate(4,${mapNotePosition['B5']})`, conditions:{ showNoteStem: true }}
    ]},
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${0*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'StemmedNote', transform:`translate(19,${mapNotePosition['B5']})`, conditions:{ showNoteStem: true }}
    ]}
];

const ONE = 1;
const DEFAULT_ZOOM_INDEX = 11;
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