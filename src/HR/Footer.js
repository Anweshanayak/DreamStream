import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#f1f1f1',
        padding: '2rem',
        fontSize: '0.9rem',
        color: '#555',
        borderTop: '1px solid #ddd',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: '2rem',
        }}
      >
        {/* Logo Section */}
        <div style={{ flex: 1, marginBottom: '1rem' }}>
          <h3 style={{ fontWeight: 'bold' }}>Logo</h3>
        </div>

        {/* Links Section */}
        <div style={{ flex: 1, marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Contact us</h4>
          <p>Home</p>
        </div>

        {/* Tools Section */}
        <div style={{ flex: 1, marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Tools</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Offer Letter Generator</li>
            <li>Resume Analyzer</li>
            <li>Reporting</li>
            <li>Team Assignment</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div style={{ flex: 1, marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Follow Us</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>X</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
        <p>© All rights reserved.</p>
        <p>
          <a href="#" style={{ color: '#555', textDecoration: 'none', marginRight: '1rem' }}>
            Privacy Policy
          </a>
          <a href="#" style={{ color: '#555', textDecoration: 'none', marginRight: '1rem' }}>
            Terms of Service
          </a>
          <a href="#" style={{ color: '#555', textDecoration: 'none' }}>
            Cookies Settings
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
