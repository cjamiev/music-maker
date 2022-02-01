import React from 'react';

const OttavaIcon = ({
  showOttava,
  showOttavaBassa
}) => {
  return (
    <g
    >
      {showOttavaBassa && <text
        x="14.411576"
        y="32.556782"
        data-testdata-testid="ottava-bassa"
        transform="scale(0.87702874,1.1402135)"
      >
        <tspan
          className="musicicon__ottava"
          x="14.411576"
          y="32.556782"
        >
          8vb
        </tspan>
      </text>}
      {showOttava && <text
        x="14.39401"
        y="30.603458"
        data-testdata-testid="ottava"
        transform="scale(0.87702874,1.1402135)"
      >
        <tspan
          className="musicicon__ottava"
          x="14.39401"
          y="30.603458"
        >
          8va
        </tspan>
      </text>}
    </g>
  );
};

export default OttavaIcon;