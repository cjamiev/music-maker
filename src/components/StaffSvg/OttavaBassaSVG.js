

import React from 'react';

export const OttavaBassaBarSVG = ({ transform }) => {
  return (
    <path data-testid="subcomponent-ottava-bassa-bar" className="svg__28" transform={transform} aria-label="ottava bassa bar" d="M 76.201673,197.89654 H 120.51651" />
  );
};

export const OttavaBassaEndSVG = ({ transform }) => {
  return (
    <path data-testid="subcomponent-ottava-bassa-end" transform={transform} className="svg__29" aria-label="ottava bassa end" d="m 120.17648,193.26834 c 0,3.68173 0,3.68173 0,3.68173" />
  );
};

export const OttavaBassaTextSVG = ({ transform }) => {
  return (
    <text data-testid="subcomponent-ottava-bassa-text" transform={transform} className="svg__18" aria-label="ottava bassa text" x="73.599045" y="173.80505" transform="scale(0.87702874,1.1402135)" >
      <tspan data-testid="tspan1969-6" className="svg__19" x="73.599045" y="173.80505" >8vb
      </tspan>
    </text>
  );
};

export const OttavaBassaSVG = ({ transform, subcomponents = [], conditions = {} }) => {
  const renderData = subcomponents.map(item => {
    const SvgComponent = item.component;
    const key = SvgComponent.name + item.transform + JSON.stringify(item.subcomponents);

    return <SvgComponent key={key} transform={item.transform} conditions={item.conditions} subcomponents={item.subcomponents} />;
  });

  return (
    <g data-testid="component-ottava-bassa" aria-label="ottava bassa" transform={transform} >
      {renderData}
    </g>
  );
};

