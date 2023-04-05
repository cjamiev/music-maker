import React from 'react';
import { MEASURE_SINGLE_STAFF_HEIGHT, MEASURE_BOTH_STAFFS_HEIGHT } from 'constants/svgattributes';

export const MeasureStartSVG = ({ transform, conditions = {} }) => {
  const { showClefBrace } = conditions;

  return (
    <g data-testid="subcomponent-measure-start" aria-label="measure start" transform={transform} >
      <rect data-testid="element-measure-start" className="svg__1" aria-label="element measure start" width="0.54693639" height={showClefBrace ? MEASURE_BOTH_STAFFS_HEIGHT : MEASURE_SINGLE_STAFF_HEIGHT} x="9.2604179" y="101.80585" />
      { showClefBrace && <g data-testid="clef-brace" aria-label="condition clef brace" transform="matrix(0.99050463,0,0,1.3810254,-39.630789,88.485859)" >
        <path data-testid="path2258" className="svg__54" d="m 46.372714,10.037741 c 0,0 -2.907118,1.830408 -3.553144,5.706565 -0.646026,3.876156 5.491221,16.150653 4.522184,17.658046 -0.96904,1.507396 -5.06054,5.06054 -5.06054,5.06054" />
        <path data-testid="path2260" className="svg__54" d="m 46.240488,66.441063 c 0,0 -2.907118,-1.830408 -3.553144,-5.706565 -0.646026,-3.876156 5.491221,-16.150653 4.522184,-17.658046 -0.96904,-1.507396 -5.06054,-5.060541 -5.06054,-5.060541" />
      </g> }
    </g>
  );
};

export const TrebleSVG = ({ transform, conditions = {} }) => {
  const { showGClefOttavaAlta, showGClefOttavaBass } = conditions;

  return (
    <g data-testid="subcomponent-treble" aria-label="treble" transform={transform} >
      <g data-testid="element-treble-clef" aria-label="element treble clef" >
        <path data-testid="path1734-2" className="svg__55" d="m 21.739615,125.68181 c 0.784999,3.50589 5.775504,1.38751 5.469091,-1.12223 -0.562687,-4.94838 -5.316978,-19.21489 -5.613359,-21.13711 0,0 -1.67,-7.147698 2.836815,-5.1174 2.837386,1.278228 2.350222,5.39481 0.38937,7.11987 -1.070474,0.94174 -8.663978,3.98054 -8.399218,8.89983 0.278425,5.17313 5.858378,5.8241 9.289202,5.50677 3.317456,-0.30685 5.300099,-4.01755 3.671183,-7.84298 -2.478423,-5.82044 -12.158606,-0.83902 -7.777908,4.82103" />
        <path data-testid="path1753-7" className="svg__56" d="m 20.927854,115.71536 c -0.765507,-0.65614 -1.925346,-6.01279 3.559932,-6.67487 5.311199,-0.64106 5.562407,6.67488 5.562407,6.67488 -0.650271,-2.27286 -0.972312,-6.07113 -5.840534,-5.28428 -3.792828,0.61304 -3.384702,4.15245 -3.281805,5.28427 z" />
        <path data-testid="path1757-4" className="svg__56" d="m 26.156506,100.36316 c 0,0 -0.333738,4.00492 -4.616795,6.06301 -4.283032,2.05809 -5.006149,3.78243 -5.006149,3.78243 0,0 -2.447449,3.9493 -0.111239,7.39799 2.336188,3.44868 8.566084,2.11371 8.566084,2.11371 0,0 -7.064252,0.44499 -8.009851,-3.39307 -0.945616,-3.83805 -0.547216,-5.76938 4.505531,-9.12233 4.783675,-3.17439 4.956158,-1.8695 4.672419,-6.84174 z" />
        <path data-testid="path1761-0" className="svg__56" d="m 24.295639,98.21462 c 0,0 -2.987681,-0.07954 -2.969576,3.26456 0.01628,3.01084 0.09965,-2.266228 0.09832,-2.261593 0.01346,-0.03372 0.609612,-2.158043 2.568691,-1.177982" />
        <ellipse data-testid="path1671-4" className="svg__57" cx="23.068882" cy="125.06432" rx="1.4610404" ry="1.4356281" />
      </g>
      <g data-testid="staff-treble" aria-label="staff treble" >
        <rect data-testid="rect3608-7-0-3-9-0" className="svg__0" width="27.192894" height="0.073101997" x="9.5569153" y="102.15896" />
        <rect data-testid="rect3610-9-9-5-6-3" className="svg__0" width="27.192894" height="0.07310199" x="9.5569153" y="107.18606" />
        <rect data-testid="rect3612-7-0-6-9-2" className="svg__0" width="27.192894" height="0.07310199" x="9.5569153" y="112.21313" />
        <rect data-testid="rect3614-5-8-6-5-6" className="svg__0" width="27.192894" height="0.07310199" x="9.5569153" y="117.24019" />
        <rect data-testid="rect3616-0-9-5-6-0" className="svg__0" width="27.192894" height="0.073101684" x="9.5545959" y="122.26729" />
      </g>
      { showGClefOttavaAlta && <text data-testid="g-clef-ottava-alta" className="svg__58" aria-label="condition g clef ottava alta" x="28.186399" y="99.452728" >
        <tspan data-testid="tspan6000" className="svg__58" x="28.186399" y="99.452728" >8
        </tspan>
      </text> }
      { showGClefOttavaBass && <text data-testid="g-clef-ottava-bass" className="svg__59" aria-label="condition g clef ottava bass" x="28.186525" y="128.31738" >
        <tspan data-testid="tspan6000-1" className="svg__59" x="28.186525" y="128.31738" >8
        </tspan>
      </text> }
    </g>
  );
};

export const BassSVG = ({ transform, conditions = {} }) => {
  const { showFClefOttavaAlta, showFClefOttavaBass } = conditions;

  return (
    <g data-testid="subcomponent-bass" aria-label="bass" transform={transform} >
      <g data-testid="element-bass-clef" aria-label="element bass clef" >
        <path data-testid="path1689-8" className="svg__60" d="m 18.604278,176.21137 c 0,0 5.739746,-1.26608 7.554522,-6.7104 1.814778,-5.44432 -1.313586,-7.14627 -1.813232,-7.48908 0.139096,-0.0491 -4.72041,-2.51699 -6.796392,0.73643 -1.841972,2.88669 0.279865,2.59 0.222833,2.52961 -0.753846,-0.51471 -1.463967,-0.65458 0.158946,0.33328 1.876578,1.14226 -1.111222,-0.71507 -0.09311,0.17121 0.669233,0.58259 -0.541892,-0.4597 -0.541892,-0.4597 -0.43265,0 0.157019,-3.88278 3.629551,-3.29192 3.420057,0.58193 4.135995,3.33412 4.135995,3.33412 0,0 0.997463,2.44806 0.168818,4.47363 -0.759672,1.85698 -0.50645,1.60375 -2.996486,3.88277 -2.490041,2.27899 -6.159151,3.72573 -6.159151,3.72573 z" />
        <ellipse data-testid="path1691-3" className="svg__1" ry="1.7389499" rx="2.2450035" cy="165.19319" cx="18.878477" />
        <ellipse data-testid="ellipse4525-9" className="svg__1" cx="28.678394" cy="167.75764" rx="1.0583327" ry="1.0583323" />
        <ellipse data-testid="ellipse4453-9" className="svg__1" cx="28.678394" cy="163.00281" rx="1.0583327" ry="1.0583323" />
      </g>
      <g data-testid="staff-bass" aria-label="staff bass" >
        <rect data-testid="rect3608-7-0-3-9-4-8" className="svg__0" width="27.192894" height="0.073101997" x="9.5569153" y="160.36649" />
        <rect data-testid="rect3610-9-9-5-6-1-1" className="svg__0" width="27.192894" height="0.07310199" x="9.5569153" y="165.39359" />
        <rect data-testid="rect3612-7-0-6-9-5-0" className="svg__0" width="27.192894" height="0.07310199" x="9.5569153" y="170.42065" />
        <rect data-testid="rect3614-5-8-6-5-5-1" className="svg__0" width="27.192894" height="0.07310199" x="9.5569153" y="175.44771" />
        <rect data-testid="rect3616-0-9-5-6-3-3" className="svg__0" width="27.192894" height="0.073101684" x="9.5545959" y="180.47481" />
      </g>
      { showFClefOttavaAlta && <text data-testid="f-clef-ottava-alta" className="svg__59" aria-label="condition f clef ottava alta" x="24.356421" y="159.74063" >
        <tspan data-testid="tspan6000-1-0" className="svg__59" x="24.356421" y="159.74063" >8
        </tspan>
      </text> }
      { showFClefOttavaBass && <text data-testid="f-clef-ottava-bass" className="svg__59" aria-label="condition f clef ottava bass" x="24.356524" y="179.75134" >
        <tspan data-testid="tspan6000-1-0-7" className="svg__59" x="24.356524" y="179.75134" >8
        </tspan>
      </text> }
    </g>
  );
};

export const ClefSVG = ({ transform, subcomponents = [] }) => {
  const renderData = subcomponents.map(item => {
    const SvgComponent = item.component;
    const key = SvgComponent.name + item.transform + JSON.stringify(item.subcomponents);

    return <SvgComponent key={key} transform={item.transform} conditions={item.conditions} />;
  });

  return (
    <g data-testid="component-clef" aria-label="clef" transform={transform} >
      {renderData}
    </g>
  );
};

