// src/App.js (COMPLETE CODE)

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css'; 

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

function App() {
    // State management (useState)
    const [city, setCity] = useState('Toronto'); // Input field state
    const [searchCity, setSearchCity] = useState('Toronto'); // State that triggers API call
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to fetch weather data (useEffect dependency)
    const fetchWeather = useCallback(async () => {
        if (!searchCity || !API_KEY) {
            setError("API Key or city is missing.");
            return;
        }

        setLoading(true);
        setError(null);
        try {
            const url = `${BASE_URL}?q=${searchCity}&appid=${API_KEY}`;
            const response = await axios.get(url);
            setWeatherData(response.data);
        } catch (err) {
            if (err.response && err.response.status === 404) {
                 setError(`City not found: ${searchCity}.`);
            } else {
                 setError(`An error occurred while fetching data.`);
            }
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    }, [searchCity]); 

    // Effect (useEffect) to run fetchWeather on mount and on searchCity change
    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);

    // Handle form submission (Interactivity)
    const handleSubmit = (e) => {
        e.preventDefault();
        // This updates searchCity, which in turn triggers the useEffect hook
        setSearchCity(city); 
    };

    // JSX Return (UI/UX)
    return (
        <div className="App">
            <h1>🌍 Simple Weather App</h1>

            {/* Search feature */}
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    placeholder="Enter city name (e.g., London)"
                    value={city} // Uses 'city' state
                    onChange={(e) => setCity(e.target.value)} // Uses 'setCity'
                    required
                />
                <button type="submit">Get Weather</button>
            </form>

            {/* Loading and Error Display */}
            {loading && <p>Loading weather data...</p>} {/* Uses 'loading' state */}
            {error && <p className="error-message">Error: {error}</p>} {/* Uses 'error' state */}

            {/* Weather Display (Uses 'weatherData' state) */}
            {!loading && !error && <WeatherDisplay data={weatherData} />} 
        </div>
    );
}

export default App;