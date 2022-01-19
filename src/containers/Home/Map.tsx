import React from 'react';
import MapWithAMarker from '@/components/MapWithMarker';
import { IGeoLocation } from '@/types/place';
import { AppSkeleton } from '@/components/App';

type HomeMapProps = {
  loading: boolean;
  resources: IGeoLocation[];
};

export default function Map({ loading, resources }: HomeMapProps) {
  return (
    <div className="home-map">
      {loading ? (
        <AppSkeleton height="100%" />
      ) : (
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnz-DRzCGY15PDKpYBPbDimETggn9qr8I&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div className="w-100 h-100" />}
          containerElement={<div className="w-100 h-100" />}
          mapElement={<div className="w-100 h-100" />}
          markData={resources}
        />
      )}
    </div>
  );
}
