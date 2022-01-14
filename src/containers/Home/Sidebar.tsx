import React from 'react';
import { Link } from 'gatsby';
import { ImLeaf } from 'react-icons/im';
import { IoIosClose } from 'react-icons/io';
import { HiCheck } from 'react-icons/hi';

import Checkbox from 'react-custom-checkbox';

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
    <div className="sidebar">
      <div className="bl">
        <div className="d-flex align-items-center">
          <ImLeaf className="me-1 text-success fs-6" />
          <p className="filter-text">3 Filters</p>
        </div>
        <Link to="/">Clear All filters</Link>
        {tags.map((item) => (
          <ul key={item.id}>
            <li>
              <span>{item.tag}</span>
              <IoIosClose className="fs-4 close-icon" />
            </li>
          </ul>
        ))}
      </div>

      <div className="bl checkboxes-container">
        <p>Features</p>
        {features.map((feature) => (
          <div key={feature.id} className="menu-item">
            <Checkbox
              checked
              icon={
                <div className="cbx-icon">
                  <HiCheck />
                </div>
              }
              className="cbx"
              labelClassName="pe-2"
              label={feature.item}
            />
          </div>
        ))}
      </div>

      <div className="bl checkboxes-container">
        <p>Features</p>
        {features.map((feature) => (
          <div key={feature.id} className="menu-item">
            <Checkbox
              checked
              icon={
                <div className="cbx-icon">
                  <HiCheck />
                </div>
              }
              className="cbx"
              labelClassName="pe-2"
              label={feature.item}
            />
          </div>
        ))}
      </div>

      <Link to="/">View all</Link>
    </div>
  );
}
