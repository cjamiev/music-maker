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

const getAngleHeightGap = ({ direction = ONE, size }) => {
  return direction * size * DISTANCE_BETWEEN_STAFF_LINES;
};

const getAngleHeightModifier = ({ beamNoteIndicies, highestNoteIndex, widthGap }) => {
  const angle = beamNoteIndicies[ZERO] < highestNoteIndex ? -ONE : ONE;

  if(beamNoteIndicies[ZERO] === beamNoteIndicies[beamNoteIndicies.length - ONE]) {
    return ZERO;
  }


  return getAngleHeightGap({ direction: angle, size: widthGap });
};

const getBaseY = ({ beamNotes, angleHeightModifier, heightGap, highestNotePosition, widthGap }) => {
  const firstPianoKey = beamNotes[ZERO].pianoKey;
  const firstNotePosition = NOTE_STEM_BASE_Y + mapNotePosition[firstPianoKey];
  const heightGapModifier = heightGap * DISTANCE_BETWEEN_STAFF_LINES/TWO;
  const adjustedAngleHeightModifier = (angleHeightModifier)*(highestNotePosition)/(widthGap);

  if (highestNotePosition === ZERO){
    return firstNotePosition;
  } else if(angleHeightModifier === ZERO) {
    return firstNotePosition - heightGapModifier;
  }

  const baseY = firstNotePosition - heightGapModifier - adjustedAngleHeightModifier;

  return baseY > firstNotePosition ? firstNotePosition : baseY;
};

const getBeamAttributes = (beamNotes) => {
  const beamNoteIndicies = beamNotes.map(noteData => pianoKeyListWithoutAccidentals.findIndex(key => key === noteData.pianoKey));
  const highestNoteIndex = Math.max(...beamNoteIndicies);

  const highestNotePosition = beamNoteIndicies.findIndex(i => i === highestNoteIndex);
  const heightGap = highestNoteIndex - beamNoteIndicies[ZERO];

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
