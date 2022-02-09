import React from 'react';

const OttavaIcon = ({
  showOttavaAltaStart,
  showOttavaAltaContinue,
  showOttavaAltaEnd,
  showOttavaBassaStart,
  showOttavaBassaContinue,
  showOttavaBassaEnd,
  value
}) => {
  return (
    <g>
      {showOttavaAltaStart && <text
        data-testid="element-ottava-alta-start"
        className="musicicon__text"
        x="3.7"
        y="18.756828"
        transform="scale(1.97702874,1.8402135)"
      >
        <tspan
          data-testid="tspan1969"
          className="musicicon__text"
          x="3.7"
          y="18.756828"
        >
          8va
        </tspan>
      </text>}
      {showOttavaBassaStart && <text
        data-testid="element-ottava-bassa-start"
        className="musicicon__text"
        x="3.7"
        y="18.756828"
        transform="scale(1.97702874,1.8402135)"
      >
        <tspan
          data-testid="tspan1969-6-0"
          className="musicicon__text"
          x="3.7"
          y="18.756828"
        >
          8vb
        </tspan>
      </text>}
      {(showOttavaAltaContinue || showOttavaBassaContinue) && <path
        className="musicicon__ottava-continue"
        d="m 0.635174,26.458334 h 51.64632"
        data-testid="element-ottava-continue"
      />}
      {(showOttavaAltaEnd || showOttavaBassaEnd) &&<path
        className="musicicon__ottava-end"
        d="m 22.458334,10.531143 c 0,31.854382 0,31.854382 0,31.854382"
        data-testid="element-ottava-end"
      />}
      { value &&
        <text
          x="12.684287"
          y="28.169075"
          data-testid="ottava-text"
          className="musicicon__text"
          transform="scale(0.87702874,1.1402135)">
          <tspan
            role="line"
            data-testid="ottava-text"
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

export default OttavaIcon;