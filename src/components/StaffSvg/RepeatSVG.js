

import React from 'react';

export const RepeatTextSVG = ({ transform }) => {
  return (
    <text data-testid="subcomponent-repeat-text" transform={transform} className="svg__18" aria-label="repeat text" x="121.73341" y="83.967583" transform="scale(0.87702874,1.1402135)" >
      <tspan data-testid="tspan1927-48" className="svg__19" x="121.73341" y="83.967583" >Fine
      </tspan>
    </text>
  );
};

export const CodaSVG = ({ transform }) => {
  return (
    <g data-testid="subcomponent-coda" transform={transform} aria-label="coda" transform="matrix(0.66974113,0,0,0.66974113,-0.348417,46.804401)" >
      <ellipse data-testid="ellipse2013" className="svg__20" cx="113.98166" cy="51.167957" rx="9.2874479" ry="10.941872" />
      <ellipse data-testid="ellipse2015" className="svg__21" cx="113.05456" cy="55.938168" rx="4.6116333" ry="9.8976278" transform="matrix(0.99911296,-0.04211039,0.01836631,0.99983133,0,0)" />
      <rect data-testid="rect2076" className="svg__22" aria-label="rect2076" width="0.69958854" height="32.779594" x="113.63186" y="34.778164" />
      <rect data-testid="rect2080" className="svg__22" width="0.69958854" height="32.779594" x="50.818169" y="-130.37144" transform="rotate(90)" />
    </g>
  );
};

export const SegnoSVG = ({ transform }) => {
  return (
    <g data-testid="subcomponent-segno" transform={transform} aria-label="segno" transform="matrix(0.6445784,0,0,0.6445784,-165.30944,-69.874739)" >
      <path data-testid="path2113" className="svg__2" d="m 369.58326,217.37855 c -0.0744,-1.04215 -7.79663,-0.14988 -6.22593,7.15322 1.1165,5.19129 11.04761,11.1938 12.75975,12.71265 0.16323,0.1448 0.15914,0.39201 -0.10914,0.33536 -3.79538,-0.80145 -2.58383,-5.04021 -1.05976,0.39741 0.65693,2.3438 -12.40431,-0.5207 -14.2402,-9.6701 -0.86623,-4.31697 0.31965,-12.48637 8.87528,-10.92854 z" />
      <path data-testid="path2115" className="svg__23" d="m 372.43478,219.89543 a 3.2454515,2.6493421 0 0 1 -3.21575,2.64923 3.2454515,2.6493421 0 0 1 -3.27461,-2.60075 3.2454515,2.6493421 0 0 1 3.15584,-2.69682 3.2454515,2.6493421 0 0 1 3.33235,2.5514 l -3.24328,0.0969 z" />
      <rect data-testid="rect2119" className="svg__24" width="19.773981" height="1.6186637" x="-300.58307" y="-545.39062" transform="matrix(0.58591653,-0.81037141,-0.9998838,0.01524407,0,0)" />
      <path data-testid="path2121" className="svg__25" d="m 380.04759,229.0771 a 1.7411368,1.7411387 0 0 1 -1.7252,1.74107 1.7411368,1.7411387 0 0 1 -1.75678,-1.70921 1.7411368,1.7411387 0 0 1 1.69306,-1.77234 1.7411368,1.7411387 0 0 1 1.78776,1.67677 l -1.73997,0.0637 z" />
      <path data-testid="path2123" className="svg__2" aria-label="path2123" d="m 368.64136,251.13306 c 0.0744,1.04215 10.61544,-1.10883 6.22593,-7.15322 -2.74502,-3.77991 -11.52719,-10.73973 -13.048,-12.4244 -0.14621,-0.16197 0.16903,-0.47184 0.39739,-0.62361 2.02745,-1.34748 4.31082,4.99656 1.05976,-0.39741 -0.97864,-1.62371 11.96441,2.68186 14.2402,9.6701 1.36341,4.1866 -0.31965,12.48637 -8.87528,10.92854 z" />
      <path data-testid="path2125" className="svg__23" transform="scale(-1)" d="m -365.7898,-248.61594 a 3.2454515,2.6493421 0 0 1 -3.21575,2.64923 3.2454515,2.6493421 0 0 1 -3.27461,-2.60075 3.2454515,2.6493421 0 0 1 3.15584,-2.69682 3.2454515,2.6493421 0 0 1 3.33235,2.5514 l -3.24328,0.0969 z" />
      <rect data-testid="rect2127" className="svg__24" width="19.773981" height="1.6186637" x="298.04858" y="543.70831" transform="matrix(-0.58591653,0.81037141,0.9998838,-0.01524407,0,0)" />
      <path data-testid="path2129" className="svg__25" transform="scale(-1)" d="m -358.17698,-239.43427 a 1.7411368,1.7411387 0 0 1 -1.72521,1.74107 1.7411368,1.7411387 0 0 1 -1.75678,-1.7092 1.7411368,1.7411387 0 0 1 1.69306,-1.77235 1.7411368,1.7411387 0 0 1 1.78776,1.67677 l -1.73997,0.0637 z" />
    </g>
  );
};

export const RepeatSVG = ({ transform, subcomponents = [] }) => {
  const renderData = subcomponents.map(item => {
    const SvgComponent = item.component;
    const key = SvgComponent.name + item.transform + JSON.stringify(item.subcomponents);

    return <SvgComponent key={key} transform={item.transform} conditions={item.conditions} subcomponents={item.subcomponents} />;
  });

  return (
    <g data-testid="component-repeat" aria-label="repeat" transform={transform} >
      {renderData}
    </g>
  );
};

