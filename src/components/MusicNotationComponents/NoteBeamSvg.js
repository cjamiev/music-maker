import React from 'react';
import { pianoKeyListWithoutAccidentals } from 'constants/pianokeys';
import {
  STAFF_LINE_WIDTH,
  DISTANCE_BETWEEN_STAFF_LINES,
  NOTE_STEM_BASE_X,
  NOTE_STEM_BASE_Y,
  NOTE_STEM_WIDTH,
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

const getAngle = (beamNoteIndicies, highestNoteIndex) => {
  if(beamNoteIndicies[ZERO] === beamNoteIndicies[beamNoteIndicies.length - ONE]) {
    return ZERO;
  }

  return beamNoteIndicies[ZERO] < highestNoteIndex ? ONE : -ONE;
};

const getParsedBeamData = (beamNotes) => {
  const beamNoteIndicies = beamNotes.map(pianoKey => pianoKeyListWithoutAccidentals.findIndex(key => key === pianoKey));
  const highestNoteIndex = Math.max(...beamNoteIndicies);
  const lowestNoteIndex = Math.min(...beamNoteIndicies);
  const heightGap = highestNoteIndex - lowestNoteIndex;
  const widthGap = beamNotes.length;
  const angle = getAngle(beamNoteIndicies, highestNoteIndex);

  return { heightGap, widthGap, angle };
};

const getModifier = (index, angle, widthGap) => {
  if(index === ZERO) {
    return NOTE_BEAM_HEIGHT - TWO;
  }
  else if(angle > ZERO && widthGap - index > ZERO) {
    return -angle*(widthGap - ONE) * DISTANCE_BETWEEN_STAFF_LINES/(widthGap - index);
  } else {
    return ZERO;
  }
};

const getPositionText = (data) => {
  return data.map((location,index) => {
    return(
      <text
        key={location.x + location.y + index}
        className="svg--marked-color svg--marked-text"
        x={location.x} y={location.y}
      >
        <tspan className="svg--marked-color4 svg--marked-text"
          x={location.x} y={location.y} >
          {index + ONE}
        </tspan>
      </text>
    );
  });
};

const getPositionEllipse = (data) => {
  return data.map((location,index) => {
    return (
      <ellipse
        key={location.x + location.y + index}
        className="svg-primary-color"
        cx={location.x} cy={location.y} rx="0.5" ry="0.5"
      />
    );
  });
};

const getBeamPath = ({
  firstPianoKey,
  widthGap,
  heightGap,
  angle
}) => {
  const baseX = NOTE_STEM_BASE_X;
  const baseY = NOTE_STEM_BASE_Y + mapNotePosition[firstPianoKey];

  const angleModifier = -angle*(widthGap - ONE) * DISTANCE_BETWEEN_STAFF_LINES;
  const originCoord = {
    x: baseX,
    y: baseY - NOTE_BEAM_HEIGHT
  };
  const finalCoord = {
    x: baseX + STAFF_LINE_WIDTH + NOTE_STEM_WIDTH,
    y: baseY + angleModifier - NOTE_BEAM_HEIGHT
  };
  const inBetweenCoords = Array.from({ length: widthGap })
    .map((_, index) => {
      const modifier = getModifier(index, angle, widthGap);
      const firstX = baseX + (STAFF_LINE_WIDTH/TWO) * index;
      const firstY = baseY + modifier;
      const secondX = firstX;
      const secondY = firstY + NOTE_STEM_HEIGHT;
      const thirdX = firstX + NOTE_STEM_WIDTH;
      const thirdY = secondY;
      const fourthX = thirdX;
      const fourthY = firstY;

      return [
        { x: firstX, y: firstY },
        { x: secondX, y: secondY },
        { x: thirdX, y: thirdY },
        { x: fourthX, y: fourthY }
      ];
    }).reduce((entry,acc) => { return entry.concat(acc); },[]);
  const pathCoordinates = [originCoord, ...inBetweenCoords, finalCoord];
  const pathDefinition = `
    M${originCoord.x} ${originCoord.y}
    ${inBetweenCoords.map(item => `L${item.x} ${item.y}`).join(' ')} L${finalCoord.x} 
    ${finalCoord.y}
    Z
  `;

  return (
    <>
      <path className="svg-primary-color svg__20 svg--marked-color" d={pathDefinition} />
      {getPositionEllipse(pathCoordinates)}
    </>
  );
};

const GenerateBeam = ({ beamNotes }) => {
  const { widthGap, heightGap, angle } = getParsedBeamData(beamNotes);
  const beamPath = getBeamPath({
    firstPianoKey:beamNotes[ZERO],
    widthGap,
    heightGap,
    angle
  });

  return (
    <>
      {beamPath}
    </>
  );
};

const NoteBeamSvg = ({ transform, content = { } }) => {
  return (
    <g transform={transform}>
      <GenerateBeam beamNotes={content.beamNotes} />
    </g>
  );
};

export default NoteBeamSvg;
