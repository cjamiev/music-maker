

import React from 'react';

export const DottedRestSVG = ({ transform }) => {
  return (
    <ellipse data-testid="subcomponent-dotted-rest" transform={transform} className="svg__1" aria-label="dotted-rest" cx="83.74295" cy="109.73623" rx="1.0583327" ry="1.0583323" />
  );
};

export const RestSVG = ({ transform, conditions = {}, subcomponents = [] }) => {
  const { showWholeRest, showHalfRest, showQuarterRest, showEightRest, showSixteenthRest } = conditions;
  const renderData = subcomponents.map(item => {
    const SvgComponent = item.component;
    const key = SvgComponent.name + item.transform + JSON.stringify(item.subcomponents);

    return <SvgComponent key={key} transform={item.transform} conditions={item.conditions} subcomponents={item.subcomponents} />;
  });

  return (
    <g data-testid="component-rest" aria-label="rest" transform={transform} >
      <g data-testid="staff-rest" aria-label="staff rest" >
        <rect data-testid="rect3608-7-0-3-7-1" className="svg__0" width="27.192894" height="0.073101997" x="65.119415" y="102.15877" />
        <rect data-testid="rect3610-9-9-5-2-5" className="svg__0" width="27.192894" height="0.07310199" x="65.119415" y="107.18586" />
        <rect data-testid="rect3612-7-0-6-4-5" className="svg__0" width="27.192894" height="0.07310199" x="65.119415" y="112.21293" />
        <rect data-testid="rect3614-5-8-6-9-1" className="svg__0" width="27.192894" height="0.07310199" x="65.119415" y="117.23998" />
        <rect data-testid="rect3616-0-9-5-9-3" className="svg__0" width="27.192894" height="0.073101684" x="65.117096" y="122.26708" />
      </g>
      { showWholeRest && <rect data-testid="whole-rest" className="svg__1" aria-label="condition whole rest" width="8.4119148" height="1.9776211" x="74.650398" y="107.25021" /> }
      { showHalfRest && <rect data-testid="half-rest" className="svg__1" aria-label="condition half rest" width="8.4119148" height="1.9776211" x="74.650398" y="109.94893" /> }
      { showQuarterRest && <g data-testid="quarter-rest" aria-label="condition quarter rest" transform="matrix(0.50019132,0,0,0.50019132,65.096728,77.374824)" >
        <path data-testid="shape50" className="svg__2" transform="matrix(0.1,0,0,0.1,22.5,55)" d="m 0,0 82.08,92.16 c -13.4787,20.141 -41.7493,32.885 -40.32,60.48 l 52.56,84.24 c -17.3546,-6.1 -29.1391,-22.21 -44.64,-7.92 -5.3545,9.999 -8.9941,38.302 -2.88,65.52 L 18.72,239.76 c -4.2349,-11.28 -1.5134,-22.56 5.76,-33.84 14.443,-5.017 29.0379,-10.375 36,1.44 L 0.72,123.12 21.6,89.28 C 33.3057,74.4 25.7337,59.52 20.88,44.64 12.72,27.84 5.76,12.96 0,0 Z" />
      </g> }
      { showEightRest && <g data-testid="condition-eight-rest" aria-label="condition eight rest" transform="matrix(0.30883171,0,0,0.30883171,17.852318,95.685104)" >
        <path data-testid="path1710" className="svg__3" d="m 193.43276,48.835252 c 0,0 5.43188,1.493771 9.09841,-4.345507 3.66653,-5.839283 -7.06146,20.505375 -7.06146,20.505375" />
        <ellipse data-testid="path1712" className="svg__4" cx="194.37692" cy="45.233437" rx="3.5077193" ry="3.7178032" />
      </g> }
      { showSixteenthRest && <g data-testid="sixteenth-rest" aria-label="condition sixteenth rest" >
        <path data-testid="path1989" className="svg__5" d="m 76.718313,115.20702 c 0,0 1.67754,0.46132 2.80988,-1.34203 1.13234,-1.80336 -2.18081,6.33271 -2.18081,6.33271" />
        <ellipse data-testid="ellipse1991" className="svg__6" cx="77.009888" cy="114.09467" rx="1.083295" ry="1.1481756" />
        <path data-testid="path1997" className="svg__5" aria-label="path1997" d="m 78.462673,110.52833 c 0,0 1.67754,0.46133 2.80987,-1.34203 1.13235,-1.80335 -2.1808,6.33271 -2.1808,6.33271" />
        <ellipse data-testid="ellipse1999" className="svg__6" cx="78.754257" cy="109.41599" rx="1.083295" ry="1.1481756" />
      </g> }
      {renderData}
    </g>
  );
};

