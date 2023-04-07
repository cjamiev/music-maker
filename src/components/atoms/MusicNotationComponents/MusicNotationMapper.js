import React from 'react';
import { svgDataMapper } from './svgMapperData';

export const MusicNotationMapper = ({ data, parentRef } ) => {
  const renderData = svgDataMapper(data).map(item => {
    const SvgComponent = item.component;
    const key = SvgComponent.name + item.transform + JSON.stringify(item.conditions) + JSON.stringify(item.subcomponents);

    return (
      <SvgComponent
        key={key}
        reference={parentRef}
        dataid={item.id}
        className={item.className}
        transform={item.transform}
        conditions={item.conditions}
        content={item.content}
        subcomponents={item.subcomponents}
      />
    );
  });

  return (
    <g>
      {renderData}
    </g>
  );
};