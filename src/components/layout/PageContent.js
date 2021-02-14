import React from 'react';

const pageContentStyle = {
  marginTop: '5px'
};

const PageContent = ({ children }) => {
  return <div style={pageContentStyle} className="page-body">{children}</div>;
};

export default PageContent;