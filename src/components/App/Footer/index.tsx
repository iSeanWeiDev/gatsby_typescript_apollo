import React from 'react';
import { Link } from 'gatsby';
import { FaFlagUsa } from 'react-icons/fa';
import './style.scss';

function AppFooter() {
  return (
    <footer className="app-cpn-footer">
      <div className="container">
        <ul>
          <li>
            <span>&copy; The Sustainable Network</span>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/terms-of-service/">Terms of Service</Link>
          </li>
          <li>
            <Link to="/privacy-policy/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/thesustainablenetwork">
              Facebook
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/thesustainablenetwork">
              Instagram
            </Link>
          </li>
        </ul>

        <div className="footer-language-unit">
          <Link to="/" className="btn footer-language">
            <FaFlagUsa className="me-2" />
            United States
          </Link>
        </div>
      </div>

      <div className="bottom-notes">Page generated in 0.5349 seconds.</div>
    </footer>
  );
}

export default AppFooter;
