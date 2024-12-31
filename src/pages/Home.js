import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Fantasy Football</h1>
      <p>Your ultimate destination for managing your fantasy football team.</p>
      <div className="links">
        <Link to="/players">View Players</Link>
        <Link to="/teams">View Teams</Link>
        <Link to="/draft">Join Draft</Link>
      </div>
    </div>
  );
};

export default Home;