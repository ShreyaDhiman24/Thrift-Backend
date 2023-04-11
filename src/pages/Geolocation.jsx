import React, { useEffect, useState } from "react";

function LatLon() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);

  return (
    <div className="container">
      <h1>{lat} location {lon}</h1>
    </div>
  );
}

export default LatLon;
