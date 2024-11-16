import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function NavbarComponent() {
  return (
    <nav style={{
      width: '100%',
      backgroundColor: 'white',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem'
      }}>
        {/* Logo Side */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="RHIPFactory" style={{ height: '50px' }} />
        </div>

        {/* Navigation Links - Right Side */}
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/" style={{ color: 'blue', textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ color: 'blue', textDecoration: 'none' }}>About</Link>
          <Link to="/services" style={{ color: 'blue', textDecoration: 'none' }}>Services</Link>
          <Link to="/contact" style={{ color: 'blue', textDecoration: 'none' }}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;