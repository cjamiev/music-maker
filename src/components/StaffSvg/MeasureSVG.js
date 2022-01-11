

import React from 'react';

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

    return <SvgComponent key={key} transform={item.transform} conditions={item.conditions} />;
  });

  return (
    <g data-testid="component-measure" aria-label="measure" transform={transform} >
      {renderData}
    </g>
  );
};

