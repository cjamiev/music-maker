import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './navigation.css';

const NAV_ITEMS = [
  { label: 'Home', url: '/home'},
  { label: 'Archive', url: '/archive'}
];

const Navigation = React.memo(() => {
  const history = useHistory();
  const [toggleNav, setToggleNav] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(history.location.pathname);

  const renderNavItems = NAV_ITEMS.map(item => {
    const handleClick = () => {
      if(history.location.pathname !== item.url){
        history.push(item.url);
        setCurrentUrl(item.url);
      }
    };
    const className = currentUrl === item.url ? 'nav-item nav-item-active': 'nav-item';

    return (
      <div key={item.url} className={className} onClick={handleClick}>
        {item.label}
      </div>
    );
  });

  return (
    <nav className='nav-bar'>
      <ul className='nav'>
        {renderNavItems}
      </ul>
    </nav>
  );
});

export default Navigation;
