import React from 'react';
import { AppCard } from '@/components/App';

export default function CardSection() {
  return (
    <div className="home-card-section-container mx-4">
      <p className="main-heading">Sustainable Agriculture near Everywhere</p>
      <div className="form-group sort-menu row mb-3 hide d-flex justify-content-end align-items-center">
        <label htmlFor="sortlocation" className="col-3 m-0">
          Sort:
          <select
            className="form-control form-control-sm col-9 pe-0"
            name="sort"
            id="sortlocation"
          >
            <option value="distance" selected>
              Closest Location
            </option>
            <option value="distance">Newest Location</option>
            <option value="popular">Most Popular</option>
            <option value="alpha">Alphabet</option>
          </select>
        </label>
      </div>

      <div className="mb-1">
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
      </div>
    </div>
  );
}
