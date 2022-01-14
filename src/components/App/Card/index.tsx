import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { FaHammer, FaAppleAlt, FaLuggageCart } from 'react-icons/fa';

import './style.scss';

function Card() {
  return (
    <div className="app-cpn-card p-4 bg-white mb-4 d-flex align-align-items-center">
      <div className="col-4">
        <StaticImage
          src="../../../assets/images/post-default-thumb.jpg"
          alt="Event placeholder image"
        />
      </div>
      <div className="col-8">
        <div className="d-flex justify-content-between align-items-center top-intro mb-3">
          <Link to="/">Arquitectura Mixta</Link>
          <button type="button" className="btn card-btn-style">
            Edit
          </button>
        </div>
        <div className="bottom-intro">
          <div className="mb-3 fs-6">
            <FaHammer className="me-1" />
            <FaAppleAlt />
          </div>
          <div className="desc">
            We are a study-workshop of bioarchitecture, formed by a group of
            people who work in the development of sustainable habitats through
            architecture with natural materials, based on respect and
            understanding of the social and environmental context in which we
            live. We aim to open a... more
          </div>
          <div className="d-flex align-items-center text-with-icon mt-3">
            <FaLuggageCart className="me-3 fs-5" />
            Volunteers
          </div>
          <div className="d-flex align-items-end flex-column address">
            <div>01 984 120 6636</div>
            <div>Tulum, ROO MX</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
