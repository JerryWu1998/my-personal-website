import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Home.css';

function Home() {
  const [weather, setWeather] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=40.72&longitude=-74.00&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m');
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    fetchWeatherData();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container"> 
      <div className="text-box">
        <h1>Welcome to my website!</h1>
        <p className="current-time">Current time in New York: {currentTime}</p>
        {weather && (
          <div className="weather-info"> 
            <p>Weather in New York: {weather.current_weather.temperature}°C</p>
          </div>
        )}
      </div>
    </div>
  );
  
}

export default Home;
