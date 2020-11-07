import React from 'react';
import {
  quarterNoteSelector,
  halfNoteSelector,
  wholeNoteSelector
} from './Note';
import {
  symbolSelector
} from './symbol';
import {
  StaffLines,
  StaffLedgerLines,
  getNumberOfHighLedgerLines,
  getNumberOfLowLedgerLines
} from './util';
import './music-symbol-generator.css';

const STAFF_WIDTH = 50;
const STAFF_HEIGHT = 150;

const SymbolAndStaffLines = ({ symbols }) => {
  const renderSymbol = symbols.map(item => {
    if (item.includes('whole')) {
      return wholeNoteSelector[item];
    }
    else if (item.includes('half')) {
      return halfNoteSelector[item];
    }
    else if (item.includes('quarter')) {
      return quarterNoteSelector[item];
    }
    else if (item.includes('Symbol')) {
      return symbolSelector[item];
    }
  });

  const staffAboveCount = getNumberOfHighLedgerLines(symbols);
  const staffBelowCount = getNumberOfLowLedgerLines(symbols);

  return (
    <svg height={STAFF_HEIGHT} width={STAFF_WIDTH}>
      {renderSymbol}
      {staffAboveCount && StaffLedgerLines(staffAboveCount, true)}
      {StaffLines}
      {staffBelowCount && StaffLedgerLines(staffBelowCount)}
    </svg>
  );
};

const MusicSymbolGenerator = ({ symbols }) => {
  return (<SymbolAndStaffLines symbols={symbols} />);
};

export default MusicSymbolGenerator;