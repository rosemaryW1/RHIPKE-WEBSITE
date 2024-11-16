import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  const socialIconStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <footer style={{
      backgroundColor: '#1A1A1A',
      color: 'white',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{
        padding: '2rem'
      }}>
        {/* Top Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '2rem'
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="RHIPFactory" style={{ height: '40px' }} />
            <span style={{ marginLeft: '10px' }}>
              STARTUP VENTURE STUDIO
            </span>
          </div>

          {/* Navigation and Social Icons */}
          <div>
            {/* Navigation Links */}
            <div style={{ 
              display: 'flex', 
              gap: '2rem',
              borderBottom: '1px solid #333',
              paddingBottom: '1rem',
              marginBottom: '1rem'
            }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link>
              <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
              <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
            </div>

            {/* Social Icons */}
            <div style={{ 
              display: 'flex', 
              gap: '1rem',
              justifyContent: 'center'
            }}>
              <a href="#" style={socialIconStyle}>
                <FaFacebook style={{ color: '#1A1A1A' }} />
              </a>
              <a href="#" style={socialIconStyle}>
                <FaInstagram style={{ color: '#1A1A1A' }} />
              </a>
              <a href="#" style={socialIconStyle}>
                <FaTwitter style={{ color: '#1A1A1A' }} />
              </a>
              <a href="#" style={socialIconStyle}>
                <FaYoutube style={{ color: '#1A1A1A' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1rem'
        }}>
          {/* Copyright */}
          <div style={{ color: '#666' }}>
            2024 Rhipfactory copyright
          </div>

          {/* Legal Links */}
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link to="/privacy" style={{ color: '#666', textDecoration: 'none' }}>
              Privacy & Policy
            </Link>
            <Link to="/terms" style={{ color: '#666', textDecoration: 'none' }}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;