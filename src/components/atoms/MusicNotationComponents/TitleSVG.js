

import React from 'react';

const BASE_TITLE_X = 247.75562;
const X_TITLE_MODIFIER = 6.51944;
const BASE_SUBTITLE_X = 250.11121;
const X_SUBTITLE_MODIFIER = 4.05045;
const BASE_AUTHOR_X = 413.57031;
const X_AUTHOR_MODIFIER = 6;

export const TitleSVG = ({ transform, content }) => {
  const { title, subtitle, author, tempo } = content;
  const xCoordinateTitle = title ? BASE_TITLE_X - (title.length * X_TITLE_MODIFIER) : BASE_TITLE_X;
  const xCoordinateSubtitle = subtitle ? BASE_SUBTITLE_X - (subtitle.length * X_SUBTITLE_MODIFIER) : BASE_SUBTITLE_X;
  const xCoordinateAuthor = author ? BASE_AUTHOR_X - (author.length * X_AUTHOR_MODIFIER) : BASE_AUTHOR_X;

  return (
    <g data-testid="component-title" transform={transform} aria-label="title" >
      <text data-testid="element-title" className="svg__45" aria-label="element title" x={xCoordinateTitle} y="17.749626" >
        <tspan data-testid="tspan2836" className="svg__45" x={xCoordinateTitle} y="17.749626" >{title}</tspan>
      </text>
      <text data-testid="element-subtitle" className="svg__46" aria-label="element subtitle" x={xCoordinateSubtitle} y="31.126183" >
        <tspan data-testid="tspan2836-7" className="svg__46" x={xCoordinateSubtitle} y="31.126183" >{subtitle}</tspan>
      </text>
      <text data-testid="element-music-by" className="svg__47" aria-label="element music by" x="369.57031" y="45.274078" >
        <tspan data-testid="tspan2858-1" className="svg__48" x="369.57031" y="45.274078" >{author && 'Music By'}</tspan>
      </text>
      <text data-testid="element-author" className="svg__47" aria-label="element author" x={xCoordinateAuthor} y="55.274078" >
        <tspan data-testid="tspan2858" className="svg__48" x={xCoordinateAuthor} y="55.274078" >{author}</tspan>
      </text>
      <text data-testid="element-tempo" className="svg__47" aria-label="element tempo" x="38.667568" y="55.274078" >
        <tspan data-testid="tspan2858-0" className="svg__48" x="38.667568" y="55.274078" >{tempo}</tspan>
      </text>
    </g>
  );
};

