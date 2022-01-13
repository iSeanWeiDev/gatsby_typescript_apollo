import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useAppNavbarQuery } from '@/graphql/internal';

function AppNavbar() {
  const { logo } = useAppNavbarQuery();
  return (
    <div>
      <GatsbyImage image={getImage(logo)} alt="desktop logo" />
    </div>
  );
}

export default AppNavbar;
