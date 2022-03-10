import React from 'react';
import {
  NOTE_FLAG_WIDTH,
  STAFF_LINE_WIDTH,
  NOTE_STEM_BASE_X,
  NOTE_STEM_WIDTH,
  NOTE_STEM_FLIPPED_BASE_X,
  NOTE_BEAM_HEIGHT
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
    x: originCoord.x,
    y: originCoord.y - NOTE_BEAM_HEIGHT
  };
  const thirdCoord = {
    x: originCoord.x + NOTE_STEM_WIDTH + STAFF_LINE_WIDTH * widthGap/TWO,
    y: beamCoordinates[widthGap] - NOTE_BEAM_HEIGHT
  };
  const finalCoord = {
    x: thirdCoord.x,
    y: thirdCoord.y + NOTE_BEAM_HEIGHT
  };

  const pathDefinition = `
    M${originCoord.x} ${originCoord.y} 
    L${secondCoord.x} ${secondCoord.y}
    L${thirdCoord.x} ${thirdCoord.y}
    L${finalCoord.x} ${finalCoord.y}
    Z
  `;

  return (<path className="svg__20" d={pathDefinition} />);
};


const BeamStemConnector = ({ isBeamOnTop, beamCoordinates, beamNoteHeights }) => {
  return beamCoordinates.map((baseY, i) => {
    const coordX = isBeamOnTop
      ? NOTE_STEM_BASE_X + i * STAFF_LINE_WIDTH/TWO
      : NOTE_STEM_FLIPPED_BASE_X + i * STAFF_LINE_WIDTH/TWO;
    const height = isBeamOnTop ? beamNoteHeights[i] - baseY : baseY - beamNoteHeights[i];
    const coordY = isBeamOnTop ? baseY : baseY - height - NOTE_BEAM_HEIGHT;

    return <rect
      key={coordX}
      className="svg__20"
      aria-label="beam note stem"
      width={NOTE_STEM_WIDTH}
      height={height}
      x={coordX}
      y={coordY}
    />;
  });
};

const NoteBeamSvg = ({ transform, content = { } }) => {
  const { beamCoordinates, beamNoteHeights, isBeamOnTop } = content;

  return (
    <g transform={transform}>
      <BeamPath
        isBeamOnTop={isBeamOnTop}
        beamCoordinates={beamCoordinates}
      />
      <BeamStemConnector
        isBeamOnTop={isBeamOnTop}
        beamCoordinates={beamCoordinates}
        beamNoteHeights={beamNoteHeights}
      />
    </g>
  );
};

export default NoteBeamSvg;
