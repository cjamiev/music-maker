import React from 'react';
import {
  ArrowIcon,
  CloseIcon,
  CopyIcon,
  DeleteIcon,
  EditIcon,
  MinusIcon,
  PlusIcon,
  SemicircleArrowIcon
} from 'components/icons/ButtonIcons';
import { ICON_TYPES, ICON_SIZES } from 'constants/icon';
import ComponentWrapper from 'components/ComponentWrapper';

const ICON_HEIGHT = '53px';
const ICON_WIDTH = '53px';
const ICON_VIEWBOX = '0 0 53 53';
const iconMap = {
  [ICON_TYPES.ARROW]: ArrowIcon,
  [ICON_TYPES.CLOSE]: CloseIcon,
  [ICON_TYPES.COPY]: CopyIcon,
  [ICON_TYPES.DELETE]: DeleteIcon,
  [ICON_TYPES.EDIT]: EditIcon,
  [ICON_TYPES.MINUS]: MinusIcon,
  [ICON_TYPES.PLUS]: PlusIcon,
  [ICON_TYPES.UNDO]: ComponentWrapper(SemicircleArrowIcon, { undo: true })
};

const SCALE_SIZES = {
  [ICON_SIZES.EXTRA_SMALL]: 'scale(0.5)',
  [ICON_SIZES.SMALL]: 'scale(0.8)',
  [ICON_SIZES.MEDIUM]: 'scale(1)',
  [ICON_SIZES.LARGE]: 'scale(1.2)',
  [ICON_SIZES.EXTRA_LARGE]: 'scale(1.5)'
};

export const IconButton = ({ className = '', type, size = 'm', handleClick, ...iconProps }) => {
  const IconSVG = iconMap.hasOwnProperty(type) ? iconMap[type] : null;

  if(!IconSVG) {
    return null;
  }

  return (
    <button className={`btn--icon ${className}`} onClick={() => {
      if(!iconProps?.isDisabled) {
        handleClick();
      }
    }}>
      <svg className={iconProps?.isDisabled ? 'btn--icon__disabled' : ''} height={ICON_HEIGHT} width={ICON_WIDTH} viewBox={ICON_VIEWBOX}>
        <g transform={SCALE_SIZES[size]}>
          <IconSVG {...iconProps} />
        </g>
      </svg>
    </button>
  );
};
