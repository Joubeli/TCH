import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";


const GMap = () => {
  const [viewport, setViewport] = useState({
    longitude: 10.264813253374376,
    latitude: 36.871531286551715,
    zoom: 10,
  });
  
  return (
    <ReactMapGL
      {...viewport}
      style={{ width: 300, height: 300, boxShadow: `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`, border: `solid 1px #7c7c7c`}}
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
        
      mapboxAccessToken='pk.eyJ1IjoiZmF0bWFnaCIsImEiOiJjbDFuZ2d5YnAwYzh5M2JwZ2k3bmFtbmc3In0.du_LMQnTkopC6MHRT8YeEw'     

    >
      <Marker 
        longitude={10.264813253374376} 
        latitude={36.871531286551715}
        >
        {/* <img src={pin} /> */}
      </Marker>
    </ReactMapGL>
  );
};

export default GMap;
