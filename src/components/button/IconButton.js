import React from 'react';
import {
  CloseIcon,
  EditIcon,
  MinusIcon,
  PlusIcon,
  SemicircleArrowIcon
} from 'components/icons';
import { ICON_TYPES, ICON_SIZES } from 'constants/icon';
import ComponentWrapper from 'components/ComponentWrapper';

const ICON_HEIGHT = '53px';
const ICON_WIDTH = '53px';
const ICON_VIEWBOX = '0 0 53 53';
const iconMap = {
  [ICON_TYPES.MINUS]: MinusIcon,
  [ICON_TYPES.PLUS]: PlusIcon,
  [ICON_TYPES.CLOSE]: CloseIcon,
  [ICON_TYPES.EDIT]: EditIcon,
  [ICON_TYPES.UNDO]: ComponentWrapper(SemicircleArrowIcon, { undo: true })
};

const SCALE_SIZES = {
  [ICON_SIZES.EXTRA_SMALL]: 'scale(0.5)',
  [ICON_SIZES.SMALL]: 'scale(0.8)',
  [ICON_SIZES.MEDIUM]: 'scale(1)',
  [ICON_SIZES.LARGE]: 'scale(1.2)',
  [ICON_SIZES.EXTRA_LARGE]: 'scale(1.5)'
};

const IconButton = ({ type, size = 'm', onClick }) => {
  const IconSVG = iconMap.hasOwnProperty(type) ? iconMap[type] : null;

  if(!IconSVG) {
    return null;
  }

  return (
    <button className="btn--icon" onClick={onClick}>
      <svg height={ICON_HEIGHT} width={ICON_WIDTH} viewBox={ICON_VIEWBOX}>
        <g transform={SCALE_SIZES[size]}>
          <IconSVG />
        </g>
      </svg>
    </button>
  );
};

export default IconButton;
