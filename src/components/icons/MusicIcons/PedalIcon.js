import React from 'react';

export const PedalIcon = ({
  showPedalStart,
  showPedalContinue,
  showPedalQuickRelease,
  showPedalEnd,
  value
}) => {
  return (
    <g>
      {showPedalStart && <g
        data-testid="pedal-start"
        transform="matrix(1.8531653,0,0,1.8722241,-309.95732,-184.6152)"
      >
        <rect
          width="28.066965"
          height="0.62309307"
          x="167.50221"
          y="114.50225"
        />
        <rect
          width="4.2280054"
          height="0.4762491"
          x="-114.58158"
          y="167.50221"
          transform="rotate(-90)"
        />
      </g>}
      {showPedalContinue && <rect
        data-testid="pedal-continue"
        width="52.012726"
        height="1.1665698"
        x="0.45197108"
        y="28.87505"
      />}
      {showPedalQuickRelease && <path
        transform="translate(0,-1.5)"
        className="musicicon__quick-release"
        d="M 0.45197385,31.837465 H 21.328634 l 5.110086,-10.014321 4.659273,10.014321 h 21.366701"
        data-testid="pedal-quick-release"
      />}
      {showPedalEnd && <g
        data-testid="pedal-end"
        transform="matrix(-1.8531653,0,0,1.8722241,362.87398,-184.6152)"
      >
        <rect
          width="28.066965"
          height="0.62309307"
          x="167.50221"
          y="114.50225"
        />
        <rect
          width="4.2280054"
          height="0.4762491"
          x="-114.58158"
          y="167.50221"
          transform="rotate(-90)"
        />
      </g>}
      { value &&
        <text
          x="12.684287"
          y="28.169075"
          data-testid="pedal-text"
          className="musicicon__text"
          transform="scale(0.87702874,1.1402135)">
          <tspan
            role="line"
            data-testid="pedal-text"
            className="musicicon__text"
            x="12.684287"
            y="28.169075"
          >
            {value}
          </tspan>
        </text>}
    </g>
  );
};
