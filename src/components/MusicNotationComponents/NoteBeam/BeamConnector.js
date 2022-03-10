import React from 'react';
import {
  STAFF_LINE_WIDTH,
  NOTE_STEM_BASE_X,
  NOTE_STEM_FLIPPED_BASE_X,
  NOTE_BEAM_HEIGHT
} from 'constants/svgattributes';

const TWO = 2;

const BeamStemConnector = ({ isBeamOnTop, beamCoordinates, beamNoteHeights }) => {
  return beamCoordinates.map((coordY, i) => {
    const shiftX = isBeamOnTop
      ? NOTE_STEM_BASE_X + i * STAFF_LINE_WIDTH/TWO
      : NOTE_STEM_FLIPPED_BASE_X + i * STAFF_LINE_WIDTH/TWO;
    const height = isBeamOnTop ? beamNoteHeights[i] - coordY : coordY - beamNoteHeights[i];
    const shiftY = isBeamOnTop ? coordY : coordY - height - NOTE_BEAM_HEIGHT;

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