

import React from 'react';

export const OttavaAltaBarSVG = ({ transform }) => {
  return (
    <path data-testid="subcomponent-ottava-alta-bar" className="svg__28" transform={transform} aria-label="ottava alta bar" d="M 76.201653,92.984741 H 120.51649" />
  );
};

export const OttavaAltaEndSVG = ({ transform }) => {
  return (
    <path data-testid="subcomponent-ottava-alta-end" className="svg__29" transform={transform} aria-label="ottava alta end" d="m 120.17646,93.859791 c 0,3.68173 0,3.68173 0,3.68173" />
  );
};

export const OttavaAltaTextSVG = ({ transform }) => {
  return (
    <text data-testid="subcomponent-ottava-alta-text" transform={transform} className="svg__18" aria-label="ottava alta text" x="73.59903" y="81.794388" transform="scale(0.87702874,1.1402135)" >
      <tspan data-testid="tspan1969" className="svg__19" x="73.59903" y="81.794388" >8va
      </tspan>
    </text>
  );
};

export const OttavaAltaSVG = ({ transform, subcomponents = [] }) => {
  const renderData = subcomponents.map(item => {
    const SvgComponent = item.component;
    const key = SvgComponent.name + item.transform + JSON.stringify(item.subcomponents);

    return <SvgComponent key={key} transform={item.transform} conditions={item.conditions} subcomponents={item.subcomponents} />;
  });

  return (
    <g data-testid="component-ottava-alta" aria-label="ottava alta" transform={transform} >
      {renderData}
    </g>
  );
};
