import React from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
const GMap = () => {
  return (
    <ReactMapGL
      style={{
        width: 300,
        height: 300,
        boxShadow: `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`,
        border: `solid 1px #7c7c7c`,
      }}
      mapboxAccessToken="pk.eyJ1IjoiZmF0bWFnaCIsImEiOiJjbDFuZ2d5YnAwYzh5M2JwZ2k3bmFtbmc3In0.du_LMQnTkopC6MHRT8YeEw"
      initialViewState={{
        longitude: 10.264813253374376,
        latitude: 36.871531286551715,
        zoom: 10,
      }}
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
    >
      <Marker
        longitude={10.264813253374376}
        latitude={36.871531286551715}
      ></Marker>
      <NavigationControl />
    </ReactMapGL>
  );
};

export default GMap;
