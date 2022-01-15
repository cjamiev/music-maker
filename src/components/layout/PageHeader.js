import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <header className="page__header">
      <h1 className="page__header-title">{title}</h1>
    </header>
  );
};

export default PageHeader;
