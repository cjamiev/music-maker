import React from 'react';

const SemicircleArrowIcon = ({ redo }) => {
  const transform = redo
    ? 'matrix(-1.62,0,0,1.62,67.55,-18.33)'
    : 'matrix(1.62,0,0,1.62,-14.64,-18.33)';
  const ariaLabel = redo ? 'redo' : 'undo';

  return (
    <g aria-label={ariaLabel} transform={transform}>
      <path
        className="icon--hollow icon--stroke-three"
        type="arc"
        cx="25.95"
        cy="27.49"
        rx="13.37"
        ry="13.89"
        start="3.45"
        end="1.55"
        arc-type="arc"
        d="M 13.24,23.19 A 13.37,13.89 0 0 1 28.67,13.89 13.37,13.89 0 0 1 39.26,28.81 13.37,13.89 0 0 1 26.15,41.38"
        open
      />
      <path
        className="icon--black"
        d="m 21.18,20.86 c -0.35,-0.26 -0.81,-0.37 -1.27,-0.24 l -6.88,1.95 -0.07,-7.15 c -0.00,-0.80 -0.66,-1.44 -1.46,-1.43 -0.80,0.00 -1.44,0.66 -1.43,1.46 l 0.09,8.95 c 0.00,0.49 0.25,0.92 0.63,1.18 0.35,0.28 0.83,0.40 1.31,0.26 l 8.61,-2.44 c 0.77,-0.21 1.22,-1.02 1.00,-1.79 -0.08,-0.31 -0.27,-0.57 -0.51,-0.75 z"
      />
    </g>
  );
};

export default SemicircleArrowIcon;