import { pianoKeyListWithoutAccidentals } from 'constants/pianokeys';
import { mapNotePosition } from 'constants/stafflines';
import {
  DISTANCE_BETWEEN_STAFF_LINES,
  NOTE_STEM_BASE_Y,
  NOTE_STEM_FLIPPED_BASE_Y,
  NOTE_STEM_HEIGHT
} from 'constants/svgattributes';

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const STAFF_MIDPOINT = 26;

const getBeamPositions = (beamNotes) => beamNotes.map(noteData => pianoKeyListWithoutAccidentals.findIndex(key => key === noteData.pianoKey));

const getIsBeamOnTop = (beamNotePositions) => {
  return beamNotePositions
    .map(pos => pos - STAFF_MIDPOINT)
    .reduce((acc,item) => acc + item, ZERO) <= ZERO;
};

const getBeamAngle = (beamNotePositions) => {
  const magnitude = beamNotePositions
    .map(pos => pos - beamNotePositions[ZERO])
    .reduce((acc,item) => acc + item, ZERO)/beamNotePositions.length;

  if(magnitude === ZERO || (beamNotePositions.length > TWO && magnitude < ONE && magnitude > -ONE)) {
    return ZERO;
  }

  return magnitude > ZERO ? ONE : -ONE;
};

const getBeamHeights = (beamNoteHeights, beamAngle) => {
  if(beamAngle === ZERO) {
    return Array.from({ length: beamNoteHeights.length }).map((_) => beamNoteHeights[ZERO]);
  } else if(beamAngle < ZERO) {
    return Array.from({ length: beamNoteHeights.length }).map((_, i) => beamNoteHeights[ZERO] + i * DISTANCE_BETWEEN_STAFF_LINES);
  } else {
    return Array.from({ length: beamNoteHeights.length }).map((_, i) => beamNoteHeights[ZERO] - i * DISTANCE_BETWEEN_STAFF_LINES);
  }
};

const getBeamCoordinates = (isBeamOnTop, beamAngle, beamNotes) => {
  const beamNoteHeights = beamNotes.map(noteData => {
    return isBeamOnTop
      ? NOTE_STEM_BASE_Y + mapNotePosition[noteData.pianoKey]
      : NOTE_STEM_FLIPPED_BASE_Y + mapNotePosition[noteData.pianoKey] + NOTE_STEM_HEIGHT;
  });
  const baseY = beamNoteHeights[ZERO];
  const beamHeights = getBeamHeights(beamNoteHeights, beamAngle);
  const beamDiffs = isBeamOnTop
    ? beamHeights.map((h,i) => beamNoteHeights[i] - h)
    : beamHeights.map((h,i) => h - beamNoteHeights[i]);
  const shiftY = Math.min(...beamDiffs);
  const beamCoordinates = isBeamOnTop
    ? beamHeights.map((h) => h + shiftY)
    : beamHeights.map((h) => h - shiftY);

  return { beamCoordinates, beamNoteHeights, isBeamOnTop };
};

const getBeamData = (beamNotes) => {
  const beamNotePositions = getBeamPositions(beamNotes);
  const isBeamOnTop = getIsBeamOnTop(beamNotePositions);
  const beamAngle = getBeamAngle(beamNotePositions);

  return getBeamCoordinates(isBeamOnTop, beamAngle, beamNotes);
};

export default getBeamData;