import React from 'react';

const errorStyle = {
  textAlign: 'center',
  color: 'red'
};

const PageHeader = ({ title, error }) => {
  return (
    <header>
      <h1>{title}</h1>
      {error && <div style={errorStyle}>{error}</div>}
    </header>
  );
};

export default PageHeader;