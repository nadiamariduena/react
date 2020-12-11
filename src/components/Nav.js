import React, { Component } from "react";

import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/" className="link-logo">
            <h3>LOGO</h3>
          </Link>

          <nav>
            <ul>
              <Link to="/shop" className="links-li-nav">
                <li>SHop</li>
              </Link>
              <Link to="/about" className="links-li-nav">
                <li>About</li>
              </Link>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
