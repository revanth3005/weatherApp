import React from "react";
import "./weathercard.css";

const Weathercard = ({ cityData, weatherData }) => {
  return (
    <div className="container mt-5">
      <div className="placingCard">
        <div className="card details" style={{ width: "25rem" }}>

          <div class="card text-bg-dark" style={{height:'350px'}}>
            <img
              src={`icons/${weatherData.weather[0].icon}.png`}
              class="card-img"
              alt="..."
            />
            <div class="card-img-overlay">
              <h3 class="card-title">{cityData.name}</h3>
              <h4 class="card-text">
                {weatherData.main.temp}&nbsp;C<sup>o</sup>
              </h4>
              <p class="card-text">
                <small>Last updated 2 mins ago</small>
              </p>
              <h5>Sky: {weatherData.weather[0].main}</h5>
            </div>
          </div>

          <div className="card-body">
            <h5>Location: {cityData.name}</h5>
            <h5>Country: {cityData.country}</h5>
            <h5>
              Region: {cityData.region} &nbsp;{cityData.regionCode}
            </h5>
            <h5>Description: {weatherData.weather[0].description}</h5>
            <h5>Feels Like: {weatherData.main.feels_like} C<sup>o</sup> </h5>
            <h5>Humidity: {weatherData.main.humidity}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weathercard;
