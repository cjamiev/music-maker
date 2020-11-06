import './svg-creator.css';
import React from 'react';
import noteSelector from './Note';

const tripleLowLedgerNotes = ['E3', 'F3'];
const doubleLowLedgerNotes = ['G3', 'A3'];
const singleLowLedgerNotes = ['B3', 'C4'];
const singleHighLedgerNotes = ['A5', 'B5'];
const doubleHighLedgerNotes = ['C6', 'D6'];
const tripleHighLedgerNotes = ['E6', 'F6'];
const STAFF_WIDTH = 50;
const STAFF_HEIGHT = 150;
const X_ORIGIN = 0;
const Y_ORIGIN = 50;
const STAFF_LINE_DISTANCE = 10;
const STAFF_LINE_COUNT = 5;
const staffLines = Array.from({ length: STAFF_LINE_COUNT }, (_, i) => <line key={i} className="staff-line" x1={X_ORIGIN} x2={STAFF_WIDTH} y1={i * STAFF_LINE_DISTANCE + Y_ORIGIN} y2={i * STAFF_LINE_DISTANCE + Y_ORIGIN} />);
const calculateHeightAbove = i => Y_ORIGIN - (i + 1) * STAFF_LINE_DISTANCE;
const calculateHeightBelow = i => (i + STAFF_LINE_COUNT) * STAFF_LINE_DISTANCE + Y_ORIGIN;

const StaffLedgerLines = (count, above = false) => {
  const calculateHeight = above ? calculateHeightAbove : calculateHeightBelow;

  return (
    Array.from({ length: count }, (_, i) => <line key={i} className="staff-line" x1={X_ORIGIN + STAFF_WIDTH / 2 - 10} x2={STAFF_WIDTH / 2 + 10} y1={calculateHeight(i)} y2={calculateHeight(i)} />)
  );
};

const getNumberOfHighLedgerLines = (notes) => {
  if (notes.find(item => tripleHighLedgerNotes.find(entry => entry === item))) {
    return 3;
  }
  else if (notes.find(item => doubleHighLedgerNotes.find(entry => entry === item))) {
    return 2;
  }
  else if (notes.find(item => singleHighLedgerNotes.find(entry => entry === item))) {
    return 1;
  }
};

const getNumberOfLowLedgerLines = (notes) => {
  if (notes.find(item => tripleLowLedgerNotes.find(entry => entry === item))) {
    return 3;
  }
  else if (notes.find(item => doubleLowLedgerNotes.find(entry => entry === item))) {
    return 2;
  }
  else if (notes.find(item => singleLowLedgerNotes.find(entry => entry === item))) {
    return 1;
  }
};

const CreateNote = ({ notes }) => {
  console.log(notes);
  const noteSVG = notes.map(item => {
    return noteSelector[item];
  });

  const staffAboveCount = getNumberOfHighLedgerLines(notes);
  const staffBelowCount = getNumberOfLowLedgerLines(notes);

  return (
    <svg height={STAFF_HEIGHT} width={STAFF_WIDTH}>
      {noteSVG}
      {staffAboveCount && StaffLedgerLines(staffAboveCount, true)}
      {staffLines}
      {staffBelowCount && StaffLedgerLines(staffBelowCount)}
    </svg>
  );
};

const SVGNoteCreator = ({ notes }) => {
  return (
    <div>
      <CreateNote notes={notes} />
    </div>
  );
};

export default SVGNoteCreator;