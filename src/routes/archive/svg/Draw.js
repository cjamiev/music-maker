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
  StaffLines,
  StaffLedgerLines,
  getNumberOfHighLedgerLines,
  getNumberOfLowLedgerLines
} from './DrawStaff';

const keyPositions = [
  'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2',
  'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3',
  'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4',
  'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5',
  'C6', 'D6', 'E6', 'F6', 'G6', 'A6', 'B6'
];

const STAFF_WIDTH = '300px';
const STAFF_HEIGHT = '300px';
const DOTTED_NOTE_X_POSITION = 155;
const STAFF_LINE_DISTANCE = 10;
const ZERO = 0;
const ONE = 1;
const TWO = 2;
const FLIP_NOTE_INDEX = 19;
const NOTE_MODIFIER_ONE = -22.75;
const NOTE_MODIFIER_TWO = 23;
const NOTE_MODIFIER_THREE = 17;
const NOTE_MODIFIER_FOUR = -11.125;
const NOTE_MODIFIER_FIVE = -15;
const NOTE_MODIFIER_SIX = 9;
const NOTE_MODIFIER_SEVEN = 435;
const NOTE_MODIFIER_EIGHT = 46;
const NOTE_MODIFIER_NINE = -22.25;
const NOTE_MODIFIER_TEN = 50;
const NOTE_MODIFIER_ELEVEN = 10;

const renderNote = (noteType, keyIndex) => {
  const shouldFlip = keyIndex > FLIP_NOTE_INDEX ? true : false;

  const xshift = 0;
  const yshift = shouldFlip && noteType !== 'whole-note' ? NOTE_MODIFIER_ONE * (keyIndex - NOTE_MODIFIER_TWO) : NOTE_MODIFIER_ONE * (keyIndex - NOTE_MODIFIER_THREE);

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
  const flatYshift = NOTE_MODIFIER_FOUR * (keyIndex - NOTE_MODIFIER_THREE);
  const sharpYshift = NOTE_MODIFIER_FIVE * (keyIndex - NOTE_MODIFIER_THREE);
  const naturalYshift = NOTE_MODIFIER_FIVE * (keyIndex - NOTE_MODIFIER_THREE);

  return (
    <Fragment>
      {noteModifier.accidental === 'flat' && <Flat yshift={flatYshift} />}
      {noteModifier.accidental === 'sharp' && <Sharp yshift={sharpYshift} />}
      {noteModifier.accidental === 'natural' && <Natural yshift={naturalYshift} />}
      {noteModifier.fermata && <Fermata />}
      {noteModifier.accent && <Accent />}
    </Fragment>
  );
};

const renderDot = (keyIndex) => {
  let dottedYPos = (keyIndex - NOTE_MODIFIER_SIX) % TWO === ZERO ? (NOTE_MODIFIER_SEVEN - ((keyIndex - NOTE_MODIFIER_SIX) / TWO * NOTE_MODIFIER_EIGHT)) : (NOTE_MODIFIER_SEVEN - (keyIndex - NOTE_MODIFIER_ELEVEN) / TWO * NOTE_MODIFIER_EIGHT);
  dottedYPos = keyIndex - NOTE_MODIFIER_SIX > ZERO ? dottedYPos : NOTE_MODIFIER_SEVEN;

  return (
    <Fragment>
      {<circle cx={DOTTED_NOTE_X_POSITION} cy={dottedYPos} r="6" className="small-circle" />}
    </Fragment>
  );
};

const renderPianoKey = (pianoKey, noteType, noteModifier) => {
  const naturalKey = pianoKey.replace('#', '');
  const keyIndex = keyPositions.findIndex(key => key === naturalKey);
  const isDotted = noteType.includes('dotted');

  return (
    <Fragment>
      {renderNote(noteType.replace('dotted-', ''), keyIndex)}
      {noteModifier && renderNoteModifier(noteModifier, keyIndex)}
      {isDotted && renderDot(keyIndex)}
    </Fragment>
  );
};

const renderPianoChord = (pianoKeys, type, noteModifier) => {
  const isDotted = type.includes('dotted');
  const noteType = type.replace('dotted-', '');
  const naturalKeys = pianoKeys.map(key => key.replace('#', ''));
  const keyIndicies = naturalKeys.map(naturalKey => keyPositions.findIndex(key => key === naturalKey)).sort();
  const notes = keyIndicies.map(keyIndex => {
    const shouldFlip = keyIndex > FLIP_NOTE_INDEX ? true : false;
    const xshift = 0;
    const yshift = shouldFlip && noteType !== 'whole-note' ? NOTE_MODIFIER_ONE * (keyIndex - NOTE_MODIFIER_TWO) : NOTE_MODIFIER_ONE * (keyIndex - NOTE_MODIFIER_THREE);
    if (shouldFlip) {
      return (<FlippedNoteHead type={noteType} xshift={xshift} yshift={yshift} />);
    }
    return (<NoteHead key={keyIndex} type={noteType} xshift={xshift} yshift={yshift} />);
  });

  const shouldFlip = keyIndicies[ZERO] > FLIP_NOTE_INDEX ? true : false;
  const stemXShift = 0;
  const stemYShift = shouldFlip ? NOTE_MODIFIER_NINE * (keyIndicies[ZERO] - NOTE_MODIFIER_TWO) : NOTE_MODIFIER_NINE * (keyIndicies[ZERO] - NOTE_MODIFIER_THREE);
  return (
    <Fragment>
      {notes}
      {<NoteStem type={noteType} xshift={stemXShift} yshift={stemYShift - NOTE_MODIFIER_TEN} heightShift={NOTE_MODIFIER_TEN} />}
      {<NoteFlag type={noteType} xshift={stemXShift} yshift={stemYShift} />}
      {renderNoteModifier(noteModifier, keyIndicies[ONE])}
      {isDotted && renderDot(keyIndicies[ONE])}
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

const renderStaffLines = (pianoKey) => {
  return (
    <Fragment>
      {StaffLines}
      {StaffLedgerLines(pianoKey)}
    </Fragment>
  );
};

const Draw = ({ musicalSymbol, pianoKey, noteType, noteModifier }) => {
  return (
    <svg style={{ marginLeft: '50px', border: '1px solid black' }} height={STAFF_HEIGHT} width={STAFF_WIDTH} viewBox='0 0 150 150'>
      <g transform="translate(50,-20)">
        <g transform="scale(0.22) translate(10,250)">
          {musicalSymbol ? renderMusicSymbol(musicalSymbol) : renderPianoKey(pianoKey, noteType, noteModifier) }
        </g>
        <line className="staff-line" x1={25} x2={25} y1={40} y2={145} />
        {renderStaffLines('F6')}
      </g>
    </svg>
  );
};

export default Draw;
/*
 {renderPianoKey('F6', 'dotted-quarter-note', { accidental: 'sharp' })}
 {renderPianoChord(['F4', 'A4'], 'dotted-half-note', { accidental: 'flat' })} }
*/