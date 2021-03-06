import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <h1><Link to='/'>COUNTRIES</Link></h1>
            </div>
            <nav>
          <ul>
            <li id='searchLi'>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/countries'>Countries</Link>
            </li>
          </ul>
        </nav>
        </header>
    );
};

export default Header;