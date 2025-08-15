import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("New York");
  const [searchQuery, setSearchQuery] = useState("");

  

  const fetchWeatherData = async (cityName) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`;

        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
        console.log(data)
        
      } catch (error) {
        console.log(error.message);
      } 
    };

  useEffect(() => {
      fetchWeatherData(city);
    },[city]);
  
  return (
  
    <div className="App">
       <SearchBar onSearch={(query) => fetchWeatherData(query)} />
      {weatherData && weatherData.main && weatherData.weather && (
        <>
      <header className="header">
        <h1 className='city'>{weatherData.name}</h1>
        <p className='date'>Monday, 10:00 AM</p>
        <p className='temperature'>{Math.round(weatherData.main.temp)}°</p>
        <p className='condition'>{weatherData.weather[0].main}</p>
        <div className="detail-item">
          <h2>Humidity</h2>
          <p>{Math.round(weatherData.main.humidity)}%</p>
        </div>
      </header>
      </>
      )}
      
      <section className="details">
        {/* <div className="detail-item">
          <h2>Humidity</h2>
          <p>{Math.round(weatherData.main.humidity)}</p>
        </div> */}
        <div className="detail-item">
          <h2>Wind Speed</h2>
          <p>10 mph</p>
        </div>
        <div className="detail-item">
          <h2>Visibility</h2>
          <p>10 miles</p>
        </div>
      </section>
    </div>
    

)}


export default App;
