import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <button className="footer-btns">Save</button>
      <button className="footer-btns">View Mode</button>
      <button className="footer-btns float-right">Select Song</button>
    </footer>
  );
};

export default Footer;
