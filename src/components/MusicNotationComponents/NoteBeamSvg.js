import React from 'react';
import {
  STAFF_LINE_WIDTH,
  // STAFF_LINE_HEIGHT,
  // STAFF_LINE_BASE_Y,
  DISTANCE_BETWEEN_STAFF_LINES,
  NOTE_STEM_BASE_X,
  NOTE_STEM_BASE_Y,
  // NOTE_STEM_FLIPPED_BASE_X,
  // NOTE_STEM_FLIPPED_BASE_Y,
  NOTE_STEM_WIDTH,
  NOTE_STEM_HEIGHT,
  NOTE_BEAM_HEIGHT
} from 'constants/svgattributes';

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;

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
    x: baseX + (widthMultiplier - ONE)*TWO*NOTE_STEM_WIDTH + STAFF_LINE_WIDTH * (widthMultiplier - ONE)/TWO,
    y: baseY + angleModifier
  };
  const finalCoord = {
    x: baseX + (widthMultiplier - ONE)*TWO*NOTE_STEM_WIDTH + STAFF_LINE_WIDTH * (widthMultiplier - ONE)/TWO,
    y: baseY + angleModifier - NOTE_BEAM_HEIGHT
  };

  const stemConnector = Array.apply(null, Array(widthMultiplier)).map((x, i) => {
    const shiftX = i ? (widthMultiplier * TWO * NOTE_STEM_WIDTH + STAFF_LINE_WIDTH * (widthMultiplier - ONE)/TWO)/(widthMultiplier*i): ZERO;

    return <rect
      key={i*STAFF_LINE_WIDTH}
      className="svg__20 svg--marked-color"
      width={NOTE_STEM_WIDTH}
      height={NOTE_STEM_HEIGHT}
      x={originCoord.x - NOTE_STEM_WIDTH + shiftX}
      y={originCoord.y + i*(angleModifier)}
    />;
  });

  return (
    <>
      <path className="svg-primary-color" d={`
        M${originCoord.x} ${originCoord.y}
        L${secondCoord.x} ${secondCoord.y}
        L${thirdCoord.x} ${thirdCoord.y}
        L${finalCoord.x} ${finalCoord.y}
        Z`
      } />
      {stemConnector}
      {/* <rect
        className="svg__20"
        width={NOTE_STEM_WIDTH}
        height={NOTE_STEM_HEIGHT}
        x={originCoord.x - NOTE_STEM_WIDTH}
        y={originCoord.y}
      />
      <rect
        className="svg__20"
        width={NOTE_STEM_WIDTH}
        height={NOTE_STEM_HEIGHT}
        x={finalCoord.x}
        y={finalCoord.y}
      /> */}
      {/* <ellipse
        className="svg-primary-color svg--marked-color"
        cx={originCoord.x}
        cy={originCoord.y}
        rx="0.5"
        ry="0.5"
      />
      <ellipse
        className="svg-primary-color svg--marked-color2"
        cx={secondCoord.x}
        cy={secondCoord.y}
        rx="0.5"
        ry="0.5"
      />
      <ellipse
        className="svg-primary-color svg--marked-color3"
        cx={thirdCoord.x}
        cy={thirdCoord.y}
        rx="0.5"
        ry="0.5"
      />
      <ellipse
        className="svg-primary-color svg--marked-color4"
        cx={finalCoord.x}
        cy={finalCoord.y}
        rx="0.5"
        ry="0.5"
      /> */}
    </>
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
