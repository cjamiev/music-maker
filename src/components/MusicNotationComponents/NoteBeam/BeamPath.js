import React from 'react';
import {
  STAFF_LINE_WIDTH,
  NOTE_STEM_BASE_X,
  NOTE_STEM_WIDTH,
  NOTE_BEAM_HEIGHT,
  NOTE_FLAG_WIDTH
} from 'constants/svgattributes';

const ZERO = 0;
const ONE = 1;
const TWO = 2;

const BeamPath = ({ isBeamOnTop, beamCoordinates }) => {
  const shiftX = isBeamOnTop ? ZERO : NOTE_FLAG_WIDTH - TWO * NOTE_STEM_WIDTH;
  const widthGap = beamCoordinates.length - ONE;

  const originCoord = {
    x: NOTE_STEM_BASE_X - shiftX,
    y: beamCoordinates[ZERO]
  };
  const secondCoord = {
    x: NOTE_STEM_BASE_X - shiftX,
    y: beamCoordinates[ZERO] - NOTE_BEAM_HEIGHT
  };
  const thirdCoord = {
    x: NOTE_STEM_BASE_X + NOTE_STEM_WIDTH + STAFF_LINE_WIDTH * widthGap/TWO - shiftX,
    y: beamCoordinates[beamCoordinates.length - ONE] - NOTE_BEAM_HEIGHT
  };
  const finalCoord = {
    x: NOTE_STEM_BASE_X + STAFF_LINE_WIDTH * widthGap/TWO + NOTE_STEM_WIDTH - shiftX,
    y: beamCoordinates[beamCoordinates.length - ONE]
  };

  const pathDefinition = `
    M${originCoord.x} ${originCoord.y} 
    L${secondCoord.x} ${secondCoord.y}
    L${thirdCoord.x} ${thirdCoord.y}
    L${finalCoord.x} ${finalCoord.y}
    Z
  `;

  return (<path className="svg-primary-color svg__20 svg--marked-color" d={pathDefinition} />);
};

export default BeamPath;