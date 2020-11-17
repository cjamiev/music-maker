import React from 'react';
import './piano-note.css';

const BASE_OUTER_PART_WHOLE_NOTE_CX = '-87.805458';
const BASE_OUTER_PART_WHOLE_NOTE_CY = '-257.27422';
const BASE_INNER_PART_WHOLE_NOTE_CX = '-27.653008';
const BASE_INNER_PART_WHOLE_NOTE_CY = '266.86511';

export const WholeNote = ({ xshift = 0, yshift = 0 }) => {
  const translate = `translate(${xshift},${yshift})`;

  return (
    <g transform={translate}>
      <ellipse
        className='note-head'
        cx={BASE_OUTER_PART_WHOLE_NOTE_CX}
        cy={BASE_OUTER_PART_WHOLE_NOTE_CY}
        rx='33.469791'
        ry='23.018749'
        transform='rotate(176.96693)' />
      <ellipse
        className='whitewhole-notehead'
        cx={BASE_INNER_PART_WHOLE_NOTE_CX}
        cy={BASE_INNER_PART_WHOLE_NOTE_CY}
        rx='14.159471'
        ry='20.443333'
        transform='matrix(0.81850018,-0.57450628,0.47157607,0.88182539,0,0)' />
    </g>
  );
};
