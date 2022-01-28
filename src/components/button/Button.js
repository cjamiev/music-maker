import React from 'react';
import { getColor, getSize } from './helper';

const Button = ({ label, ariaLabel, className = '', classColor, isSmall = false, disabled = false, onClick }) => {
  const btnClass = `btn ${getSize(isSmall)}${getColor(classColor,disabled)} ${className}`;

  return (
    <button aria-label={ariaLabel} className={btnClass} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
