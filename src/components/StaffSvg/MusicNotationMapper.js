import React from 'react';
import svgDataMapper from './index';
import { musicNotationData } from 'mock/music-notation';

const MusicNotationMapper = ({ data = musicNotationData, parentRef } ) => {
  const renderData = svgDataMapper(data).map(item => {
    const SvgComponent = item.component;
    const key = SvgComponent.name + item.transform + JSON.stringify(item.subcomponents);

    return (
      <SvgComponent
        key={key}
        reference={parentRef}
        dataid={item.id}
        transform={item.transform}
        conditions={item.conditions}
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

export default MusicNotationMapper;
