import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import Weathercard from "../weatherCard/Weathercard";
import Loader from "../loader/Loader";
let lat;
let long;
const Weather = () => {
  const [locName, setLocname] = useState("");
  const [cityData, setCityData] = useState();
  const [weatherData, setWeatherData] = useState();
  const [load, setLoad] = useState(false);

  const options = {
    method: "GET",
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?&namePrefix=${locName}`,
    headers: {
      "X-RapidAPI-Key": "8aec979eadmsha4b49fde525a52cp148031jsn1d7ef5cec16f",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setLoad(true);
    if (locName.trim().length === 0) {
      alert("Provide Location");
      return;
    }
    try {
      const getLanLong = await axios.request(options);

      setCityData(getLanLong.data.data[0]);

      lat = getLanLong.data.data[0].latitude;
      long = getLanLong.data.data[0].longitude;

      const getWeather = await getWeatherData(cityData);
      setWeatherData(getWeather);
      setLocname("");
      setLoad(false);
    } catch (error) {
      setLoad(false);
      alert("Invalid Location");
      setLocname("");
      console.log(error);
    }
  };
  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1173534c0bf8bbe37c69ebe422be72a4&units=metric`
      );
      return response.data;
    } catch (error) {
      alert("Invalid No response");
      setLoad(false);
      console.log(error);
    }
  };
  const onChangeLoc = (event) => {
    if (locName.trim().length >= 0) {
      setCityData("");
      setWeatherData("");
    }
    setLocname(event.target.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="cenAll">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="input"
                value={locName}
                placeholder="name@example.com"
                onChange={onChangeLoc}
              />
              <label htmlFor="input">Location</label>
            </div>

            <button onClick={fetchData} className="btn btn-warning">
              Get Details
            </button>
          </div>
          {cityData && weatherData ? (
            <Weathercard cityData={cityData} weatherData={weatherData} />
          ) : load ? (
            <Loader />
          ) : null}
          <div className="dev">
            <h5>Developed By @Revanth NSR</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
