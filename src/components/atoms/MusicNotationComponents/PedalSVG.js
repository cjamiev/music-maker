

import React from 'react';

export const PedalSVG = ({ transform, conditions = {} }) => {
  const { showPedalStart, showPedalContinue, showPedalQuickRelease, showPedalEnd } = conditions;

  return (
    <g data-testid="component-pedal" aria-label="pedal" transform={transform} >
      {showPedalStart && <g data-testid="condition-pedal-start" aria-label="pedal start" transform="matrix(0.98982022,0,0,1,-91.97415,79.212368)" >
        <rect data-testid="rect1607" className="svg__10" width="19.066965" height="0.62309307" x="167.50221" y="114.50225" />
        <rect data-testid="rect1610" className="svg__10" width="4.2280054" height="0.4762491" x="-114.58158" y="167.50221" transform="rotate(-90)" />
      </g>}
      {showPedalContinue && <rect data-testid="condition-pedal-continue" className="svg__10" aria-label="pedal continue" width="27.78125" height="0.62309307" x="64.822922" y="193.71457" />}
      {showPedalQuickRelease && <path data-testid="condition-pedal-quick-release" className="svg__11" aria-label="pedal quick release" d="m 64.822927,194.02711 h 11.150726 l 2.72942,-5.34889 2.48863,5.34889 h 11.41247" />}
      {showPedalEnd && <g data-testid="condition-pedal-end" aria-label="pedal end" transform="matrix(-0.98982021,0,0,1,249.40124,79.212328)" >
        <rect data-testid="rect1607-3" className="svg__10" width="19.066965" height="0.62309307" x="167.50221" y="114.50225" />
        <rect data-testid="rect1610-6" className="svg__10" width="4.2280054" height="0.4762491" x="-114.58158" y="167.50221" transform="rotate(-90)" />
      </g>}
    </g>
  );
};

