/* eslint-disable no-magic-numbers */
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

const BeamPath = ({ flippedNotes, widthGap, baseY, angleHeightModifier }) => {
  const shiftXForFirstFlipped = flippedNotes[ZERO] ? NOTE_FLAG_WIDTH - TWO * NOTE_STEM_WIDTH: ZERO;
  const shiftXForLastFlipped = flippedNotes[widthGap] ? NOTE_FLAG_WIDTH - TWO * NOTE_STEM_WIDTH : ZERO;
  const shiftYForFlipped = flippedNotes[ZERO] ? 50 : ZERO;

  const originCoord = {
    x: NOTE_STEM_BASE_X - shiftXForFirstFlipped,
    y: baseY - NOTE_BEAM_HEIGHT + shiftYForFlipped
  };
  const secondCoord = {
    x: NOTE_STEM_BASE_X - shiftXForFirstFlipped,
    y: baseY + shiftYForFlipped
  };
  const thirdCoord = {
    x: NOTE_STEM_BASE_X + NOTE_STEM_WIDTH + STAFF_LINE_WIDTH * widthGap/TWO - shiftXForLastFlipped,
    y: baseY + angleHeightModifier + shiftYForFlipped
  };
  const finalCoord = {
    x: NOTE_STEM_BASE_X + STAFF_LINE_WIDTH * widthGap/TWO + NOTE_STEM_WIDTH - shiftXForLastFlipped,
    y: baseY + angleHeightModifier - NOTE_BEAM_HEIGHT + shiftYForFlipped
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