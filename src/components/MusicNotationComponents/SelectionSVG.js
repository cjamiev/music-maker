import React from 'react';

export const SelectionSVG = ({ transform, conditions = {} }) => {
  return (
    <g data-testid="selection" transform={transform} aria-label="selection" >
      <rect
        data-testid="selection-top"
        className="svg--selected-color"
        width="27.192894"
        height="0.17916849"
        x="65.119415"
        y="76.970314"
      />
      <rect
        data-testid="selection-left"
        className="svg--selected-color"
        width="0.17916849"
        height="76.38"
        x="65.119415"
        y="76.970314"
      />
      <rect
        data-testid="selection-right"
        className="svg--selected-color"
        width="0.17916849"
        height="76.38"
        x="92.31"
        y="76.970314"
      />
      <rect
        data-testid="selection-bottom"
        className="svg--selected-color"
        width="27.192894"
        height="0.17916849"
        x="65.119415"
        y="153.34975"
      />
    </g>
  );
};