

import React from 'react';

export const DynamicsSVG = ({ transform, conditions = {} }) => {
  const { showCrescendo, showDecrescendo, showDynamicText } = conditions;

  return (
    <g data-testid="component-dynamics" aria-label="dynamics" transform={transform} >
      { showCrescendo && <path data-testid="crescendo" className="svg__14" aria-label="condition crescendo" d="m 106.48414,138.72048 -27.740317,2.75466 27.740317,2.51164" /> }
      { showDecrescendo && <path data-testid="decrescendo" className="svg__15" aria-label="condition decrescendo" d="m 78.656603,138.72048 27.740327,2.75466 -27.740327,2.51164" /> }
      { showDynamicText && <text data-testid="dynamic-text" className="svg__16" aria-label="condition dynamic text" x="88.241692" y="126.39545" transform="scale(0.87702874,1.1402135)" >
        <tspan data-testid="tspan1893" className="svg__17" x="88.241692" y="126.39545" >f
        </tspan>
      </text> }
    </g>
  );
};

