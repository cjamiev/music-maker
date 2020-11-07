import React from 'react';
import {
  CreateSymbol
} from './Symbol';
import {
  StaffLines,
  StaffLedgerLines,
  getNumberOfHighLedgerLines,
  getNumberOfLowLedgerLines
} from './util';
import './music-symbol-generator.css';

const STAFF_WIDTH = 50;
const STAFF_HEIGHT = 150;

const MusicSymbolGenerator = ({ symbol }) => {
  const renderSymbol = CreateSymbol(symbol);

  const staffAboveCount = getNumberOfHighLedgerLines(symbol.key);
  const staffBelowCount = getNumberOfLowLedgerLines(symbol.key);

  return (
    <svg height={STAFF_HEIGHT} width={STAFF_WIDTH}>
      {renderSymbol}
      {staffAboveCount && StaffLedgerLines(staffAboveCount, true)}
      {StaffLines}
      {staffBelowCount && StaffLedgerLines(staffBelowCount)}
    </svg>
  );
};

export default MusicSymbolGenerator;