import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function AppSkeleton(props) {
  return <Skeleton {...props} />;
}

export default AppSkeleton;
