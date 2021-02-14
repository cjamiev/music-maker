import React from 'react';
import { WholeNote } from './WholeNote';
import './piano-note.css';

const ZERO = 0;

const BASE_NOTE_HEAD_CX = '1.9447203';
const BASE_NOTE_HEAD_CY = '272.65167';
const BASE_INNER_HALF_NOTE_HEAD_X = '-17.261833';
const BASE_INNER_HALF_NOTE_HEAD_Y = '260.5632';
const BASE_FLIPPED_NOTE_HEAD_CX = '-52.021908';
const BASE_FLIPPED_NOTE_HEAD_CY = '-144.20645';
const BASE_FLIPPED_INNER_HALF_NOTE_HEAD_X = '27.261833';
const BASE_FLIPPED_INNER_HALF_NOTE_HEAD_Y = '131.5632';

export const NoteHead = ({ type, xshift = ZERO, yshift = ZERO }) => {
  const translate = `translate(${xshift},${yshift})`;

  if (type === 'whole-note') {
    return <WholeNote xshift={xshift} yshift={yshift} />;
  }
  if (type === 'half-note') {
    return (
      <g transform={translate}>
        <ellipse
          className="note-head"
          cx={BASE_NOTE_HEAD_CX}
          cy={BASE_NOTE_HEAD_CY}
          rx="33.469791"
          ry="23.018749"
          transform="rotate(-21.66339)" />
        <rect
          className="halfnote-whitehead"
          x={BASE_INNER_HALF_NOTE_HEAD_X}
          y={BASE_INNER_HALF_NOTE_HEAD_Y}
          ry='11.92138'
          width='62.962799'
          height='23.84276'
          transform='matrix(0.93550633,-0.35330994,0.32685128,0.94507579,0,0)' />
      </g>
    );
  }
  return (
    <g transform={translate}>
      <ellipse
        className="note-head"
        cx={BASE_NOTE_HEAD_CX}
        cy={BASE_NOTE_HEAD_CY}
        rx="33.469791"
        ry="23.018749"
        transform="rotate(-21.66339)" />
    </g>
  );
};

export const FlippedNoteHead = ({ type, xshift, yshift }) => {
  const translate = `translate(${xshift},${yshift})`;

  if (type === 'whole-note') {
    return <WholeNote xshift={xshift} yshift={yshift} />;
  }
  else if (type === 'half-note') {
    return (
      <g transform={translate}>
        <ellipse
          className="note-head"
          cx={BASE_FLIPPED_NOTE_HEAD_CX}
          cy={BASE_FLIPPED_NOTE_HEAD_CY}
          rx="33.469791"
          ry="23.018749"
          transform="rotate(158.33661)" />
        <rect
          className="halfnote-whitehead"
          width='62.962799'
          height='23.84276'
          x={BASE_FLIPPED_INNER_HALF_NOTE_HEAD_X}
          y={BASE_FLIPPED_INNER_HALF_NOTE_HEAD_Y}
          ry='11.92138'
          transform='matrix(0.93550633,-0.35330994,0.32685128,0.94507579,0,0)' />
      </g>
    );
  }

  return (
    <g transform={translate}>
      <ellipse
        className="note-head"
        cx={BASE_FLIPPED_NOTE_HEAD_CX}
        cy={BASE_FLIPPED_NOTE_HEAD_CY}
        rx="33.469791"
        ry="23.018749"
        transform="rotate(158.33661)" />
    </g>
  );
};