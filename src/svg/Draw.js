import React, { Fragment } from 'react';
import {
  FlippedNoteHead,
  NoteHead
} from './DrawNote/NoteHead';
import {
  FlippedNoteStem,
  NoteStem
} from './DrawNote/NoteStem';
import {
  FlippedNoteFlag,
  NoteFlag
} from './DrawNote/NoteFlag';
import {
  renderRestNote
} from './DrawMusicSymbol';
import {
  Flat,
  Sharp,
  Natural,
  Accent,
  Fermata
} from './DrawNoteModifier';
import {
  StaffLines
} from './DrawStaff';

const keyPositions = [
  'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2',
  'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3',
  'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4',
  'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5',
  'C6', 'D6', 'E6', 'F6', 'G6', 'A6', 'B6'
];
const STAFF_WIDTH = 500;
const STAFF_HEIGHT = 500;

const renderNote = (noteType, keyIndex) => {
  const shouldFlip = keyIndex > 19 ? true : false;

  const xshift = 0;
  const yshift = shouldFlip && noteType !== 'whole-note' ? -22.75 * (keyIndex - 23) : -22.75 * (keyIndex - 17);

  if (shouldFlip) {
    return (
      <Fragment>
        {<FlippedNoteHead type={noteType} xshift={xshift} yshift={yshift} />}
        {<FlippedNoteStem type={noteType} xshift={xshift} yshift={yshift} />}
        {<FlippedNoteFlag type={noteType} xshift={xshift} yshift={yshift} />}
      </Fragment>
    );
  }
  else {
    return (
      <Fragment>
        {<NoteHead type={noteType} xshift={xshift} yshift={yshift} />}
        {<NoteStem type={noteType} xshift={xshift} yshift={yshift} />}
        {<NoteFlag type={noteType} xshift={xshift} yshift={yshift} />}
      </Fragment>
    );
  }
};

const renderNoteModifier = (noteModifier, keyIndex) => {
  const flatYshift = -11.125 * (keyIndex - 17);
  const sharpYshift = -15 * (keyIndex - 17);
  const naturalYshift = -15 * (keyIndex - 17);

  return (
    <Fragment>
      {noteModifier.flat && <Flat yshift={flatYshift} />}
      {noteModifier.sharp && <Sharp yshift={sharpYshift} />}
      {noteModifier.natural && <Natural yshift={naturalYshift} />}
      {noteModifier.fermata && <Fermata />}
      {noteModifier.accent && <Accent />}
    </Fragment>
  );
};

const renderPianoKey = (pianoKey, noteType, noteModifier) => {
  const naturalKey = pianoKey.replace('#', '');
  const keyIndex = keyPositions.findIndex(key => key === naturalKey);

  return (
    <Fragment>
      {renderNote(noteType, keyIndex)}
      {renderNoteModifier(noteModifier, keyIndex)}
    </Fragment>
  );
};

const renderPianoChord = (pianoKeys, noteType, noteModifier) => {
  const naturalKeys = pianoKeys.map(key => key.replace('#', ''));
  const keyIndicies = naturalKeys.map(naturalKey => keyPositions.findIndex(key => key === naturalKey)).sort();
  const notes = keyIndicies.map(keyIndex => {
    const shouldFlip = keyIndex > 19 ? true : false;
    const xshift = 0;
    const yshift = shouldFlip && noteType !== 'whole-note' ? -22.75 * (keyIndex - 23) : -22.75 * (keyIndex - 17);
    if (shouldFlip) {
      return (<FlippedNoteHead type={noteType} xshift={xshift} yshift={yshift} />);
    }
    return (<NoteHead key={keyIndex} type={noteType} xshift={xshift} yshift={yshift} />);
  });

  const shouldFlip = keyIndicies[0] > 19 ? true : false;
  const stemXShift = 0;
  const stemYShift = shouldFlip ? -22.25 * (keyIndicies[0] - 23) : -22.25 * (keyIndicies[0] - 17);
  return (
    <Fragment>
      {notes}
      {<NoteStem type={noteType} xshift={stemXShift} yshift={stemYShift - 50} heightShift={50} />}
      {<NoteFlag type={noteType} xshift={stemXShift} yshift={stemYShift} />}
      {renderNoteModifier(noteModifier, keyIndicies[0])}
    </Fragment>
  );
};

const renderMusicSymbol = (musicalSymbol) => {
  return (
    <svg height='1in' width='1in' viewBox='0 0 400 400'>
      { renderRestNote(musicalSymbol)}
    </svg >
  );
};

const Draw = ({ musicalSymbol, pianoKey, noteType, noteModifier }) => {

  return (
    <svg style={{ marginLeft: '50px' }} height={STAFF_HEIGHT} width={STAFF_WIDTH} viewBox='0 0 100 100'>
      <g transform="translate(25,-20)">
        <g transform="scale(0.22) translate(10,134)">
          {/* {renderPianoKey('F5', 'quarter-note', {})} */}
          {renderPianoChord(['F4', 'A4', 'C5'], 'half-note', {})}
          {/* {musicalSymbol ? renderMusicSymbol(musicalSymbol) : renderPianoKey(pianoKey, noteType)} */}
        </g>
        <line className="staff-line" x1={25} x2={25} y1={50} y2={150} />
        {StaffLines}
      </g>
    </svg>
  );
};

export default Draw;