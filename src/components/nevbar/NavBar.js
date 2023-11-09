// src/components/NavBar.js
import React from 'react';

import './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <nav>
        {/* Add your navigation links here */}

        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Navbar
              </a>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;