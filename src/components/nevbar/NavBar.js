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
              <a class="navbar-brand" href="#">
                Wings1
              </a>
              <a class="navbar-brand" href="#">
                Java
              </a>
              <a class="navbar-brand" href="#">
                Python
              </a>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;