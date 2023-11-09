// src/App.js
import React from 'react';
import NavBar from './components/nevbar/NavBar';
import Footer from './components/footer/Footer';
import SideComponent from './components/side/SideComponent';
import CentralContent from './components/central/CentralContent';
import './App.css'; // Import your CSS styles

function App() {
  return (
    <div>
      <NavBar />
      <div className="main-content">
        <SideComponent />
        <CentralContent />
        <SideComponent />
      </div>
      <Footer />
    </div>
  );
}

export default App;