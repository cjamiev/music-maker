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
const ONE = 1;
const ZERO = 0;
const TOP_STAFF_LINE = 50;
const BOTTOM_STAFF_LINE = 90;
const STAFF_WIDTH = 50;
const keyList = ['E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6', 'D6', 'E6', 'F6'];
const SYMBOL_ONE = 1.5;
const SYMBOL_TWO = 11;
const SYMBOL_THREE = 0.5;
const SYMBOL_FOUR = 120;
const SYMBOL_FIVE = 125;

const CreateNote = ({ key, type, dotted, stacatto }) => {
  const count = keyList.findIndex(item => key.includes(item));
  const isWholeNote = type === 'whole';
  const isHalfNote = type === 'half';
  const className = isWholeNote || isHalfNote ? 'note-circle' : 'note-circle circle-filled';
  const xPos = NOTE_HEAD_X_POSITION + NOTE_HEAD_X_INCREMENT * count;
  const yPos = NOTE_HEAD_Y_POSITION - NOTE_HEAD_Y_INCREMENT * count;
  const stemXPos = count > STAFF_LINE_DISTANCE ? STEM_X_POSITION - SYMBOL_TWO : STEM_X_POSITION;
  const y1 = count > STAFF_LINE_DISTANCE ? yPos - count * SYMBOL_THREE + SYMBOL_ONE : yPos - count * SYMBOL_THREE;
  const y2 = count > STAFF_LINE_DISTANCE ? y1 + STEM_HEIGHT : y1 - STEM_HEIGHT;
  const stem = !isWholeNote && (<line x1={stemXPos} x2={stemXPos} y1={y1} y2={y2} className='note-line' />);
  let dottedYPos = count % TWO === ZERO ? (SYMBOL_FOUR - (count - ONE) / TWO * STAFF_LINE_DISTANCE) : (SYMBOL_FOUR - (count / TWO * STAFF_LINE_DISTANCE));
  dottedYPos = count > ZERO ? dottedYPos : SYMBOL_FIVE;

  return (
    <Fragment>
      {stem}
      <ellipse cx={xPos} cy={yPos} rx={X_RADIUS} ry={Y_RADIUS} transform='rotate(-25)' className={className} />
      {dotted && <circle cx={DOTTED_NOTE_X_POSITION} cy={dottedYPos} r="2.5" className="small-circle" />}
    </Fragment>
  );
};

export const CreateSymbol = (symbol) => {
  return CreateNote(symbol);
};