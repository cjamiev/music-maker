import React, { Fragment } from 'react';
import './note.css';

const NOTE_HEAD_X_POSITION = -30;
const NOTE_HEAD_Y_POSITION = 123.5;
const X_RADIUS = 5.5;
const Y_RADIUS = 3.5;
const NOTE_HEAD_X_INCREMENT = 2.10;
const NOTE_HEAD_Y_INCREMENT = 4.5;
const STEM_X_POSITION = 30.5;
const STEM_HEIGHT = 30;
const notesAvailable = ['E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6', 'D6', 'E6', 'F6'];

const createQuarterNote = (count) => {
  const xPos = NOTE_HEAD_X_POSITION + NOTE_HEAD_X_INCREMENT * count;
  const yPos = NOTE_HEAD_Y_POSITION - NOTE_HEAD_Y_INCREMENT * count;
  const stemXPos = count > 10 ? STEM_X_POSITION - 11 : STEM_X_POSITION;
  const y1 = count > 10 ? yPos - count * 0.5 + 1.5 : yPos - count * 0.5;
  const y2 = count > 10 ? y1 + STEM_HEIGHT : y1 - STEM_HEIGHT;

  return (
    <Fragment>
      <line x1={stemXPos} x2={stemXPos} y1={y1} y2={y2} className="note-line" />
      <ellipse cx={xPos} cy={yPos} rx={X_RADIUS} ry={Y_RADIUS} transform="rotate(-25)" className="note-circle" />
    </Fragment>
  );
};

const noteSelector = notesAvailable.map((item, index) => {
  return { [item]: createQuarterNote(index) };
}).reduce((current, total) => {
  return { ...total, ...current };
}, {});

export default noteSelector;