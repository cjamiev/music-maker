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
    // eslint-disable-next-line no-magic-numbers
    return NOTE_BEAM_HEIGHT - TWO;
  }
  else if(angle > ZERO && widthGap - index > ZERO) {
    return -angle*(widthGap - ONE) * DISTANCE_BETWEEN_STAFF_LINES/(widthGap - index);
  } else {
    return ZERO;
  }
};

const getCoordinates = ({
  firstPianoKey,
  widthGap,
  heightGap,
  angle
}) => {
  const baseX = NOTE_STEM_BASE_X;
  const baseY = NOTE_STEM_BASE_Y + mapNotePosition[firstPianoKey];

  const originCoord = {
    x: baseX,
    y: baseY - NOTE_BEAM_HEIGHT
  };
  const inBetweenCoords = Array.from({ length: widthGap })
    .map((_, index) => {
      const modifier = getModifier(index, angle, widthGap);

      return `
        L${baseX + STAFF_LINE_WIDTH/TWO * index} ${baseY + modifier }
        L${baseX + STAFF_LINE_WIDTH/TWO * index} ${baseY + modifier + NOTE_STEM_HEIGHT}
        L${baseX + STAFF_LINE_WIDTH/TWO * index + NOTE_STEM_WIDTH} ${baseY + modifier + NOTE_STEM_HEIGHT}
        L${baseX + STAFF_LINE_WIDTH/TWO * index + NOTE_STEM_WIDTH} ${baseY + modifier}
      `;
    }).join(' ');

  const angleModifier = -angle*(widthGap - ONE) * DISTANCE_BETWEEN_STAFF_LINES;
  const finalCoord = {
    x: baseX + STAFF_LINE_WIDTH + NOTE_STEM_WIDTH,
    y: baseY + angleModifier - NOTE_BEAM_HEIGHT
  };

  return { beamDefinition: `
        M${originCoord.x} ${originCoord.y}
        ${inBetweenCoords}
        L${finalCoord.x} ${finalCoord.y}
        Z`, angleModifier };
};

const getTestCoordinates = ({
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
  const inBetweenCoords = Array.from({ length: widthGap })
    .map((_, index) => {
      const modifier = getModifier(index, angle, widthGap);

      return (
        <g key={index + modifier}>
          <ellipse
            className="svg-primary-color svg--marked-color"
            cx={baseX + STAFF_LINE_WIDTH/TWO * index}
            cy={baseY + modifier}
            rx="0.5"
            ry="0.5"
          />
          <ellipse
            className="svg-primary-color svg--marked-color2"
            cx={baseX + STAFF_LINE_WIDTH/TWO * index}
            cy={baseY + modifier + NOTE_STEM_HEIGHT}
            rx="0.5"
            ry="0.5"
          />
          <ellipse
            className="svg-primary-color svg--marked-color3"
            cx={baseX + STAFF_LINE_WIDTH/TWO * index + NOTE_STEM_WIDTH}
            cy={baseY + modifier + NOTE_STEM_HEIGHT}
            rx="0.5"
            ry="0.5"
          />
          <ellipse
            className="svg-primary-color svg--marked-color4"
            cx={baseX + STAFF_LINE_WIDTH/TWO * index + NOTE_STEM_WIDTH}
            cy={baseY + modifier}
            rx="0.5"
            ry="0.5"
          />
        </g>
      );
    });
  const finalCoord = {
    x: baseX + STAFF_LINE_WIDTH + NOTE_STEM_WIDTH,
    y: baseY + angleModifier - NOTE_BEAM_HEIGHT
  };

  return (<>
    <ellipse
      className="svg-primary-color"
      cx={originCoord.x}
      cy={originCoord.y}
      rx="0.5"
      ry="0.5"
    />
    {inBetweenCoords}
    <ellipse
      className="svg-primary-color"
      cx={finalCoord.x}
      cy={finalCoord.y}
      rx="0.5"
      ry="0.5"
    />
  </>);
};

const GenerateBeam = ({ beamNotes }) => {
  const { widthGap, heightGap, angle } = getParsedBeamData(beamNotes);
  const { beamDefinition, angleModifier } = getCoordinates({
    firstPianoKey:beamNotes[ZERO],
    widthGap,
    heightGap,
    angle
  });
  console.log(beamDefinition);

  return (
    <>
      <path className="svg-primary-color svg__20 svg--marked-color" d={beamDefinition} />
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
