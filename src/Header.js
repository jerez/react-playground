import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => 
    <header className="app-header">
        <h1 className="app-title">This is a dumb Header</h1>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/first">First</Link>
          </li>
          <li>
            <Link to="/second">Second</Link>
          </li>
        </ul>
    </header>

export default Header;  