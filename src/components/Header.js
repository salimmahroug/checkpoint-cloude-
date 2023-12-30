// src/components/Header.jsx
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Google Map</div>
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Fonctionnalités</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
