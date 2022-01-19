import React, { useState } from 'react';
import { GoLocation } from 'react-icons/go';
import { TiWorldOutline } from 'react-icons/ti';
import { AiOutlinePlus, AiOutlineDown } from 'react-icons/ai';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useAppComponentQuery } from '@/graphql/internal';
import { buildings, city, navLinks, mobNavLinks } from './mock-data';
import './style.scss';

function AppNavbar() {
  const { logo, mobLogo } = useAppComponentQuery();
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
    <header className="app-cpn-header">
      <div className="web-nav">
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
            <button
              type="button"
              className="btn btn-1 d-flex align-items-center"
            >
              <AiOutlinePlus className="me-1" />
              Add Organization
            </button>
            <button type="button" className="btn btn-2">
              Hi John
            </button>
          </div>
        </div>

        <div className="dropdown-container-mob">
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
      </div>

      <div className="mob-nav">
        <div className="mob-nav-top mb-3 px-3">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar" />
            <span className="toggler-icon middle-bar" />
            <span className="toggler-icon bottom-bar" />
          </button>

          <div className="header-logo-mob">
            <GatsbyImage image={getImage(mobLogo)} alt="desktop logo" />
          </div>

          <button type="button" className="btn btn-2">
            Hi John
          </button>
        </div>

        <div className="dropdown-container px-3">
          <div className="search-fields d-flex flex-column">
            <div className="col-12 dropdown">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <TiWorldOutline />
                </span>
                <input
                  type="search"
                  className="form-control shadow-none"
                  placeholder="Search Green Building,Sustainable Agricult..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  autoCorrect="off"
                  autoComplete="off"
                  onClick={handleContentOpen}
                />
              </div>
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
            <div className="col-12 dropdown">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <GoLocation />
                </span>
                <input
                  type="search"
                  className="form-control shadow-none"
                  placeholder="City, State or Zip"
                  aria-describedby="basic-addon1"
                  autoCorrect="off"
                  autoComplete="off"
                  onClick={handleCityContentOpen}
                />
              </div>
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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mob-navbar-nav">
            <li className="nav-item-main">
              <button
                type="button"
                className="btn btn-mob d-flex align-items-center"
              >
                <AiOutlinePlus className="me-1" />
                Add Organization
              </button>

              <button type="button" className="btn">
                <TiWorldOutline className="me-1" />
                En
              </button>
            </li>
            {mobNavLinks.map((navLink) => (
              <li
                key={navLink.id}
                className="d-flex align-items-center nav-item"
              >
                <navLink.Icon className={`me-2 ${navLink.className}`} />
                <Link to="/">{navLink.link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default AppNavbar;
