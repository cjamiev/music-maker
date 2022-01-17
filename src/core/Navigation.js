import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './navigation.css';

const NAV_ITEMS = [
  { label: 'Create', url: '/create'},
  { label: 'View', url: '/view'}
];

const Navigation = React.memo(() => {
  const history = useHistory();
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
