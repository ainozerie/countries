import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <logo>
                <h1>Countries by ainozerie</h1>
            </logo>
            <nav>
          <ul>
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