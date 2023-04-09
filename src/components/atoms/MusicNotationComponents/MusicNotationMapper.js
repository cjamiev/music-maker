import React from 'react';
import { svgDataMapper } from './svgMapperData';
import { noop } from 'utils/noop';

export const MusicNotationMapper = ({ data, parentRef, handleClick = noop } ) => {
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
            bassIndex: item.bassIndex
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
