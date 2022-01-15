import React from 'react';

const PageFooter = ({ children }) => {
  if (!children) {
    return null;
  }

  return <footer className="pagefooter">{children}</footer>;
};

export default PageFooter;
