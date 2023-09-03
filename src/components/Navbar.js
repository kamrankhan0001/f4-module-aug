import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav>
      <div className="container">
        <h1>Dictionary App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/history">History</Link></li>
        </ul>
      </div>
    </nav>
    <Outlet />
    </>
  );
};

export default Navbar;
