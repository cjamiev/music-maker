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

const getCoordinates = ({
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
  const secondCoord = {
    x: baseX,
    y: baseY + NOTE_STEM_HEIGHT
  };
  const thirdCoord = {
    x: baseX + NOTE_STEM_WIDTH,
    y: baseY + NOTE_STEM_HEIGHT
  };
  const fourthCoord = {
    x: baseX + NOTE_STEM_WIDTH,
    y: baseY
  };
  const fifthCoord = {
    x: baseX + STAFF_LINE_WIDTH/TWO,
    y: baseY + angleModifier/TWO
  };
  const sixthCoord = {
    x: baseX + STAFF_LINE_WIDTH/TWO,
    y: baseY + angleModifier/TWO + NOTE_STEM_HEIGHT
  };
  const seventhCoord = {
    x: baseX + STAFF_LINE_WIDTH/TWO + NOTE_STEM_WIDTH,
    y: baseY + angleModifier/TWO + NOTE_STEM_HEIGHT
  };
  const eighthCoord = {
    x: baseX + STAFF_LINE_WIDTH/TWO + NOTE_STEM_WIDTH,
    y: baseY + angleModifier/TWO
  };
  const ninthCoord = {
    x: baseX + STAFF_LINE_WIDTH/TWO*TWO,
    y: baseY + angleModifier
  };
  const tenthCoord = {
    x: baseX + STAFF_LINE_WIDTH/TWO*TWO,
    y: baseY + angleModifier + NOTE_STEM_HEIGHT
  };
  const eleventhCoord = {
    x: baseX + STAFF_LINE_WIDTH/TWO*TWO + NOTE_STEM_WIDTH,
    y: baseY + angleModifier + NOTE_STEM_HEIGHT
  };
  const twelvthCoord = {
    x: baseX + STAFF_LINE_WIDTH/TWO*TWO + NOTE_STEM_WIDTH,
    y: baseY + angleModifier
  };
  const finalCoord = {
    x: baseX + STAFF_LINE_WIDTH + NOTE_STEM_WIDTH,
    y: baseY + angleModifier - NOTE_BEAM_HEIGHT
  };

  return { beamDefinition: `
        M${originCoord.x} ${originCoord.y}
        L${secondCoord.x} ${secondCoord.y}
        L${thirdCoord.x} ${thirdCoord.y}
        L${fourthCoord.x} ${fourthCoord.y}
        L${fifthCoord.x} ${fifthCoord.y}
        L${sixthCoord.x} ${sixthCoord.y}
        L${seventhCoord.x} ${seventhCoord.y}
        L${eighthCoord.x} ${eighthCoord.y}
        L${ninthCoord.x} ${ninthCoord.y}
        L${tenthCoord.x} ${tenthCoord.y}
        L${eleventhCoord.x} ${eleventhCoord.y}
        L${twelvthCoord.x} ${twelvthCoord.y}
        L${finalCoord.x} ${finalCoord.y}
        Z`, angleModifier };
};

const GenerateBeam = ({ beamNotes }) => {
  const { widthGap, heightGap, angle } = getParsedBeamData(beamNotes);
  const { beamDefinition, angleModifier } = getCoordinates({
    firstPianoKey:beamNotes[ZERO],
    widthGap,
    heightGap,
    angle
  });

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
