import React, {useState, useEffect} from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

function NavBar(props) {

    return (
      <div className="navbar-expand-lg navbar-light bg-light navbar">
        <Link to="/">
          <span className="navbar-brand">Mallory Dalley</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <Link to="/about">
              <li className="nav-link">About</li>
            </Link>
            <Link to="/portfolio">
              <li className="nav-link">Portfolio</li>
            </Link>
            <Link to="/contact">
              <li className="nav-link">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    );
}

export default NavBar;