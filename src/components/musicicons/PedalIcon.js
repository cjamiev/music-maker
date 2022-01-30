import React from 'react';

const PedalIcon = ({
  showPedalStart,
  showPedalContinue,
  showPedalQuickRelease,
  showPedalEnd
}) => {
  return (
    <g>
      {showPedalStart && <g
        data-testid="pedal-start"
        transform="matrix(1.8531653,0,0,1.8722241,-309.95732,-184.6152)"
      >
        <rect
          style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.0392157"
          width="28.066965"
          height="0.62309307"
          x="167.50221"
          y="114.50225"
        />
        <rect
          style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.0392157"
          width="4.2280054"
          height="0.4762491"
          x="-114.58158"
          y="167.50221"
          transform="rotate(-90)"
        />
      </g>}
      {showPedalContinue && <rect
        style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.0392157"
        data-testid="pedal-continue"
        width="52.012726"
        height="1.1665698"
        x="0.45197108"
        y="25.87505"
      />}
      {showPedalQuickRelease && <path
        style="fill:none;stroke:#000000;stroke-width:1.16113;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="M 0.45197385,31.837465 H 21.328634 l 5.110086,-10.014321 4.659273,10.014321 h 21.366701"
        data-testid="pedal-quick-release"
      />}
      {showPedalEnd && <g
        data-testid="pedal-end"
        transform="matrix(-1.8531653,0,0,1.8722241,362.87398,-184.6152)"
      >
        <rect
          style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.0392157"
          width="28.066965"
          height="0.62309307"
          x="167.50221"
          y="114.50225"
        />
        <rect
          style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.0392157"
          width="4.2280054"
          height="0.4762491"
          x="-114.58158"
          y="167.50221"
          transform="rotate(-90)"
        />
      </g>}
    </g>
  );
};

export default PedalIcon;