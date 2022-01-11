

import React from 'react';

export const TitleSVG = ({ transform, content }) => {
  return (
    <g data-testid="component-title" transform={transform} aria-label="title" >
      <text data-testid="element-name" className="svg__45" aria-label="element name" x="153.98776" y="17.749626" >
        <tspan data-testid="tspan2836" className="svg__45" x="153.98776" y="17.749626" >{content.name}</tspan>
      </text>
      <text data-testid="element-subname" className="svg__46" aria-label="element subname" x="179.65633" y="31.126183" >
        <tspan data-testid="tspan2836-7" className="svg__46" x="179.65633" y="31.126183" >{content.subname}</tspan>
      </text>
      <text data-testid="element-music-by" className="svg__47" aria-label="element music by" x="369.57031" y="45.274078" >
        <tspan data-testid="tspan2858-1" className="svg__48" x="369.57031" y="45.274078" >Music By</tspan>
      </text>
      <text data-testid="element-author" className="svg__47" aria-label="element author" x="305.57031" y="55.274078" >
        <tspan data-testid="tspan2858" className="svg__48" x="305.57031" y="55.274078" >{content.author}</tspan>
      </text>
      <text data-testid="element-tempo" className="svg__47" aria-label="element tempo" x="38.667568" y="55.274078" >
        <tspan data-testid="tspan2858-0" className="svg__48" x="38.667568" y="55.274078" >{content.tempo}</tspan>
      </text>
    </g>
  );
};

