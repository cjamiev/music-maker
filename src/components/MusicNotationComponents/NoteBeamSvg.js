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

const getAngleHeightModifier = ({ beamNoteIndicies, highestNoteIndex, widthGap }) => {
  if(beamNoteIndicies[ZERO] === beamNoteIndicies[beamNoteIndicies.length - ONE]) {
    return ZERO;
  }

  const angle = beamNoteIndicies[ZERO] < highestNoteIndex ? -ONE : ONE;

  return angle * widthGap * DISTANCE_BETWEEN_STAFF_LINES;
};

const getBaseY = ({ beamNotes, angleHeightModifier, heightGap, highestNotePosition, widthGap }) => {
  const firstPianoKey = beamNotes[ZERO];
  const heightGapModifier = NOTE_STEM_BASE_Y + mapNotePosition[firstPianoKey] - heightGap * DISTANCE_BETWEEN_STAFF_LINES/TWO;

  return angleHeightModifier === ZERO
    ? heightGapModifier
    : heightGapModifier - (angleHeightModifier)*(highestNotePosition)/(widthGap);
};

const getBeamAttributes = (beamNotes) => {
  const beamNoteIndicies = beamNotes.map(pianoKey => pianoKeyListWithoutAccidentals.findIndex(key => key === pianoKey));
  const highestNoteIndex = Math.max(...beamNoteIndicies);
  const lowestNoteIndex = Math.min(...beamNoteIndicies);

  const highestNotePosition = beamNoteIndicies.findIndex(i => i === highestNoteIndex);
  const heightGap = highestNoteIndex - lowestNoteIndex;

  const widthGap = beamNotes.length - ONE;
  const angleHeightModifier = getAngleHeightModifier({ beamNoteIndicies, highestNoteIndex, widthGap });
  const baseX = NOTE_STEM_BASE_X;
  const baseY = getBaseY({ beamNotes, angleHeightModifier, heightGap, highestNotePosition, widthGap });

  return { baseX, baseY, widthGap, angleHeightModifier };
};

const BeamPath = ({ baseX, baseY, widthGap, angleHeightModifier }) => {
  const originCoord = {
    x: baseX,
    y: baseY - NOTE_BEAM_HEIGHT
  };
  const secondCoord = {
    x: baseX,
    y: baseY
  };
  const thirdCoord = {
    x: baseX + NOTE_STEM_WIDTH + STAFF_LINE_WIDTH * widthGap/TWO,
    y: baseY + angleHeightModifier
  };
  const finalCoord = {
    x: baseX + STAFF_LINE_WIDTH * widthGap/TWO + NOTE_STEM_WIDTH,
    y: baseY + angleHeightModifier - NOTE_BEAM_HEIGHT
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


const NoteBeamSvg = ({ transform, content = { } }) => {
  const { baseX, baseY, widthGap, angleHeightModifier } = getBeamAttributes(content.beamNotes);

  return (
    <g transform={transform}>
      <BeamPath
        baseX={baseX}
        baseY={baseY}
        widthGap={widthGap}
        angleHeightModifier={angleHeightModifier}
      />
    </g>
  );
};

export default NoteBeamSvg;
