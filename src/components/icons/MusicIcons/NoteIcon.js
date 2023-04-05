import React from 'react';

export const NoteIcon = ({
  showWholeNote,
  showHalfNote,
  showQuarterNote,
  showEighthNote,
  showSixteenthNote
}) => {
  return (
    <g>
      {showWholeNote && <g
        data-testid="whole-note"
        transform="matrix(3.1521065,0,0,3.1521065,-1152.9262,-155.43677)"
      >
        <ellipse
          className="musicicon__whole-note"
          cx="374.15756"
          cy="62.147362"
          rx="3.1077557"
          ry="2.4171433"
        />
        <ellipse
          className="musicicon__whole-note-hole"
          cx="337.9754"
          cy="172.13019"
          rx="1.5423677"
          ry="2.1869392"
          transform="rotate(-17.558954)"
        />
      </g>}
      {!showWholeNote && <g
        data-testid="stemmed-note"
        transform="matrix(1.7472546,0,0,1.7472546,-1395.1187,-737.07187)"
      >
        <ellipse
          cx="670.01434"
          cy="696.3175"
          rx="3.9879844"
          ry="2.5694997"
          transform="matrix(0.94215293,-0.33518333,0.25876352,0.9659407,0,0)"
        />
        {showHalfNote && <ellipse
          className="musicicon__half-note"
          cx="48.033264"
          cy="902.73914"
          rx="3.6651206"
          ry="1.5457097"
          transform="matrix(0.87023416,-0.49263832,0.85255896,0.52263106,0,0)"
        />}
        <rect
          data-testid="condition-note-stem"
          width="0.45734397"
          height="16.595196"
          x="814.76898"
          y="430.40161"
        />
        {(showEighthNote || showSixteenthNote) && <path
          d="m 815.21872,430.40225 c 0,0 -0.30133,3.29712 2.86944,4.79505 3.17077,1.49795 0.69676,9.39918 0.63805,9.28395 -0.0588,-0.11522 1.85547,-6.80885 -1.01972,-8.09327 -2.77486,-1.2396 -2.56154,-1.08227 -2.56154,-1.08227 l 0.0738,-4.90346"
          data-testid="condition-eighth-note-flag"
        />}
        {showSixteenthNote && <g
          data-testid="condition-sixteenth-note-flag"
          transform="translate(187.79904,138.45224)"
        >
          <rect
            data-testid="sixteength-note-stem"
            width="0.45734397"
            height="16.595196"
            x="626.97058"
            y="284.68509"
          />
          <path
            d="m 627.41987,284.68575 c 0,0 -0.30133,3.29712 2.86944,4.79505 3.17077,1.49795 0.69676,9.39918 0.63805,9.28395 -0.0588,-0.11522 1.85547,-6.80885 -1.01972,-8.09327 -2.77486,-1.2396 -2.56154,-1.08227 -2.56154,-1.08227 l 0.0738,-4.90346"
            data-testid="sixteength-note-flag"
          />
        </g>}
      </g>}
    </g>
  );
};
