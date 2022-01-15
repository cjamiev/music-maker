import React from 'react';

const PageFooter = ({ children }) => {
  if (!children) {
    return null;
  }

  return <footer className="page__footer">{children}</footer>;
};

export default PageFooter;
