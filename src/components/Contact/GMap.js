import React from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
// added the following 6 lines.
import mapboxgl from 'mapbox-gl';
// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
const GMap = () => {
  return (
    <ReactMapGL
      style={{
        width: 350,
        height: 350,
        boxShadow: `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`,
        
      }}
      mapboxAccessToken="pk.eyJ1IjoiZmF0bWFnaCIsImEiOiJjbDFuZ2d5YnAwYzh5M2JwZ2k3bmFtbmc3In0.du_LMQnTkopC6MHRT8YeEw"
      initialViewState={{
        longitude: 10.264813253374376,
        latitude: 36.871531286551715,
        zoom: 10,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
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
