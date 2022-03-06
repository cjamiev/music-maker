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
import BeamStemConnector from './BeamConnector';
import BeamPath from './BeamPath';

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
