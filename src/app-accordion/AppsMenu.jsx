
import { useState, useRef, useEffect } from 'react';
import './AppMenu.scss';

import {
  Input,
  Heading,
  Link,
  Stepper,
  TooltipHoverArea,
  Button,
  Icon,
  Portal
} from "@puppet/react-components"

const apps = [
  'inventory', 'column-chart', 'package', 'copy'
];

const GoogleAppsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="apps-container" ref={menuRef}>
      <button className="apps-toggle" onClick={toggleMenu}>☰</button>
      {isOpen && (
        <div className="apps-menu">
          <Input
            name="input-ex13"
            type="text"
            trailingButtonIcon="search"
            trailingButtonProps={{ 'aria-label': 'toggle show/hide text' }}
            placeholder="Search all your Perforce apps"
          />
          <div>
            <Heading as="h4" color="medium">You’re in Perfecto</Heading>
            <br /> 
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '0 16px' }}>
              {apps.map((app, index) => (
                <Link as="a" href="http://google.com" target="_blank"><Icon type={app} size="large" style={{ fill: 'green', width: '48px', height: '48px' }}  /></Link>
              ))}
            </div>
          </div>
          <br />
          <div>
            <Heading as="h4" color="medium">Recommended Products</Heading>
            <br /> 
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '0 16px' }}>
              {apps.map((app, index) => (
                <Link as="a" href="http://google.com" target="_blank"><Icon type={app} size="large" style={{ fill: 'green', width: '48px', height: '48px' }}  /></Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleAppsMenu;
