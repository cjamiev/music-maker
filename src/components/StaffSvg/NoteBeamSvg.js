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

const GenerateBeam = ({ widthMultiplier, heightMultipler, angle }) => {
  const baseX = NOTE_STEM_BASE_X;
  const baseY = NOTE_STEM_BASE_Y + NOTE_STEM_HEIGHT + heightMultipler * DISTANCE_BETWEEN_STAFF_LINES;
  const angleModifier = -angle*(widthMultiplier - ONE) * DISTANCE_BETWEEN_STAFF_LINES;

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

const NoteBeamSvg = ({ transform, content = {} }) => {
  const { widthMultiplier, heightMultiplier, angle } = content;

  return (
    <g transform={transform}>
      <GenerateBeam
        widthMultiplier={widthMultiplier}
        heightMultipler={heightMultiplier}
        angle={angle}
      />
    </g>
  );
};

export default NoteBeamSvg;
