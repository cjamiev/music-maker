import React from 'react';
import { svgDataMapper } from './svgMapperData';

export const MusicNotationMapper = ({ data, parentRef, handleClick } ) => {
  const renderData = svgDataMapper(data, handleClick).map(item => {
    const SvgComponent = item.component;
    const key = SvgComponent.name + item.transform + JSON.stringify(item.conditions) + JSON.stringify(item.subcomponents);

    return (
      <SvgComponent
        key={key}
        handleClick={() => {
          item.handleClick({
            pageIndex: item.pageIndex,
            lineIndex: item.lineIndex,
            columnIndex: item.columnIndex,
            transform: item.transform
          });
        }}
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
