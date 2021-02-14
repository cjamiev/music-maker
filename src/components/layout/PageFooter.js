import React from 'react';

const footerStyle = {
  position: 'absolute',
  height: '50px',
  top: 'calc(100% - 50px)'
};

const PageFooter = () => {
  return (
    <footer style={footerStyle}>Footer</footer>
  );
};

export default PageFooter;