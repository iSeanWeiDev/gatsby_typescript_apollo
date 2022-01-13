import { Link } from 'gatsby';
import React from 'react';

const tags = [
  { id: 1, tag: `Offers Certificate` },
  { id: 2, tag: `Volunteer` },
  { id: 3, tag: `Workshops` },
];

const features = [
  { id: 1, item: `Offers Certificate`, value: `offersCertificate` },
  { id: 2, item: `Volunteer`, value: `volunteer` },
  { id: 3, item: `Workshops`, value: `workshops` },
];

export default function Sidebar() {
  return (
    <div className="home-sidebar-container">
      <div className="bl">
        <div className="d-flex align-items-center">
          {/* Icon */}
          <p className="filter-text">3 Filters</p>
        </div>
        <Link to="/">Clear All filters</Link>
        {tags.map((item) => (
          <ul key={item.id}>
            <li>
              <span>{item.tag}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x ms-1 icon"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </li>
          </ul>
        ))}
      </div>

      <div className="bl checkboxes-container">
        <p>Features</p>
        {features.map((feature) => (
          <div key={feature.id} className="menu-item">
            <input
              type="checkbox"
              name="certificate"
              value={feature.value}
              className="inp-cbx"
              id="certificate"
            />
            <label className="cbx" htmlFor="certificate">
              <span>
                <svg width="12px" height="9px" viewBox="0 0 12 9">
                  <polyline points="1 5 4 8 11 1" />
                </svg>
              </span>
              <span>{feature.item}</span>
            </label>
          </div>
        ))}
      </div>

      <div className="bl checkboxes-container">
        <p>Category</p>
        {features.map((feature) => (
          <div key={feature.id} className="menu-item">
            <input
              type="checkbox"
              name="certificate"
              value={feature.value}
              className="inp-cbx"
              id="certificate"
            />
            <label className="cbx" htmlFor="certificate">
              <span>
                <svg width="12px" height="9px" viewBox="0 0 12 9">
                  <polyline points="1 5 4 8 11 1" />
                </svg>
              </span>
              <span>{feature.item}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
