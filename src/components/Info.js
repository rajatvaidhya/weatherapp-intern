import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Haze from "../icons/haze.png";
import Clear from "../icons/clear.png";
import Rainy from "../icons/rainy.png";
import Snow from "../icons/snow.png";
import Storm from "../icons/storm.png";
import Cloudy from "../icons/cloudy.png";
import Showers from "../icons/showers.png";
import Loader from "./Loader";
import WeatherCard from "./WeatherCard";

const Info = () => {
  const { city } = useParams();
  const { latitude } = useParams();
  const { longitude } = useParams();
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [wind, setWind] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const getWeatherDetails = async () => {
    setLoading(true);

    const options = {
      method: "GET",
      url: "https://yahoo-weather5.p.rapidapi.com/weather",
      params: {
        location: city,
        lat: latitude,
        long: longitude,
        format: "json",
        u: "f",
      },
      headers: {
        "X-RapidAPI-Key": "2b7bd6befamsh6d093cfb8e2236dp1121b0jsn3f5b3bb18397",
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setLoading(false);
      const Temp = (
        (response.data.current_observation.condition.temperature - 32) *
        (5 / 9)
      ).toFixed(1);
      const Humidity = response.data.current_observation.atmosphere.humidity;
      const Condition = response.data.current_observation.condition.text;
      const Wind = response.data.current_observation.wind.speed;
      const Location =
        response.data.location.city + ", " + response.data.location.country;
      setTemperature(Temp);
      setHumidity(Humidity);
      setCondition(Condition);
      setLocation(Location);
      setWind(Wind);

      if (Condition === "Haze") {
        setImage(Haze);
      } else if (Condition === "Storm") {
        setImage(Storm);
      } else if (Condition === "Rainy") {
        setImage(Rainy);
      } else if (Condition === "Cloudy" || Condition === "Mostly Cloudy") {
        setImage(Cloudy);
      } else if (
        Condition === "Sunny" ||
        Condition === "Fair" ||
        Condition === "Clear"
      ) {
        setImage(Clear);
      } else if (Condition === "Snow") {
        setImage(Snow);
      } else if (Condition === "Showers") {
        setImage(Showers);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWeatherDetails();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <WeatherCard
          image={image}
          temperature={temperature}
          condition={condition}
          location={location}
          humidity={humidity}
          wind={wind}
        />
      )}
    </>
  );
};

export default Info;
