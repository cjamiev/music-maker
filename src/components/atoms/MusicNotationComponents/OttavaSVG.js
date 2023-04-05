

import React from 'react';

export const OttavaSVG = ({ transform, conditions = {} }) => {
  const { showOttavaAltaStart, showOttavaAltaContinue, showOttavaAltaEnd, showOttavaBassaStart, showOttavaBassaContinue, showOttavaBassaEnd } = conditions;

  return (
    <g data-testid="component-ottava" aria-label="ottava" transform={transform} >
      {showOttavaAltaStart && <text data-testid="condition-ottava-alta-start" className="svg__18" aria-label="ottava alta start" x="73.59903" y="81.794388" transform="scale(0.87702874,1.1402135)" >
        <tspan data-testid="tspan1969" className="svg__19" x="73.59903" y="81.794388" >8va
        </tspan>
      </text>}
      {showOttavaAltaContinue && <path data-testid="condition-ottava-alta-continue" className="svg__28" aria-label="ottava alta continue" d="M 49.201653,92.984741 H 93.51649" />}
      {showOttavaAltaEnd && <path data-testid="condition-ottava-alta-end" className="svg__29" aria-label="ottava alta end" d="m 65.87646,93.859791 c 0,3.68173 0,3.68173 0,3.68173" />}
      {showOttavaBassaStart && <text data-testid="condition-ottava-bassa-start" className="svg__18" aria-label="ottava bassa start" x="73.599045" y="173.80505" transform="scale(0.87702874,1.1402135)" >
        <tspan data-testid="tspan1969-6" className="svg__19" x="73.599045" y="173.80505" >8vb
        </tspan>
      </text>}
      {showOttavaBassaContinue && <path data-testid="condition-ottava-bassa-continue" className="svg__28" aria-label="ottava bassa continue" d="M 49.201653,197.89654 H 93.51649" /> }
      {showOttavaBassaEnd && <path data-testid="condition-ottava-bassa-end" className="svg__29" aria-label="ottava bassa end" d="m 65.87646,193.26834 c 0,3.68173 0,3.68173 0,3.68173" />}
    </g>
  );
};
