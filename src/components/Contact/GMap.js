import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";

const Librairies = ["Places"];

const mapContainerStyle = {
  width: "300px",
  height: "300px",
};

const center = {
  lat: 36.87217502028581,
  lng: 10.264995646027437,
};

const GMap = () => {
  const { isLoaded, LoadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    Librairies,
  });

  if (LoadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
      ></GoogleMap>
    </div>
  );
};

export default GMap;
