

import React from 'react';

export const MeasureBarSVG = ({ transform }) => {
  return (
    <g data-testid="subcomponent-measure-bar" aria-label="measure bar" transform={transform} >
      <rect data-testid="element-measure-bar" className="svg__1" aria-label="element measure bar" width="0.65484279" height="78.978127" x="78.530006" y="102.0746" />
    </g>
  );
};

export const MeasureRepeatBarStartSVG = ({ transform, conditions = {} }) => {
  const { showBassRepeatStartDots } = conditions;

  return (
    <g data-testid="subcomponent-measure-repeat-bar-start" aria-label="measure repeat bar start" transform={transform} >
      <g data-testid="element-repeat-bar-start" aria-label="element repeat bar start" >
        <rect data-testid="rect1637-1" className="svg__1" width="1.0516512" height="78.978127" x="-65.879128" y="101.96972" transform="scale(-1,1)" />
        <rect data-testid="rect1639-03" className="svg__1" width="0.44599354" height="78.978127" x="-67.197014" y="101.96972" transform="scale(-1,1)" />
      </g>
      <g data-testid="element-treble-repeat-start-dots" aria-label="element treble repeat start dots" >
        <ellipse data-testid="path4425-2" className="svg__1" cx="-69.026115" cy="109.40768" rx="1.0583327" ry="1.0583323" transform="scale(-1,1)" />
        <ellipse data-testid="ellipse4447-0" className="svg__1" cx="-69.026115" cy="114.15579" rx="1.0583327" ry="1.0583323" transform="scale(-1,1)" />
      </g>
      { showBassRepeatStartDots && <g data-testid="bass-repeat-start-dots" aria-label="condition bass repeat start dots" >
        <ellipse data-testid="ellipse4449-7" className="svg__1" cx="-69.026115" cy="167.61603" rx="1.0583327" ry="1.0583323" transform="scale(-1,1)" />
        <ellipse data-testid="ellipse4451-4" className="svg__1" cx="-69.026115" cy="172.36414" rx="1.0583327" ry="1.0583323" transform="scale(-1,1)" />
      </g> }
    </g>
  );
};

export const MeasureEndSVG = ({ transform }) => {
  return (
    <g data-testid="subcomponent-measure-end" aria-label="measure end" transform={transform} >
      <rect data-testid="element-measure-end-8" className="svg__1" width="0.54693741" height="78.978127" x="92.06179" y="101.96958" />
    </g>
  );
};

export const MeasureRepeatBarEndSVG = ({ transform, conditions = {} }) => {
  const { showBassRepeatEndDots } = conditions;

  return (
    <g data-testid="subcomponent-measure-repeat-bar-end" aria-label="measure repeat bar end" transform={transform} >
      <g data-testid="element-repeat-bar-end" aria-label="element repeat bar end" >
        <rect data-testid="rect1637-8-9-3" className="svg__1" width="1.0516512" height="78.978127" x="91.552513" y="101.96972" />
        <rect data-testid="rect1639-0-6" className="svg__1" width="0.44599354" height="78.978127" x="90.234627" y="101.96972" />
      </g>
      <g data-testid="element-treble-repeat-end-dots" aria-label="element treble repeat end dots" >
        <ellipse data-testid="path4425-9-1" className="svg__1" cx="88.405525" cy="109.40768" rx="1.0583327" ry="1.0583323" />
        <ellipse data-testid="ellipse4447-2-2" className="svg__1" cx="88.405525" cy="114.1558" rx="1.0583327" ry="1.0583323" />
      </g>
      { showBassRepeatEndDots && <g data-testid="bass-repeat-end-dots" aria-label="condition bass repeat end dots" >
        <ellipse data-testid="ellipse4449-1-2-3" className="svg__1" cx="88.405525" cy="167.61604" rx="1.0583327" ry="1.0583323" />
        <ellipse data-testid="ellipse4451-9-9" className="svg__1" cx="88.405525" cy="172.36415" rx="1.0583327" ry="1.0583323" />
      </g> }
    </g>
  );
};

export const MeasureSVG = ({ transform, subcomponents = [], conditions = {} }) => {
  const { showStaffBassMeasure } = conditions;

  const renderData = subcomponents.map(item => {
    const SvgComponent = item.component;
    const key = SvgComponent.name + item.transform + JSON.stringify(item.subcomponents);

    return <SvgComponent key={key} transform={item.transform} conditions={item.conditions} subcomponents={item.subcomponents} />;
  });

  return (
    <g data-testid="component-measure" aria-label="measure" transform={transform} >
      { showStaffBassMeasure && <g data-testid="staff-bass-measure" aria-label="condition staff bass measure" >
        <rect data-testid="rect3608-7-0-3-7-1-3-6-8" className="svg__0" width="27.192894" height="0.073101997" x="65.120537" y="160.3671" />
        <rect data-testid="rect3610-9-9-5-2-5-4-3-8" className="svg__0" width="27.192894" height="0.07310199" x="65.120537" y="165.3942" />
        <rect data-testid="rect3612-7-0-6-4-5-0-3-1" className="svg__0" width="27.192894" height="0.07310199" x="65.120537" y="170.42126" />
        <rect data-testid="rect3614-5-8-6-9-1-6-1-3" className="svg__0" width="27.192894" height="0.07310199" x="65.120537" y="175.44832" />
        <rect data-testid="rect3616-0-9-5-9-3-55-7-0" className="svg__0" width="27.192894" height="0.073101684" x="65.118217" y="180.47542" />
      </g> }
      <g data-testid="element-staff-treble-measure" aria-label="element staff treble measure" >
        <rect data-testid="rect3608-7-0-3-7-1-3-7" className="svg__0" width="27.192894" height="0.073101997" x="65.120537" y="102.15876" />
        <rect data-testid="rect3610-9-9-5-2-5-4-6" className="svg__0" width="27.192894" height="0.07310199" x="65.120537" y="107.18585" />
        <rect data-testid="rect3612-7-0-6-4-5-0-4" className="svg__0" width="27.192894" height="0.07310199" x="65.120537" y="112.21293" />
        <rect data-testid="rect3614-5-8-6-9-1-6-9" className="svg__0" width="27.192894" height="0.07310199" x="65.120537" y="117.23998" />
        <rect data-testid="rect3616-0-9-5-9-3-55-2" className="svg__0" width="27.192894" height="0.073101684" x="65.118217" y="122.26708" />
      </g>
      {renderData}
    </g>
  );
};

