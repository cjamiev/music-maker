

import React from 'react';

export const CommonTimeSVG = ({ transform, conditions = {} }) => {
  const { showCut } = conditions;

  return (
    <g data-testid="subcomponent-common-time" transform={transform} aria-label="common time" transform="matrix(0.63531559,0,0,0.63531559,-15.670862,-24.258078)" >
      <path data-testid="path1603" className="svg__2" d="m 154.20805,209.95583 c 0.0836,-2.12134 -4.72216,-3.95797 -7.87697,-0.36627 -2.14136,2.43787 -1.93931,9.22561 0.34563,11.62939 2.58713,2.72168 6.35586,2.39422 7.8075,0.0442 1.6992,-2.75084 0.5339,-0.71796 0.5339,-0.71796 0.71824,-2.44039 0.92919,1.99007 -3.55959,2.76312 -10.7076,1.94015 -12.4388,-12.7238 -5.93776,-15.85809 3.24892,-1.81624 8.81084,-1.04203 8.68729,2.50566 z" />
      <path data-testid="path1605" className="svg__10" d="m 154.34004,210.00879 a 1.5672438,1.5672438 0 0 1 -1.46144,1.54818 1.5672438,1.5672438 0 0 1 -1.65654,-1.33735 1.5672438,1.5672438 0 0 1 1.20526,-1.75499 1.5672438,1.5672438 0 0 1 1.84293,1.06596" />
      { showCut && <rect data-testid="cut" className="svg__10" aria-label="condition cut" width="1.0111251" height="20.879732" x="148.83423" y="204.42587" /> }
    </g>
  );
};

export const SingleDigitTimeSVG = ({ transform }) => {
  return (
    <text data-testid="subcomponent-single-digit-time" transform={transform} className="svg__12" aria-label="single digit time" x="74.846977" y="111.39356" >
      <tspan data-testid="tspan1492" className="svg__13" x="74.846977" y="111.39356" >2
      </tspan>
    </text>
  );
};

export const TwoDigitTimeSVG = ({ transform }) => {
  return (
    <text data-testid="subcomponent-two-digit-time" transform={transform} className="svg__12" aria-label="two digit time" x="70.747162" y="111.39358" >
      <tspan data-testid="tspan1534" className="svg__13" x="70.747162" y="111.39358" >12
      </tspan>
    </text>
  );
};

export const TimeSignatureSVG = ({ transform, subcomponents = [] }) => {
  const renderData = subcomponents.map(item => {
    const SvgComponent = item.component;
    const key = SvgComponent.name + item.transform + JSON.stringify(item.subcomponents);

    return <SvgComponent key={key} transform={item.transform} conditions={item.conditions} subcomponents={item.subcomponents} />;
  });

  return (
    <g data-testid="component-time-signature" aria-label="time signature" transform={transform} >
      <g data-testid="staff-time-signature" aria-label="staff time signature" >
        <rect data-testid="rect3608-7-0-3-7" className="svg__0" width="27.192894" height="0.073101997" x="65.119415" y="102.15876" />
        <rect data-testid="rect3610-9-9-5-2" className="svg__0" width="27.192894" height="0.07310199" x="65.119415" y="107.18585" />
        <rect data-testid="rect3612-7-0-6-4" className="svg__0" width="27.192894" height="0.07310199" x="65.119415" y="112.21293" />
        <rect data-testid="rect3614-5-8-6-9" className="svg__0" width="27.192894" height="0.07310199" x="65.119415" y="117.23998" />
        <rect data-testid="rect3616-0-9-5-9" className="svg__0" width="27.192894" height="0.073101684" x="65.117096" y="122.26708" />
      </g>
      {renderData}
    </g>
  );
};

