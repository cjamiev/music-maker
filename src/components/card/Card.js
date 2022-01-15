import React from 'react';

const Card = ({ title, body, footer, className, onClick }) => {
  return <div className={`card ${className}`} onClick={onClick}>
    <div className="card-header">{title}</div>
    <div className="card-body">{body}</div>
    <div className="card-footer">{footer}</div>
  </div>;
};

export default Card;
