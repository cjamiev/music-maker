/* eslint-disable no-magic-numbers */
/* eslint-disable max-params */
import React from 'react';
import { pianoKeyList, pianoKeyListWithoutAccidentals } from 'constants/pianokeys';
import {
  STAFF_LINE_WIDTH,
  DISTANCE_BETWEEN_STAFF_LINES,
  NOTE_STEM_BASE_X,
  NOTE_STEM_BASE_Y,
  NOTE_STEM_FLIPPED_BASE_X,
  NOTE_STEM_FLIPPED_BASE_Y,
  NOTE_STEM_WIDTH,
  NOTE_FLAG_WIDTH,
  NOTE_STEM_HEIGHT,
  NOTE_BEAM_HEIGHT
} from 'constants/svgattributes';
import {
  mapNotePosition
} from 'constants/stafflines';

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const STAFF_MIDPOINT = 26;

const BeamStemConnector = ({ flippedNotes, beamNotes, baseY, angleHeightModifier }) => {
  const firstNotePosition = flippedNotes[ZERO]
    ? NOTE_STEM_FLIPPED_BASE_Y + mapNotePosition[beamNotes[ZERO].pianoKey] + NOTE_STEM_HEIGHT
    : NOTE_STEM_BASE_Y + mapNotePosition[beamNotes[ZERO].pianoKey];
  const direction = angleHeightModifier > ZERO ? ONE : -ONE;

  const getConnectorHeights = (index, pianoKey, heightModifier, shiftY) => {
    if(flippedNotes[ZERO] && angleHeightModifier < ZERO) {
      return (baseY - NOTE_BEAM_HEIGHT + 50) - (firstNotePosition + mapNotePosition[pianoKey] + NOTE_BEAM_HEIGHT + heightModifier * DISTANCE_BETWEEN_STAFF_LINES);
    } else if(flippedNotes[ZERO] && angleHeightModifier === ZERO) {
      return (baseY - NOTE_BEAM_HEIGHT + 50) - (shiftY);
    } else if(flippedNotes[ZERO]) {
      return (baseY - NOTE_BEAM_HEIGHT + 50 + index * DISTANCE_BETWEEN_STAFF_LINES) - (shiftY);
    } else if(angleHeightModifier < ZERO) {
      return heightModifier * DISTANCE_BETWEEN_STAFF_LINES + NOTE_STEM_BASE_Y + mapNotePosition[pianoKey] - firstNotePosition;
    } else if(angleHeightModifier === ZERO) {
      return NOTE_STEM_BASE_Y + mapNotePosition[pianoKey] - firstNotePosition;
    }

    return Math.round((NOTE_STEM_BASE_Y + mapNotePosition[pianoKey]) - (baseY + index * DISTANCE_BETWEEN_STAFF_LINES));
  };

  return beamNotes.map((noteData,index) => {
    const heightModifier = angleHeightModifier < ZERO ? index : (beamNotes.length - index - ONE);
    const shiftX = flippedNotes[ZERO]
      ? NOTE_STEM_FLIPPED_BASE_X + index * STAFF_LINE_WIDTH/TWO
      : NOTE_STEM_BASE_X + index * STAFF_LINE_WIDTH/TWO;
    const shiftY = flippedNotes[ZERO]
      ? NOTE_STEM_HEIGHT + NOTE_STEM_FLIPPED_BASE_Y + mapNotePosition[noteData.pianoKey]
      : baseY + direction * index * DISTANCE_BETWEEN_STAFF_LINES;
    const height = getConnectorHeights(index, noteData.pianoKey, heightModifier, shiftY);

    return <rect
      key={shiftX}
      data-testid="beam-note-stem"
      className="svg__20 svg--marked-color"
      aria-label="beam note stem"
      width="0.45734397"
      height={height}
      x={shiftX}
      y={shiftY}
    />;
  });
};

export default BeamStemConnector;