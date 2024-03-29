import React, { useState } from 'react';
import { DisplaySheetMusic } from 'components/molecules/DisplaySheetMusic';
import {
  STAFF_LINE_WIDTH,
  MEASURE_BOTH_STAFFS_HEIGHT,
  HEIGHT_BETWEEN_ROWS
} from 'constants/svgattributes';
import { mapNotePosition, mapStaffLines } from 'constants/stafflines';
import { ZOOM_LEVELS, DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES } from 'constants/page';
import { pianoKeyList, pianoKeyListWithoutAccidentals } from 'constants/pianokeys';
import getBeamData from './beamHelper';

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const MAX_BEAM_LENGTH = 8;
const DEFAULT_ZOOM_INDEX = 9;
const SHIFT_STAFF_X = 70;
const DEFAULT_BEAM_NOTES = [
  { pianoKey: 'C4' },
  { pianoKey: 'C4' }
];

const getSvgAttributes = (currentZoom) => {
  const zoomModifier = ZOOM_LEVELS[currentZoom];

  return {
    width: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.width * zoomModifier,
    height: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.height * zoomModifier,
    viewBox: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.viewBox
  };
};

const getShowStaff = (index, size, pianoKey) => {
  if (index % TWO === ZERO && size % TWO !== ZERO) {
    return true;
  } else if (index % TWO !== ZERO && size % TWO !== ZERO) {
    return false;
  } else if (index % TWO === ZERO || index === size - ONE) {
    return true;
  } else {
    return false;
  }
};

const getNotes = (beamNotes, isBeamOnTop, pos) => {
  const size = beamNotes.length;
  return beamNotes.map((noteData,index) => {
    const pianoKeyIndex = pianoKeyList.findIndex(key => key === noteData.pianoKey);
    const shiftX = index === ZERO ? ZERO : STAFF_LINE_WIDTH/TWO*index;
    const showStaff = getShowStaff(index, size, noteData.pianoKey);

    return { component:'Note',
      transform:`translate(${shiftX - SHIFT_STAFF_X + SHIFT_STAFF_X*pos},${(-ONE/TWO)*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
      subcomponents:[
        showStaff && { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines[noteData.pianoKey]},
        isBeamOnTop ? { component:'StemmedNote', transform:`translate(0,${mapNotePosition[noteData.pianoKey]})`, conditions:{}}
          : { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition[noteData.pianoKey]})`, conditions:{}}
      ].filter(Boolean)};
  });
};

const getBeam = (beamData, pos) => {
  return { component: 'NoteBeam', transform:`translate(${-SHIFT_STAFF_X + SHIFT_STAFF_X*pos},${(-ONE/TWO)*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    content: beamData,
    subcomponents:[] };
};

export const BeamBuilder = () => {
  const [beamNotes, setBeamNotes] = useState(DEFAULT_BEAM_NOTES);

  const incrementNote = (beamIndex) => {
    const currentPianoKeyIndex = pianoKeyListWithoutAccidentals.findIndex(key => key === beamNotes[beamIndex].pianoKey);
    if(currentPianoKeyIndex < pianoKeyListWithoutAccidentals.length) {
      const updatedNote = pianoKeyListWithoutAccidentals[currentPianoKeyIndex + ONE];

      const updatedBeamNotes = beamNotes.map((note, i) => {
        if(i === beamIndex) {
          return {
            ...note,
            pianoKey: updatedNote
          };
        }

        return note;
      });

      setBeamNotes(updatedBeamNotes);
    }
  };

  const decrementNote = (beamIndex) => {
    const currentPianoKeyIndex = pianoKeyListWithoutAccidentals.findIndex(key => key === beamNotes[beamIndex].pianoKey);
    if(currentPianoKeyIndex > ZERO) {
      const updatedNote = pianoKeyListWithoutAccidentals[currentPianoKeyIndex - ONE];

      const updatedBeamNotes = beamNotes.map((note, i) => {
        if(i === beamIndex) {
          return {
            ...note,
            pianoKey: updatedNote
          };
        }

        return note;
      });

      setBeamNotes(updatedBeamNotes);
    }
  };

  const addNote = () => {
    if(beamNotes.length < MAX_BEAM_LENGTH) {
      const updatedBeamNotes = beamNotes.concat([{
        pianoKey: 'C4'
      }]);

      setBeamNotes(updatedBeamNotes);
    }
  };

  const deleteNote = (beamIndex) => {
    const updatedBeamNotes = beamNotes.map((note, i) => {
      if(i === beamIndex) {
        return null;
      }

      return note;
    }).filter(Boolean);

    setBeamNotes(updatedBeamNotes);
  };

  const { beamCoordinates, beamNoteHeights, isBeamOnTop } = getBeamData(beamNotes);

  return (
    <>
      <div className="beambuilder">
        <div className={isBeamOnTop ? 'beambuilder__sheet-music' : 'beambuilder__sheet-music--bottom-beam'}>
          <DisplaySheetMusic
            sheetMusic={[...getNotes(beamNotes, isBeamOnTop, ZERO), getBeam({ beamCoordinates, beamNoteHeights, isBeamOnTop },ZERO)]}
            {...getSvgAttributes(DEFAULT_ZOOM_INDEX)}
          />
        </div>
        <div className="beambuilder__btn-groups">
          <button className="beambuilder__btn" onClick={() => {addNote();}}>Add</button>
          {beamNotes.map((_,index) => {
            return (
              <div key={`beambuilder-btn-column-${index}`} className="beambuilder__btn-column">
                <button className="beambuilder__btn" onClick={() => {incrementNote(index);}}>Raise Note {index+ONE}</button>
                <button className="beambuilder__btn" onClick={() => {decrementNote(index);}}>Lower Note {index+ONE}</button>
                {index > ONE && <button className="beambuilder__btn" onClick={() => {deleteNote(index);}}>Delete {index}</button>}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
