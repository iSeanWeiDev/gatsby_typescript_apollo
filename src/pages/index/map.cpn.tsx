import React from 'react';
import MapWithAMarker from '@/components/MapWithMarker';

function HomeMap() {
  return (
    <MapWithAMarker
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBL7WaUNimPplzU5PkqY9b1en1STo2O8zk&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default HomeMap;
