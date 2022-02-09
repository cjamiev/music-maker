import React from 'react';

const RestIcon = ({
  showWholeRest,
  showHalfRest,
  showQuarterRest,
  showEighthRest,
  showSixteenthRest
}) => {
  return (
    <g>
      {showWholeRest && <g
        data-testid="whole-rest"
        transform="translate(60.112709,-23.393517)"
      >
        <rect
          width="26.072723"
          height="6.1296353"
          x="-46.690739"
          y="46.787033"
        />
        <rect
          className="musicicon__rest-staff-line"
          width="48.928936"
          height="0.34232843"
          x="-58.118843"
          y="51.720409"
        />
      </g>}
      {showHalfRest && <g
        data-testid="half-rest"
        transform="translate(107.1777,-113.68709)"
      >
        <rect
          width="26.072723"
          height="6.1296353"
          x="-93.755722"
          y="137.08061"
        />
        <rect
          className="musicicon__rest-staff-line"
          width="48.928936"
          height="0.34232843"
          x="-105.18384"
          y="137.93454"
        />
      </g>}
      {showQuarterRest && <g
        data-testid="quarter-rest"
        transform="matrix(1.5503427,0,0,1.5503427,-15.750592,-81.635622)"
      >
        <path
          transform="matrix(0.1,0,0,0.1,22.5,55)"
          d="m 0,0 82.08,92.16 c -13.4787,20.141 -41.7493,32.885 -40.32,60.48 l 52.56,84.24 c -17.3546,-6.1 -29.1391,-22.21 -44.64,-7.92 -5.3545,9.999 -8.9941,38.302 -2.88,65.52 L 18.72,239.76 c -4.2349,-11.28 -1.5134,-22.56 5.76,-33.84 14.443,-5.017 29.0379,-10.375 36,1.44 L 0.72,123.12 21.6,89.28 C 33.3057,74.4 25.7337,59.52 20.88,44.64 12.72,27.84 5.76,12.96 0,0 Z" />
      </g>}
      {showEighthRest && <g
        data-testid="eight-rest"
        transform="matrix(0.95722367,0,0,0.95722367,-162.18461,-24.305939)"
      >
        <path
          className="musicicon__eight-rest-path"
          d="m 193.43276,48.835252 c 0,0 5.43188,1.493771 9.09841,-4.345507 3.66653,-5.839283 -7.06146,20.505375 -7.06146,20.505375"
        />
        <ellipse
          className="musicicon__eight-rest-ellipse"
          cx="194.37692"
          cy="45.233437"
          rx="3.5077193"
          ry="3.7178032"
        />
      </g>}
      {showSixteenthRest && <g
        data-testid="sixteenth-rest"
        transform="matrix(3.0994994,0,0,3.0994994,-645.48141,-422.52207)"
      >
        <path
          className="musicicon__sixteenth-rest-path"
          d="m 214.79337,145.89878 c 0,0 1.67754,0.46132 2.80988,-1.34203 1.13234,-1.80336 -2.18081,6.33271 -2.18081,6.33271"
        />
        <ellipse
          className="musicicon__sixteenth-rest-ellipse"
          cx="215.08495"
          cy="144.78642"
          rx="1.083295"
          ry="1.1481756"
        />
        <path
          className="musicicon__sixteenth-rest-path2"
          d="m 216.53773,141.22009 c 0,0 1.67754,0.46133 2.80987,-1.34203 1.13235,-1.80335 -2.1808,6.33271 -2.1808,6.33271"
        />
        <ellipse
          className="musicicon__sixteenth-rest-ellipse2"
          cx="216.82932"
          cy="140.10774"
          rx="1.083295"
          ry="1.1481756"
        />
      </g>}
    </g>
  );
};

export default RestIcon;
