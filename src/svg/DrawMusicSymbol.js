import React, { Fragment } from 'react';
import './draw-music-symbol.css';

export const renderRestNote = (musicalSymbol) => {
  if (musicalSymbol === 'sixteenth-rest') {
    return (
      <g transform="scale(2) translate(-40,60)">
        <rect
          className="rest-note-rect"
          width="1.5822377"
          height="33.103966"
          x="123.79274"
          y="35.033169"
          transform="matrix(0.72954309,0.68393485,0.48118443,-0.87661939,0,0)"
          ry="0" />
        <path
          className="rest-note-path"
          d="m 108.69658,37.959931 c 1.49274,1.140617 4.3222,0.777414 9.83609,-2.60576"
        />
        <ellipse
          className="rest-note-ellipse"
          cx="110.14226"
          cy="35.151787"
          rx="3.49628"
          ry="4.0632439" />
        <path
          className="rest-note-path"
          d="m 113.77083,28.348215 c 1.49274,1.140617 4.3222,0.777414 9.83609,-2.60576"
        />
        <ellipse
          className="rest-note-ellipse"
          cx="115.18824"
          cy="25.702383"
          rx="3.49628"
          ry="4.0632439" />
      </g>
    );
  }
  else if (musicalSymbol === 'eighth-rest') {
    return (
      <g transform="scale(2) translate(-40,60)">
        <rect
          className="rest-note-rect"
          width="1.5822377"
          height="24.103966"
          x="123.79274"
          y="35.033169"
          transform="matrix(0.72954309,0.68393485,0.48118443,-0.87661939,0,0)"
          ry="0" />
        <path
          className="rest-note-path"
          d="m 108.69658,37.959931 c 1.49274,1.140617 4.3222,0.777414 9.83609,-2.60576"
        />
        <ellipse
          className="rest-note-ellipse"
          cx="110.14226"
          cy="35.151787"
          rx="3.49628"
          ry="4.0632439" />
      </g>
    );
  }
  else if (musicalSymbol === 'quarter-rest') {
    return (
      <Fragment>
        <path id="shape0" fill="#000000" fillRule="evenodd" transform="scale(0.3) translate(225, 550)"
          d="M0 0L82.08 92.16C68.6013 112.301 40.3307 125.045 41.76 152.64L94.32 236.88C76.9654 230.78 65.1809 214.67 49.68 228.96C44.3255 238.959 40.6859 267.262 46.8 294.48L18.72 239.76C14.4851 228.48 17.2066 217.2 24.48 205.92C38.923 200.903 53.5179 195.545 60.48 207.36L0.72 123.12L21.6 89.28C33.3057 74.4 25.7337 59.52 20.88 44.64C12.72 27.84 5.76 12.96 0 0Z" />
      </Fragment>
    );
  }

  return;
};