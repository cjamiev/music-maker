import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <header className="pageheader">
      <h1 className="pageheader__title">{title}</h1>
    </header>
  );
};

export default PageHeader;
