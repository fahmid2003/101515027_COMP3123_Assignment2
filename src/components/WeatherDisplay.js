import React from 'react';

// The component receives the fetched weather data as a prop named 'data'
const WeatherDisplay = ({ data }) => {
    // 1. Check for data existence
    if (!data) {
        return <div className="weather-display">Please search for a city to see the weather.</div>;
    }

    // --- Data Processing ---
    
    // 2. Convert temperature from Kelvin (OpenWeatherMap default) to Celsius.
    // Formula: T(°C) = T(K) - 273.15. We fix it to one decimal place.
    const tempCelsius = (data.main.temp - 273.15).toFixed(1);

    // 3. Construct the icon URL using the icon code from the 'weather' array
    // Note: data.weather is an array, we use the first element [0]
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

    // --- JSX Rendering ---

    return (
        <div className="weather-display">
            <h2>{data.name}, {data.sys.country}</h2>
            
            <div className="weather-details">
                {/* Weather Icon */}
                <img src={iconUrl} alt={data.weather[0].description} />
                
                {/* Temperature */}
                <p className="temperature">{tempCelsius}°C</p>
                
                {/* Condition and Description */}
                <p className="condition">
                    **{data.weather[0].main}**: {data.weather[0].description}
                </p>
                
                {/* Other Details */}
                <p>Humidity: **{data.main.humidity}%**</p>
                <p>Wind Speed: **{data.wind.speed} m/s**</p>
            </div>
        </div>
    );
};

export default WeatherDisplay;