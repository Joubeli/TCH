import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "350px",
  height: "350px",
};

const center = {
  lat: 36.87217502028581,
  lng: 10.264995646027437,
};


const position = {
  lat: 36.87217502028581,
  lng: 10.264995646027437,
}

const GMap = () => {
  const { isLoaded, LoadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  if (LoadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
      >
        <Marker position={position} />  
        
      </GoogleMap>
    </div>
  );
};

export default GMap;
