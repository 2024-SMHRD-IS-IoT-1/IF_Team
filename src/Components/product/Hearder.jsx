import React,{useState,useEffect} from 'react';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Planter Mood Lighting</h1>
        <ul className="nav-links">
          <li><a href="#gallery">Products</a></li>
          <li><a href="#details">Details</a></li>
          <li><a href="#categories">Usage</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;