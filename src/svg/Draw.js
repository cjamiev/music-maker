import React, { Fragment } from 'react';
import { FlippedNoteHead, NoteHead } from './DrawNote/NoteHead';
import { FlippedNoteStem, NoteStem } from './DrawNote/NoteStem';
import { FlippedNoteFlag, NoteFlag } from './DrawNote/NoteFlag';
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

const renderPianoKey = (pianoKey, noteType, noteModifier) => {
  const naturalKey = pianoKey.replace('#', '');
  const keyIndex = keyPositions.findIndex(key => key === naturalKey);
  const shouldFlip = keyIndex > 19 ? true : false;

  const xshift = 0;
  const yshift = shouldFlip ? -22.25 * (keyIndex - 23) : -22.25 * (keyIndex - 17);
  const flatYshift = -11.125 * (keyIndex - 17);
  const sharpYshift = -15 * (keyIndex - 17);
  const naturalYshift = -15 * (keyIndex - 17);

  return (
    <Fragment>
      {shouldFlip ? <FlippedNoteHead type={noteType} xshift={xshift} yshift={yshift} /> : <NoteHead type={noteType} xshift={xshift} yshift={yshift} />}
      {shouldFlip ? <FlippedNoteStem type={noteType} xshift={xshift} yshift={yshift} /> : <NoteStem type={noteType} xshift={xshift} yshift={yshift} />}
      {shouldFlip ? <FlippedNoteFlag type={noteType} xshift={xshift} yshift={yshift} /> : <NoteFlag type={noteType} xshift={xshift} yshift={yshift} />}
      {noteModifier.flat && <Flat yshift={flatYshift} />}
      {noteModifier.sharp && <Sharp yshift={sharpYshift} />}
      {noteModifier.fermata && <Fermata />}
      {noteModifier.accent && <Accent />}
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
      <g transform="scale(0.22) translate(10,134)">
        {/* {renderPianoKey('B4', 'sixteenth-note')} */}
        {renderPianoKey('B4', 'sixteenth-note', { flat: true })}
      </g>
      <line className="staff-line" x1={25} x2={25} y1={50} y2={150} />
      {StaffLines}
    </svg>
    // <Fragment>
    //   {musicalSymbol ? renderMusicSymbol(musicalSymbol) : renderPianoKey(pianoKey, noteType)}
    // </Fragment >
  );
};

export default Draw;