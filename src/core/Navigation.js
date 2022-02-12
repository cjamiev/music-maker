import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navigation.css';

const NAV_ITEMS = [
  { label: 'Create', url: '/create'},
  { label: 'View', url: '/view'},
  { label: 'Test', url: '/test'}
];

const Navigation = React.memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState(location.pathname);

  const renderNavItems = NAV_ITEMS.map(item => {
    const handleClick = () => {
      if(location.pathname !== item.url){
        navigate(item.url);
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
