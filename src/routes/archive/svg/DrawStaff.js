import React from 'react';

const tripleLowLedgerNotes = ['E3', 'F3'];
const doubleLowLedgerNotes = ['G3', 'A3'];
const singleLowLedgerNotes = ['B3', 'C4'];
const singleHighLedgerNotes = ['A5', 'B5'];
const doubleHighLedgerNotes = ['C6', 'D6'];
const tripleHighLedgerNotes = ['E6', 'F6'];
const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const STAFF_WIDTH = 50;
const X_ORIGIN = 0;
const Y_ORIGIN = 75;
const STAFF_LINE_DISTANCE = 10;
const STAFF_LINE_COUNT = 5;
import './draw-staff.css';

const calculateHeightAbove = i => Y_ORIGIN - (i + ONE) * STAFF_LINE_DISTANCE;
const calculateHeightBelow = i => (i + STAFF_LINE_COUNT) * STAFF_LINE_DISTANCE + Y_ORIGIN;

export const StaffLines = Array.from({ length: STAFF_LINE_COUNT }, (_, i) => <line key={i} className="staff-line" x1={X_ORIGIN} x2={STAFF_WIDTH} y1={i * STAFF_LINE_DISTANCE + Y_ORIGIN} y2={i * STAFF_LINE_DISTANCE + Y_ORIGIN} />);

export const StaffLedgerLines = (pianoKey) => {
  const staffAboveCount = getNumberOfHighLedgerLines(pianoKey);
  const staffBelowCount = getNumberOfLowLedgerLines(pianoKey);
  const count = staffAboveCount > ZERO ? staffAboveCount : staffBelowCount;
  const calculateHeight = staffAboveCount > ZERO ? calculateHeightAbove : calculateHeightBelow;

  if (count) {
    return (
      Array.from({ length: count }, (_, i) => <line key={i} className="staff-line" x1={X_ORIGIN + STAFF_WIDTH / TWO - STAFF_LINE_DISTANCE} x2={STAFF_WIDTH / TWO + STAFF_LINE_DISTANCE} y1={calculateHeight(i)} y2={calculateHeight(i)} />)
    );
  }
  return null;
};

export const getNumberOfHighLedgerLines = (key) => {
  if (tripleHighLedgerNotes.find(entry => key.includes(entry))) {
    return THREE;
  }
  else if (doubleHighLedgerNotes.find(entry => key.includes(entry))) {
    return TWO;
  }
  else if (singleHighLedgerNotes.find(entry => key.includes(entry))) {
    return ONE;
  }
};

export const getNumberOfLowLedgerLines = (key) => {
  if (tripleLowLedgerNotes.find(entry => key.includes(entry))) {
    return THREE;
  }
  else if (doubleLowLedgerNotes.find(entry => key.includes(entry))) {
    return TWO;
  }
  else if (singleLowLedgerNotes.find(entry => key.includes(entry))) {
    return ONE;
  }
};