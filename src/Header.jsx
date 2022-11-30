import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <li>
          <Link to="/"> Strona główna</Link>
        </li>
        <li>
          <Link to="/react"> React</Link>
        </li>
        <li>
          <Link to="/redux"> Redux</Link>
        </li>
        <li>
          <Link to="/mobx"> MobX</Link>
        </li>
        <li>
          <Link to="/typescript"> TypeScript</Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
