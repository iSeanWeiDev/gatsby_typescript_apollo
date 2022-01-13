import React from 'react';
import { AppLayout } from '@/layouts';
import HomeCard from './card.cpn';
import HomeFilter from './filter.cpn';
import HomeMap from './map.cpn';

export default function Home() {
  return (
    <AppLayout
      title="The Sustainable Network"
      description=""
      className="home-page-wrapper"
    >
      <HomeFilter />
      <HomeCard />
      <HomeMap />
    </AppLayout>
  );
}
