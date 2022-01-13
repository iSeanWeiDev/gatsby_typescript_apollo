import React from 'react';
import MapWithAMarker from '@/components/MapWithMarker';

export default function Map() {
  return (
    <MapWithAMarker
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBL7WaUNimPplzU5PkqY9b1en1STo2O8zk&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div className="w-100 h-100" />}
      containerElement={<div className="w-100 h-100" />}
      mapElement={<div className="w-100 h-100" />}
    />
  );
}
