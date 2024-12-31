import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <h1>Fantasy Football League</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/players">Players</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/draft">Draft</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;