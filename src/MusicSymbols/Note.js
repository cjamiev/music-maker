import React, { Fragment } from 'react';
import './note.css';

const DOTTED_NOTE_X_POSITION = 35;
const NOTE_HEAD_X_POSITION = -30;
const NOTE_HEAD_Y_POSITION = 123.5;
const X_RADIUS = 5.5;
const Y_RADIUS = 3.5;
const NOTE_HEAD_X_INCREMENT = 2.10;
const NOTE_HEAD_Y_INCREMENT = 4.5;
const STEM_X_POSITION = 30.5;
const STEM_HEIGHT = 30;
const notesAvailable = ['E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6', 'D6', 'E6', 'F6'];

const CreateNote = (count, typeOfNote) => {
  const isWholeNote = typeOfNote.includes('whole');
  const isHalfNote = typeOfNote.includes('half');
  const isDottedNote = typeOfNote.includes('dotted');
  const isStacattoNote = typeOfNote.includes('staccato');
  const className = isWholeNote || isHalfNote ? 'note-circle' : 'note-circle circle-filled';
  const xPos = NOTE_HEAD_X_POSITION + NOTE_HEAD_X_INCREMENT * count;
  const yPos = NOTE_HEAD_Y_POSITION - NOTE_HEAD_Y_INCREMENT * count;
  const stemXPos = count > 10 ? STEM_X_POSITION - 11 : STEM_X_POSITION;
  const y1 = count > 10 ? yPos - count * 0.5 + 1.5 : yPos - count * 0.5;
  const y2 = count > 10 ? y1 + STEM_HEIGHT : y1 - STEM_HEIGHT;
  const stem = !isWholeNote && (<line x1={stemXPos} x2={stemXPos} y1={y1} y2={y2} className='note-line' />);
  let dottedYPos = count % 2 === 0 ? (120 - (count - 1) / 2 * 10) : (120 - (count / 2 * 10));
  dottedYPos = count > 0 ? dottedYPos : 125;

  return (
    <Fragment>
      {stem}
      {isDottedNote && <circle cx={DOTTED_NOTE_X_POSITION} cy={dottedYPos} r="2.5" className="small-circle" />}
      <ellipse cx={xPos} cy={yPos} rx={X_RADIUS} ry={Y_RADIUS} transform='rotate(-25)' className={className} />
    </Fragment>
  );
};

export const dottedQuarterNoteSelector = notesAvailable.map((item, index) => {
  const name = item + 'quarterdotted';
  return { [name]: CreateNote(index, 'quarterdotted') };
}).reduce((current, total) => {
  return { ...total, ...current };
}, {});

export const quarterNoteSelector = notesAvailable.map((item, index) => {
  const name = item + 'quarter';
  return { [name]: CreateNote(index, 'quarter') };
}).reduce((current, total) => {
  return { ...total, ...current };
}, {});

export const dottedHalfNoteSelector = notesAvailable.map((item, index) => {
  const name = item + 'halfdotted';
  return { [name]: CreateNote(index, 'halfdotted') };
}).reduce((current, total) => {
  return { ...total, ...current };
}, {});

export const halfNoteSelector = notesAvailable.map((item, index) => {
  const name = item + 'half';
  return { [name]: CreateNote(index, 'half') };
}).reduce((current, total) => {
  return { ...total, ...current };
}, {});

export const dottedWholeNoteSelector = notesAvailable.map((item, index) => {
  const name = item + 'wholedotted';
  return { [name]: CreateNote(index, 'wholedotted') };
}).reduce((current, total) => {
  return { ...total, ...current };
}, {});

export const wholeNoteSelector = notesAvailable.map((item, index) => {
  const name = item + 'whole';
  return { [name]: CreateNote(index, 'whole') };
}).reduce((current, total) => {
  return { ...total, ...current };
}, {});