

import React from 'react';

export const VoltaBracketTopLineSVG = ({ transform }) => {
  return (
    <rect data-testid="subcomponent-volta-bracket-top-line" transform={transform} className="svg__10" aria-label="volta bracket top line" width="27.78125" height="0.62309307" x="64.822975" y="-87.581062" transform="scale(1,-1)" />
  );
};

export const VoltaBracketEndSVG = ({ transform }) => {
  return (
    <rect data-testid="subcomponent-volta-bracket-end" transform={transform} className="svg__10" aria-label="volta bracket end" width="9.5990849" height="0.46660244" x="-97.100876" y="92.127914" transform="rotate(-90)" />
  );
};

export const VoltaBracketStartSVG = ({ transform }) => {
  return (
    <rect data-testid="subcomponent-volta-bracket-start" transform={transform} className="svg__10" aria-label="volta bracket start" width="9.599082" height="0.4714005" x="87.501732" y="64.822975" transform="matrix(0,1,1,0,0,0)" />
  );
};

export const VoltaBracketSVG = ({ transform, subcomponents = [] }) => {
  const renderData = subcomponents.map(item => {
    const SvgComponent = item.component;
    const key = SvgComponent.name + item.transform + JSON.stringify(item.subcomponents);

    return <SvgComponent key={key} transform={item.transform} conditions={item.conditions} subcomponents={item.subcomponents} />;
  });

  return (
    <g data-testid="component-volta-bracket" aria-label="volta bracket" transform={transform} >
      <text data-testid="element-bracket-number" className="svg__26" aria-label="element bracket number" x="66.596802" y="96.873428" >
        <tspan data-testid="tspan10101" className="svg__27" x="66.596802" y="96.873428" >1.
        </tspan>
      </text>
      {renderData}
    </g>
  );
};

