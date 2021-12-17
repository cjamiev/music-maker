

import React from 'react';

export const PedalQuickReleaseSVG = ({ transform }) => {
  return (
    <path data-testid="subcomponent-pedal-quick-release" transform={transform} className="svg__11" aria-label="pedal quick release" d="m 64.822927,194.02711 h 11.150726 l 2.72942,-5.34889 2.48863,5.34889 h 11.41247" />
  );
};

export const PedalContinueSVG = ({ transform }) => {
  return (
    <rect data-testid="subcomponent-pedal-continue" transform={transform} className="svg__10" aria-label="pedal continue" width="27.78125" height="0.62309307" x="64.822922" y="193.71457" />
  );
};

export const PedalStartSVG = ({ transform }) => {
  return (
    <g data-testid="subcomponent-pedal-start" transform={transform} aria-label="pedal start" transform="matrix(0.98982022,0,0,1,-100.97415,79.212368)" >
      <rect data-testid="rect1607" className="svg__10" width="28.066965" height="0.62309307" x="167.50221" y="114.50225" />
      <rect data-testid="rect1610" className="svg__10" width="4.2280054" height="0.4762491" x="-114.58158" y="167.50221" transform="rotate(-90)" />
    </g>
  );
};

export const PedalEndSVG = ({ transform }) => {
  return (
    <g data-testid="subcomponent-pedal-end" transform={transform} aria-label="pedal end" transform="matrix(-0.98982021,0,0,1,258.40124,79.212328)" >
      <rect data-testid="rect1607-3" className="svg__10" width="28.066965" height="0.62309307" x="167.50221" y="114.50225" />
      <rect data-testid="rect1610-6" className="svg__10" width="4.2280054" height="0.4762491" x="-114.58158" y="167.50221" transform="rotate(-90)" />
    </g>
  );
};

export const PedalSVG = ({ transform, subcomponents = [] }) => {
  const renderData = subcomponents.map(item => {
    const SvgComponent = item.component;
    const key = SvgComponent.name + item.transform + JSON.stringify(item.subcomponents);

    return <SvgComponent key={key} transform={item.transform} conditions={item.conditions} subcomponents={item.subcomponents} />;
  });

  return (
    <g data-testid="component-pedal" aria-label="pedal" transform={transform} >
      {renderData}
    </g>
  );
};

