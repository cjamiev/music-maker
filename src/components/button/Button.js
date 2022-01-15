import React from 'react';
import { getColor, getSize } from './helper';

const Button = ({ label, ariaLabel, className, classColor, isSmall = false, disabled = false, onClick }) => {
  const btnClass = className ? className : `btn ${getSize(isSmall)}${getColor(classColor)}`;

  return (
    <button aria-label={ariaLabel} className={btnClass} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
