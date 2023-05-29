import React from "react";
import "./WeatherCard.css";
import { useNavigate } from "react-router-dom";

const WeatherCard = (props) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="main-info-container">
      <div className="head">
        <h3 style={{ marginLeft: "1rem" }}>
          <i
            className="fas fa-arrow-left"
            onClick={handleBackClick}
            style={{ cursor: "pointer" }}
          ></i>
          <span style={{ marginLeft: "1rem" }}>Weather App</span>
        </h3>
      </div>

      <img className="weather-img" src={props.image} alt="weather" />

      <div className="weather-info">
        <h1 style={{ textAlign: "center" }}>{props.temperature}°C</h1>
        <p className="first-p">{props.condition}</p>
        <p>
          <i className="fas fa-map-marker-alt"></i> {props.location}
        </p>
      </div>

      <div className="other-info-container">
        <div className="first-container">
          <i
            style={{ marginRight: "1rem" }}
            className="fa-solid fa-temperature-full"
          ></i>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ margin: "0", fontWeight: "500", fontSize: "1.1rem" }}>
              {props.wind} km/hr
            </p>
            <p style={{ margin: "0", fontSize: "0.9rem" }}>Wind Speed</p>
          </div>
        </div>

        <div className="vertical-ruler"></div>

        <div className="second-container">
          <i
            style={{ marginRight: "1rem" }}
            className="fa-solid fa-droplet"
          ></i>
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  margin: "0",
                  fontWeight: "500",
                  fontSize: "1.1rem",
                }}
              >
                {props.humidity}%
              </p>
              <p style={{ margin: "0", fontSize: "0.9rem" }}>Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
