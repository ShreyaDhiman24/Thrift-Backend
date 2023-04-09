// import React from "react";
// import '../css/Geolocation.css';

// const Geolocation = () => {
//     return (
//         <div fluid className="container bg-glassmorphism">
//             <h1><strong>Geolocation API: Search Nearby NGOs</strong></h1>
//             <div className="lg ">
//                 <div className="lg:ml-[calc(300px+4vw)] w-11/12 mx-auto lg:text-left">
//                 </div>
//             </div>
//         </div>
//     );
// };




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
