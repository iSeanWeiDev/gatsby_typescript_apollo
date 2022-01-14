import React from 'react';
import { AppLayout } from '@/layouts';

import {
  HomeCardContainer,
  HomeMapContainer,
  HomeSidebarContainer,
} from '@/containers/Home';

export default function Home() {
  return (
    <AppLayout
      title="The Sustainable Network"
      description=""
      className="home-page-wrapper"
    >
      <div className="d-flex position-relative">
        <div className="col-2 py-4 home-sidebar-container">
          <HomeSidebarContainer />
        </div>
        <div className="col-6 py-4 section-container">
          <HomeCardContainer />
        </div>
        <div className="col-4 px-2 py-1 home-map-container">
          <HomeMapContainer />
        </div>
      </div>
    </AppLayout>
  );
}
