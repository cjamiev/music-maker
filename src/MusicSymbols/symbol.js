import React, { Fragment } from 'react';
import './symbol.css';

const symbolsAvailable = ['SymbolMeasureBar', 'SymbolEndBar', 'SymbolLeftRepeatBar', 'SymbolRightRepeatBar'];

const CreateSymbol = (index) => {
  if (index === 0) {
    return (
      <Fragment>
        <line x1={25} x2={25} y1={50} y2={90} className='single-bar-line' />
      </Fragment>
    );
  }
  else if (index === 1) {
    return (
      <Fragment>
        <line x1={45} x2={45} y1={50} y2={90} className='single-bar-line' />
        <line x1={48} x2={48} y1={50} y2={90} className='double-bar-line' />
      </Fragment>
    );
  }
  else if (index === 2) {
    return (
      <Fragment>
        <line x1={2} x2={2} y1={50} y2={90} className='double-bar-line' />
        <line x1={5} x2={5} y1={50} y2={90} className='single-bar-line' />
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
        <line x1={45} x2={45} y1={50} y2={90} className='single-bar-line' />
        <line x1={48} x2={48} y1={50} y2={90} className='double-bar-line' />
      </Fragment>
    );
  }
};

export const symbolSelector = symbolsAvailable.map((item, index) => {
  return { [item]: CreateSymbol(index) };
}).reduce((current, total) => {
  return { ...total, ...current };
}, {});