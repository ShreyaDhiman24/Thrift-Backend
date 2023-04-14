import React, { useState, useEffect } from "react";
import '../css/Geolocation.css';

function Geolocation() {
  const [nearbyNgos, setNearbyNgos] = useState([]);
  const [userLocation, setUserLocation] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setUserLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
        

        // // Use the latitude and longitude to search for nearby NGOs
        // const apiEndpoint = `https://api.ngoadvisor.net/api/v1/directory?lat=${latitude}&lng=${longitude}`;
        // fetch(apiEndpoint)
        //   .then(response => response.json())
        //   .then(data => {
        //     setNearbyNgos(data);
        //   });
      });
    }
  }, []);

  return (
    <div className="container glassmorphism geolocation-container" id="cont">
      <div className="user-location">
        <hr></hr>
        <h1>User Location</h1>
        <hr></hr>
        <p className="user-location-text">{userLocation}</p>
      </div>
      <div className="nearby-ngos">
        <hr></hr>
        <h1>Nearby NGOs</h1>
        <hr></hr>
        <ul>
          {nearbyNgos.map((ngo, index) => (
            <li key={index}>{ngo.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Geolocation;
