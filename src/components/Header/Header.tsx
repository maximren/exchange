import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header: FunctionComponent = () => {
  return (
    <div className="header-container">
      <span className="header-title">Exchange references rates by the European Central Bank</span>
      <ul className="header-links">
        <li><NavLink activeStyle={{ color: 'white'}} exact to="/">Latest Rates</NavLink></li>
        <li><NavLink activeStyle={{ color: 'white'}} to="/exchange">Exchange specific amount</NavLink></li>
      </ul>
    </div>
  )
}

export default Header;
