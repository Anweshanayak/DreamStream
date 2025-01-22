import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: '#F8F9FA',
        borderBottom: '1px solid #11181C',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="container-fluid" style={{ maxWidth: '1440px' }}>
        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontFamily: 'cursive',
            fontSize: '1.5rem',
            textDecoration: 'none',
            color: '#11181C',
          }}
        >
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={{
                  color: '#11181C',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#007BFF')}
                onMouseLeave={(e) => (e.target.style.color = '#11181C')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/offerlettergenerator"
                style={{
                  color: '#11181C',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#007BFF')}
                onMouseLeave={(e) => (e.target.style.color = '#11181C')}
              >
                Offer Letter Generator
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/resumeanalyzer"
                style={{
                  color: '#11181C',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#007BFF')}
                onMouseLeave={(e) => (e.target.style.color = '#11181C')}
              >
                Resume Analyzer
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/teams"
                style={{
                  color: '#11181C',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#007BFF')}
                onMouseLeave={(e) => (e.target.style.color = '#11181C')}
              >
                Teams
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contactus"
                style={{
                  color: '#11181C',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#007BFF')}
                onMouseLeave={(e) => (e.target.style.color = '#11181C')}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link to="/signup">
              <button className="btn btn-dark me-2">Sign up</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-outline-dark">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
