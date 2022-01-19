import React, { useState } from 'react';
import { GoLocation } from 'react-icons/go';
import { TiWorldOutline } from 'react-icons/ti';
import { AiOutlinePlus, AiOutlineDown } from 'react-icons/ai';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useAppComponentQuery } from '@/graphql/internal';
import { buildings, city, navLinks } from './mock-data';
import './style.scss';

function AppNavbar() {
  const { logo } = useAppComponentQuery();
  const [fieldContentOpen, setFieldContentOpen] = useState<boolean>(false);
  const [cityContentOpen, setCityContentOpen] = useState<boolean>(false);

  const handleContentOpen = () => {
    setFieldContentOpen(!fieldContentOpen);
    setCityContentOpen(false);
  };
  const handleCityContentOpen = () => {
    setCityContentOpen(!cityContentOpen);
    setFieldContentOpen(false);
  };

  return (
    <header className="app-cpn-header px-2 py-1">
      <div className="header-top d-flex align-items-center justify-content-between">
        <div className="header-logo">
          <GatsbyImage image={getImage(logo)} alt="desktop logo" />
        </div>
        <div className="dropdown-container">
          <div className="search-fields d-flex">
            <div className="col-6 dropdown">
              <TiWorldOutline className="ps-2 pe-2 fs-1 icon-others" />
              <input
                type="search"
                placeholder="Search Green Building,Sustainable Agricult..."
                autoCorrect="off"
                autoComplete="off"
                onClick={handleContentOpen}
              />
              <div
                className={`dropdown-content ${
                  fieldContentOpen && `open-search-fields-content`
                }`}
              >
                {buildings.map((item) => (
                  <Link key={item.id} to="/">
                    <item.Icon className="me-3" />
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-6 dropdown">
              <GoLocation className="ps-2 pe-2 fs-3 icon-others" />
              <input
                type="search"
                placeholder="City, State or Zip"
                autoCorrect="off"
                autoComplete="off"
                onClick={handleCityContentOpen}
              />
              <div
                className={`dropdown-content ${
                  cityContentOpen && `open-search-fields-content`
                }`}
              >
                {city.map((item) => (
                  <Link key={item.id} to="/">
                    <item.Icon className="me-3" />
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex pe-2 align-items-center justify-content-end">
          <button type="button" className="btn btn-1 d-flex align-items-center">
            <AiOutlinePlus className="me-1" />
            Add Organization
          </button>
          <button type="button" className="btn btn-2">
            Hi John
          </button>
        </div>
      </div>

      <div className="header-bottom d-flex align-items-center justify-content-center pt-4">
        <ul className="d-flex justify-content-between align-items-center nav-menu">
          {navLinks.map((navLink) => (
            <li key={navLink.id} className="d-flex align-items-center">
              <navLink.Icon className={`me-2 ${navLink.className}`} />
              <Link to="/">{navLink.link}</Link>
            </li>
          ))}
          <li>
            <div className="dropdown">
              <button type="button" className="dropbtn">
                More Categories
              </button>
              <AiOutlineDown className="ifs" />
              <div className="dropdown-content">
                {buildings.map((item) => (
                  <Link key={item.id} to="/">
                    <item.Icon className={`me-3 ${item.className}`} />
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button type="button" className="dropbtn">
                Support & Others
              </button>
              <AiOutlineDown className="ifs" />
              <div className="dropdown-content">
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default AppNavbar;
