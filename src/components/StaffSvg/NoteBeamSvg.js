import React from 'react';
import {
  STAFF_LINE_WIDTH,
  STAFF_LINE_HEIGHT,
  STAFF_LINE_BASE_Y,
  DISTANCE_BETWEEN_STAFF_LINES,
  NOTE_STEM_BASE_X,
  NOTE_STEM_BASE_Y,
  NOTE_STEM_FLIPPED_BASE_X,
  NOTE_STEM_FLIPPED_BASE_Y,
  NOTE_STEM_WIDTH,
  NOTE_STEM_HEIGHT,
  NOTE_BEAM_HEIGHT
} from 'constants/svgattributes';

const ZERO = 0;
const ONE = 1;
const TWO = 2;

const GenerateBeam = ({ widthMultiplier, heightMultipler, isAngle }) => {
  const baseX = NOTE_STEM_BASE_X;
  const baseY = NOTE_STEM_BASE_Y + NOTE_STEM_HEIGHT + heightMultipler * DISTANCE_BETWEEN_STAFF_LINES;
  const angleModifier = isAngle ? -(widthMultiplier - ONE) * DISTANCE_BETWEEN_STAFF_LINES : ZERO;

  const originCoord = {
    x: baseX,
    y: baseY - NOTE_BEAM_HEIGHT
  };
  const secondCoord = {
    x: baseX,
    y: baseY
  };
  const thirdCoord = {
    x: baseX + NOTE_STEM_WIDTH + STAFF_LINE_WIDTH * (widthMultiplier - ONE)/TWO,
    y: baseY + angleModifier
  };
  const finalCoord = {
    x: baseX + NOTE_STEM_WIDTH + STAFF_LINE_WIDTH * (widthMultiplier - ONE)/TWO,
    y: baseY + angleModifier - NOTE_BEAM_HEIGHT
  };

  return (
    <path className="svg-primary-color" d={`
      M${originCoord.x} ${originCoord.y}
      L${secondCoord.x} ${secondCoord.y}
      L${thirdCoord.x} ${thirdCoord.y}
      L${finalCoord.x} ${finalCoord.y}
      Z`}
    />
  );
};

const NoteBeamSvg = ({ transform }) => {
  const heightMultiplier = -3;
  const widthMultiplier = 3;

  return (
    <g transform={transform}>
      <GenerateBeam widthMultiplier={widthMultiplier} heightMultipler={heightMultiplier} isAngle={true} />
    </g>
  );
};

export default NoteBeamSvg;
