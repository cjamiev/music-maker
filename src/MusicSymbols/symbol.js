import React, { Fragment } from 'react';
import './symbol.css';

const NOTE_HEAD_X_POSITION = -30;
const NOTE_HEAD_Y_POSITION = 123.5;
const X_RADIUS = 5.5;
const Y_RADIUS = 3.5;
const NOTE_HEAD_X_INCREMENT = 2.10;
const NOTE_HEAD_Y_INCREMENT = 4.5;
const STEM_X_POSITION = 30.5;
const STEM_HEIGHT = 30;
const DOTTED_NOTE_X_POSITION = 35;
const STAFF_LINE_DISTANCE = 10;
const TWO = 2;
const ZERO = 0;
const TOP_STAFF_LINE = 50;
const BOTTOM_STAFF_LINE = 90;
const STAFF_WIDTH = 50;
const keyList = ['E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6', 'D6', 'E6', 'F6'];

const CreateOtherSymbol = (key) => {
  if (key === 'wholerest') {
    return (
      <Fragment>
        <rect x={STAFF_WIDTH / TWO - STAFF_LINE_DISTANCE / TWO} y={TOP_STAFF_LINE + STAFF_LINE_DISTANCE} width={STAFF_LINE_DISTANCE} height={STAFF_LINE_DISTANCE / TWO} className='single-bar-line' />
      </ Fragment >
    );
  }
  else if (key === 'halfrest') {
    return (
      <Fragment>
        <rect x={STAFF_WIDTH / TWO - STAFF_LINE_DISTANCE / TWO} y={TOP_STAFF_LINE + 1.5 * STAFF_LINE_DISTANCE} width={STAFF_LINE_DISTANCE} height={STAFF_LINE_DISTANCE / TWO} className='single-bar-line' />
      </ Fragment >
    );
  }
  else if (key === 'quarterrest') {
    return (
      <Fragment>
        <path id="shape0" fill="#000000" fillRule="evenodd" transform="scale(0.1) translate(225, 550)"
          d="M0 0L82.08 92.16C68.6013 112.301 40.3307 125.045 41.76 152.64L94.32 236.88C76.9654 230.78 65.1809 214.67 49.68 228.96C44.3255 238.959 40.6859 267.262 46.8 294.48L18.72 239.76C14.4851 228.48 17.2066 217.2 24.48 205.92C38.923 200.903 53.5179 195.545 60.48 207.36L0.72 123.12L21.6 89.28C33.3057 74.4 25.7337 59.52 20.88 44.64C12.72 27.84 5.76 12.96 0 0Z" />
      </Fragment>
    );
  }
  else if (key === 'SymbolMeasureBar') {
    return (
      <Fragment>
        <line x1={STAFF_WIDTH / TWO} x2={STAFF_WIDTH / TWO} y1={TOP_STAFF_LINE} y2={BOTTOM_STAFF_LINE} className='single-bar-line' />
      </Fragment>
    );
  }
  else if (key === 'SymbolEndBar') {
    return (
      <Fragment>
        <line x1={45} x2={45} y1={TOP_STAFF_LINE} y2={BOTTOM_STAFF_LINE} className='single-bar-line' />
        <line x1={48} x2={48} y1={TOP_STAFF_LINE} y2={BOTTOM_STAFF_LINE} className='double-bar-line' />
      </Fragment>
    );
  }
  else if (key === 'SymbolLeftRepeatBar') {
    return (
      <Fragment>
        <line x1={2} x2={2} y1={TOP_STAFF_LINE} y2={BOTTOM_STAFF_LINE} className='double-bar-line' />
        <line x1={5} x2={5} y1={TOP_STAFF_LINE} y2={BOTTOM_STAFF_LINE} className='single-bar-line' />
        <circle cx="10" cy="65" r="2.5" className="small-circle" />
        <circle cx="10" cy="75" r="2.5" className="small-circle" />
      </Fragment>
    );
  }
  else {
    return (
      <Fragment>
        <circle cx="40" cy="65" r="2.5" className="small-circle" />
        <circle cx="40" cy="75" r="2.5" className="small-circle" />
        <line x1={45} x2={45} y1={TOP_STAFF_LINE} y2={BOTTOM_STAFF_LINE} className='single-bar-line' />
        <line x1={48} x2={48} y1={TOP_STAFF_LINE} y2={BOTTOM_STAFF_LINE} className='double-bar-line' />
      </Fragment>
    );
  }
};

const CreateNote = ({ key, type, dotted, stacatto }) => {
  const count = keyList.findIndex(item => key.includes(item));
  const isWholeNote = type === 'whole';
  const isHalfNote = type === 'half';
  const className = isWholeNote || isHalfNote ? 'note-circle' : 'note-circle circle-filled';
  const xPos = NOTE_HEAD_X_POSITION + NOTE_HEAD_X_INCREMENT * count;
  const yPos = NOTE_HEAD_Y_POSITION - NOTE_HEAD_Y_INCREMENT * count;
  const stemXPos = count > STAFF_LINE_DISTANCE ? STEM_X_POSITION - 11 : STEM_X_POSITION;
  const y1 = count > STAFF_LINE_DISTANCE ? yPos - count * 0.5 + 1.5 : yPos - count * 0.5;
  const y2 = count > STAFF_LINE_DISTANCE ? y1 + STEM_HEIGHT : y1 - STEM_HEIGHT;
  const stem = !isWholeNote && (<line x1={stemXPos} x2={stemXPos} y1={y1} y2={y2} className='note-line' />);
  let dottedYPos = count % TWO === 0 ? (120 - (count - 1) / TWO * STAFF_LINE_DISTANCE) : (120 - (count / TWO * STAFF_LINE_DISTANCE));
  dottedYPos = count > ZERO ? dottedYPos : 125;

  return (
    <Fragment>
      {stem}
      <ellipse cx={xPos} cy={yPos} rx={X_RADIUS} ry={Y_RADIUS} transform='rotate(-25)' className={className} />
      {dotted && <circle cx={DOTTED_NOTE_X_POSITION} cy={dottedYPos} r="2.5" className="small-circle" />}
    </Fragment>
  );
};

export const CreateSymbol = (symbol) => {
  if (symbol.type) {
    return CreateNote(symbol);
  }
  else {
    return CreateOtherSymbol(symbol.key);
  }
};