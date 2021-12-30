

import React from 'react';

export const TitleSVG = ({ transform, content }) => {
  return (
    <g data-testid="component-title" transform={transform} aria-label="title" >
      <text data-testid="element-name" className="svg__45" aria-label="element name" x="153.98776" y="37.749626" >
        <tspan data-testid="tspan2836" className="svg__45" x="153.98776" y="37.749626" >{content.name}</tspan>
      </text>
      <text data-testid="element-subname" className="svg__46" aria-label="element subname" x="179.65633" y="51.126183" >
        <tspan data-testid="tspan2836-7" className="svg__46" x="179.65633" y="51.126183" >{content.subname}</tspan>
      </text>
      <text data-testid="element-author" className="svg__47" aria-label="element author" x="435.57031" y="75.274078" >
        <tspan data-testid="tspan2858" className="svg__48" x="435.57031" y="75.274078" >{content.author}</tspan>
      </text>
      <text data-testid="element-tempo" className="svg__47" aria-label="element tempo" x="38.667568" y="75.274078" >
        <tspan data-testid="tspan2858-0" className="svg__48" x="38.667568" y="75.274078" >{content.tempo}</tspan>
      </text>
    </g>
  );
};

