import React from 'react';
import { Link } from 'gatsby';
// import USFlag from '@/assets/images/icons/us-flag.svg';
import './style.scss';

// const footerItems = {
//   {id: 1, item: `About`, route: `/about`},
// }

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
            {/* <span className="flag us" /> */}
            {/* <USFlag className='flag' /> */}
            United States
          </Link>
        </div>
      </div>

      <div className="bottom-notes">Page generated in 0.5349 seconds.</div>
    </footer>
  );
}

export default AppFooter;
