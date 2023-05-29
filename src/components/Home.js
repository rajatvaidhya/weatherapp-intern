import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = () => {
    navigate(`/weather/${city}`);
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const successCallback = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    navigate(`/weather/${latitude}/${longitude}`);
  };

  const errorCallback = (error) => {
    console.log("An error occurred while retrieving location.");
  };

  return (
    <>
      <div className="main-container">
        <div className="main-input-container">
          <div className="head-div">
            <h3
              style={{
                textAlign: "left",
                marginLeft: "1rem",
                color: "#7E64FF",
              }}
            >
              Weather App
            </h3>
          </div>
          <form action="/" onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                className="input-box"
                placeholder="Enter city name"
                onChange={handleInputChange}
              />
              <div className="separator"></div>
            </div>
          </form>
          <button onClick={handleLocation}>Get device location</button>
        </div>
      </div>
    </>
  );
};

export default Home;
