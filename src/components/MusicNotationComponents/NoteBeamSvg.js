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

const getAngleHeightModifier = (beamNotes) => {
  const beamNoteIndicies = beamNotes.map(noteData => pianoKeyListWithoutAccidentals.findIndex(key => key === noteData.pianoKey));

  if(beamNoteIndicies[ZERO] === beamNoteIndicies[beamNoteIndicies.length - ONE]) {
    return ZERO;
  }

  const highestNoteIndex = Math.max(...beamNoteIndicies);
  const angle = beamNoteIndicies[ZERO] < highestNoteIndex ? -ONE : ONE;

  return angle * (beamNotes.length - ONE) * DISTANCE_BETWEEN_STAFF_LINES;
};

const getBaseY = (beamNotes) => {
  const firstNotePosition = NOTE_STEM_BASE_Y + mapNotePosition[beamNotes[ZERO].pianoKey];
  const beamNoteHeights = beamNotes.map(noteData => NOTE_STEM_BASE_Y + mapNotePosition[noteData.pianoKey] - firstNotePosition);
  const isFirstNoteHighest = beamNoteHeights.some(h => h < ZERO);
  const isNotAllZero = beamNoteHeights.some(h => h !== ZERO);

  if(!isNotAllZero) {
    return firstNotePosition;
  }

  const beamGaps = beamNoteHeights.map((h, i) => (isFirstNoteHighest
    ? h + i * DISTANCE_BETWEEN_STAFF_LINES
    : h - i * DISTANCE_BETWEEN_STAFF_LINES));

  return firstNotePosition + Math.min(...beamGaps);
};

const BeamPath = ({ widthGap, baseY, angleHeightModifier }) => {
  const originCoord = {
    x: NOTE_STEM_BASE_X,
    y: baseY - NOTE_BEAM_HEIGHT
  };
  const secondCoord = {
    x: NOTE_STEM_BASE_X,
    y: baseY
  };
  const thirdCoord = {
    x: NOTE_STEM_BASE_X + NOTE_STEM_WIDTH + STAFF_LINE_WIDTH * widthGap/TWO,
    y: baseY + angleHeightModifier
  };
  const finalCoord = {
    x: NOTE_STEM_BASE_X + STAFF_LINE_WIDTH * widthGap/TWO + NOTE_STEM_WIDTH,
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
  const widthGap = content.beamNotes.length - ONE;
  const baseY = getBaseY(content.beamNotes);
  const angleHeightModifier = getAngleHeightModifier(content.beamNotes);

  return (
    <g transform={transform}>
      <BeamPath
        widthGap={widthGap}
        baseY={baseY}
        angleHeightModifier={angleHeightModifier}
      />
    </g>
  );
};

export default NoteBeamSvg;
