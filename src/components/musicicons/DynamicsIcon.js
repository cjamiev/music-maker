import React from 'react';

const CrescendoIcon = ({
  showCrescendo,
  showDecrescendo,
  value
}) => {
  return (
    <g>
      {showCrescendo && <path
        className="musicicon__crescendo"
        d="m 51.221164,21.757146 -49.52566,4.917971 49.52566,4.48411"
        data-testid="crescendo"
      />}
      {showDecrescendo && <path
        className="musicicon__crescendo"
        d="m 1.695489,21.757149 49.52569,4.917964 -49.52567,4.484111"
        data-testid="decrescendo"
      />}
      { value &&
        <text
          x="16.918215"
          y="28.169075"
          data-testid="condition-dynamic-text"
          className="musicicon__dynamic-text"
          transform="scale(0.87702874,1.1402135)">
          <tspan
            role="line"
            data-testid="dynamic-text"
            className="musicicon__dynamic-text"
            x="16.918215"
            y="28.169075"
          >
            {value}
          </tspan>
        </text>
      }
    </g>
  );
};

export default CrescendoIcon;