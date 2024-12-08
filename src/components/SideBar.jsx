import React from 'react';
import { Link } from 'react-router-dom';
import { links } from './data';

const SideBar = () => {
  return (
    <ul className="links">
      {links.map((link) => {
        return (
          <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SideBar;
