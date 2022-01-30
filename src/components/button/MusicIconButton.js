import React from 'react';
import {
  RestIcon
} from 'components/musicicons';
import { ICON_SIZES, MUSIC_ICON_TYPES } from 'constants/icon';
import ComponentWrapper from 'components/ComponentWrapper';

const ICON_HEIGHT = '106px';
const ICON_WIDTH = '106px';
const ICON_VIEWBOX = '0 0 53 53';
const iconMap = {
  [MUSIC_ICON_TYPES.WHOLE_REST]: ComponentWrapper(RestIcon, { showWholeRest: true }),
  [MUSIC_ICON_TYPES.HALF_REST]: ComponentWrapper(RestIcon, { showHalfRest: true }),
  [MUSIC_ICON_TYPES.QUARTER_REST]: ComponentWrapper(RestIcon, { showQuarterRest: true }),
  [MUSIC_ICON_TYPES.EIGHTH_REST]: ComponentWrapper(RestIcon, { showEighthRest: true }),
  [MUSIC_ICON_TYPES.SIXTEENTH_REST]: ComponentWrapper(RestIcon, { showSixteenthRest: true })
};

const SCALE_SIZES = {
  [ICON_SIZES.EXTRA_SMALL]: 'scale(0.5)',
  [ICON_SIZES.SMALL]: 'scale(0.8)',
  [ICON_SIZES.MEDIUM]: 'scale(1)',
  [ICON_SIZES.LARGE]: 'scale(1.2)',
  [ICON_SIZES.EXTRA_LARGE]: 'scale(1.5)'
};

const MusicIconButton = ({ type, size = 'm', onClick }) => {
  const IconSVG = iconMap.hasOwnProperty(type) ? iconMap[type] : null;

  if(!IconSVG) {
    return null;
  }

  return (
    <button className="btn--icon music--icon" onClick={onClick}>
      <svg height={ICON_HEIGHT} width={ICON_WIDTH} viewBox={ICON_VIEWBOX}>
        <g transform={SCALE_SIZES[size]}>
          <IconSVG />
        </g>
      </svg>
    </button>
  );
};

export default MusicIconButton;
