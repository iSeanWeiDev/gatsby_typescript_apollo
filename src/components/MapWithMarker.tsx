import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

type MapWithMarkerProps = {
  markData: any[];
};

const MapWithAMarker = withScriptjs(
  withGoogleMap((props: MapWithMarkerProps) => {
    const { markData } = props;
    return (
      <GoogleMap
        defaultZoom={markData.length > 0 ? 3 : 8}
        defaultCenter={{
          lat: markData.length > 0 ? markData[0].latitude : 39.226,
          lng: markData.length > 0 ? markData[0].longitude : -101.71,
        }}
      >
        {markData &&
          markData.map((el) => (
            <Marker position={{ lat: el.latitude, lng: el.longitude }} />
          ))}
      </GoogleMap>
    );
  }),
);
export default MapWithAMarker;
