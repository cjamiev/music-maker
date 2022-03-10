import React from 'react';
import BeamStemConnector from './BeamConnector';
import BeamPath from './BeamPath';
import getBeamData from './helper';

const NoteBeamSvg = ({ transform, content = { } }) => {
  const { beamNotes } = content;
  const { beamCoordinates, beamNoteHeights, isBeamOnTop } = getBeamData(beamNotes);

  return (
    <g transform={transform}>
      <BeamPath isBeamOnTop={isBeamOnTop} beamCoordinates={beamCoordinates} />
      <BeamStemConnector isBeamOnTop={isBeamOnTop} beamCoordinates={beamCoordinates} beamNoteHeights={beamNoteHeights} />
    </g>
  );
};

export default NoteBeamSvg;
