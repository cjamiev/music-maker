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

const getAreNotesFlipped = (beamNotes) => {
  return beamNotes.map(noteData => {
    return pianoKeyList.findIndex(key => key === noteData.pianoKey) > STAFF_MIDPOINT;
  });
};

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

const BeamPath = ({ flippedNotes, widthGap, baseY, angleHeightModifier }) => {
  const shiftXForFirstFlipped = flippedNotes[ZERO] ? NOTE_FLAG_WIDTH - TWO * NOTE_STEM_WIDTH: ZERO;
  const shiftXForLastFlipped = flippedNotes[widthGap] ? NOTE_FLAG_WIDTH - TWO * NOTE_STEM_WIDTH : ZERO;
  // eslint-disable-next-line no-magic-numbers
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

const BeamStemConnector = ({ flippedNotes, beamNotes, baseY, angleHeightModifier }) => {
  const firstNotePosition = flippedNotes[ZERO]
    ? NOTE_STEM_FLIPPED_BASE_Y + mapNotePosition[beamNotes[ZERO].pianoKey] + NOTE_STEM_HEIGHT
    : NOTE_STEM_BASE_Y + mapNotePosition[beamNotes[ZERO].pianoKey];
  const direction = angleHeightModifier > ZERO ? ONE : -ONE;

  // eslint-disable-next-line max-params
  const getConnectorHeights = (index, pianoKey, heightModifier, shiftY) => {
    if(flippedNotes[ZERO] && angleHeightModifier < ZERO) {
      return (baseY - NOTE_BEAM_HEIGHT + 50) - (firstNotePosition + mapNotePosition[pianoKey] + NOTE_BEAM_HEIGHT + heightModifier * DISTANCE_BETWEEN_STAFF_LINES);
    } else if(flippedNotes[ZERO] && angleHeightModifier === ZERO) {
      return (baseY - NOTE_BEAM_HEIGHT + 50) - (shiftY);
    } else if(flippedNotes[ZERO]) {
      return (baseY - NOTE_BEAM_HEIGHT + 50 + index * DISTANCE_BETWEEN_STAFF_LINES) - (shiftY);
    } else if(angleHeightModifier < ZERO) {
      return heightModifier * DISTANCE_BETWEEN_STAFF_LINES + NOTE_STEM_BASE_Y + mapNotePosition[pianoKey] - firstNotePosition;
    } else if(angleHeightModifier === ZERO) {
      return NOTE_STEM_BASE_Y + mapNotePosition[pianoKey] - firstNotePosition;
    }

    return Math.round((NOTE_STEM_BASE_Y + mapNotePosition[pianoKey]) - (baseY + index * DISTANCE_BETWEEN_STAFF_LINES));
  };

  return beamNotes.map((noteData,index) => {
    const heightModifier = angleHeightModifier < ZERO ? index : (beamNotes.length - index - ONE);
    const shiftX = flippedNotes[ZERO]
      ? NOTE_STEM_FLIPPED_BASE_X + index * STAFF_LINE_WIDTH/TWO
      : NOTE_STEM_BASE_X + index * STAFF_LINE_WIDTH/TWO;
    const shiftY = flippedNotes[ZERO]
      ? NOTE_STEM_HEIGHT + NOTE_STEM_FLIPPED_BASE_Y + mapNotePosition[noteData.pianoKey]
      : baseY + direction * index * DISTANCE_BETWEEN_STAFF_LINES;
    const height = getConnectorHeights(index, noteData.pianoKey, heightModifier, shiftY);

    return <rect
      key={shiftX}
      data-testid="beam-note-stem"
      className="svg__20 svg--marked-color"
      aria-label="beam note stem"
      width="0.45734397"
      height={height}
      x={shiftX}
      y={shiftY}
    />;
  });
};

const NoteBeamSvg = ({ transform, content = { } }) => {
  const { beamNotes } = content;
  const widthGap = beamNotes.length - ONE;
  const flippedNotes = getAreNotesFlipped(beamNotes);
  const baseY = getBaseY(beamNotes);
  const angleHeightModifier = getAngleHeightModifier(beamNotes);

  return (
    <g transform={transform}>
      <BeamPath
        flippedNotes={flippedNotes}
        widthGap={widthGap}
        baseY={baseY}
        angleHeightModifier={angleHeightModifier}
      />
      <BeamStemConnector
        flippedNotes={flippedNotes}
        beamNotes={beamNotes}
        baseY={baseY}
        angleHeightModifier={angleHeightModifier}
      />
    </g>
  );
};

export default NoteBeamSvg;
