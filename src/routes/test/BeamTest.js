/* eslint-disable no-magic-numbers */
import React, { useMemo, useEffect, useState } from 'react';
import { mapNotePosition, mapStaffLines } from 'constants/stafflines';
import {
  STAFF_LINE_WIDTH,
  MEASURE_BOTH_STAFFS_HEIGHT,
  HEIGHT_BETWEEN_ROWS
} from 'constants/svgattributes';
import { ZOOM_LEVELS, DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES } from 'constants/page';
import { pianoKeyList, pianoKeyListWithoutAccidentals } from 'constants/pianokeys';
import DisplaySheetMusic from 'components/DisplaySheetMusic';
import './beam-notes.css';

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const DEFAULT_ZOOM_INDEX = 14;

const getSvgAttributes = (currentZoom) => {
  const zoomModifier = ZOOM_LEVELS[currentZoom];

  return {
    width: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.width * zoomModifier,
    height: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.height * zoomModifier,
    viewBox: DEFAULT_MUSIC_NOTATION_SVG_ATTRIBUTES.viewBox
  };
};

const getNotes = (beamNotes, pos) => {
  return beamNotes.map((noteData,index) => {
    const pianoKeyIndex = pianoKeyList.findIndex(key => key === noteData.pianoKey);
    const isNoteFlipped = pianoKeyIndex > 26;
    const shiftX = index === ZERO ? ZERO : STAFF_LINE_WIDTH/TWO*index;

    return { component:'Note',
      transform:`translate(${shiftX - 70 + 70*pos},${(-ONE/TWO)*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
      subcomponents:[
        { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines[noteData.pianoKey]},
        isNoteFlipped ? { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition[noteData.pianoKey]})`, conditions:{}}
          : { component:'StemmedNote', transform:`translate(0,${mapNotePosition[noteData.pianoKey]})`, conditions:{}}
      ]};
  });
};

const getBeam = (beamNotes, pos) => {
  return { component: 'NoteBeam', transform:`translate(${-70 + 70*pos},${(-1/2)*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    content: { beamNotes },
    subcomponents:[] };
};

const upDirection = [
  { pianoKey: 'C4' },
  { pianoKey: 'E4' },
  { pianoKey: 'C4' },
  { pianoKey: 'E4' },
  { pianoKey: 'F4' }
];
const flatDirection = [
  { pianoKey: 'C4' },
  { pianoKey: 'C4' },
  { pianoKey: 'C4' },
  { pianoKey: 'C4' },
  { pianoKey: 'C4' }
];
const downDirection = [
  { pianoKey: 'F4' },
  { pianoKey: 'E4' },
  { pianoKey: 'C4' },
  { pianoKey: 'E4' },
  { pianoKey: 'C4' }
];
const upDirection2 = [
  { pianoKey: 'C5' },
  { pianoKey: 'E5' },
  { pianoKey: 'C5' },
  { pianoKey: 'E5' },
  { pianoKey: 'F5' }
];
const flatDirection2 = [
  { pianoKey: 'C5' },
  { pianoKey: 'C5' },
  { pianoKey: 'C5' },
  { pianoKey: 'C5' },
  { pianoKey: 'C5' }
];
const downDirection2 = [
  { pianoKey: 'F5' },
  { pianoKey: 'E5' },
  { pianoKey: 'C5' },
  { pianoKey: 'E5' },
  { pianoKey: 'C5' }
];

export const BeamTest = () => {
  const [beamNotes, setBeamNotes] = useState(upDirection);

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

  const addNote = (beamIndex) => {
    const updatedBeamNotes = beamNotes.concat([{
      pianoKey: 'C4'
    }]);

    setBeamNotes(updatedBeamNotes);
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

  return (
    <>
      <div className="beam-notes__test-btns">
        <button onClick={() => {setBeamNotes(upDirection);}}>Ascending</button>
        <button onClick={() => {setBeamNotes(flatDirection);}}>Flat</button>
        <button onClick={() => {setBeamNotes(downDirection);}}>Descending</button>
        <button onClick={() => {setBeamNotes(upDirection2);}}>Ascending Flipped</button>
        <button onClick={() => {setBeamNotes(flatDirection2);}}>Flat Flipped</button>
        <button onClick={() => {setBeamNotes(downDirection2);}}>Descending Flipped</button>
      </div>
      <div className="beam-notes__container">
        <div className="beam-notes__btn-container">
          <button onClick={() => {addNote();}}>Add</button>
          {beamNotes.map((_,index) => {
            return (
              <div key={`beam-note-btn-group-${index}`} className="beam-notes__btn-group">
                <button onClick={() => {incrementNote(index);}}>Increment {index}</button>
                <button onClick={() => {decrementNote(index);}}>Decrement {index}</button>
                {index > ONE && <button onClick={() => {deleteNote(index);}}>Delete {index}</button>}
              </div>
            );
          })}
        </div>
        <DisplaySheetMusic
          sheetMusic={[...getNotes(beamNotes,ZERO), getBeam(beamNotes,ZERO)]}
          {...getSvgAttributes(DEFAULT_ZOOM_INDEX)}
        />
      </div>
    </>
  );
};