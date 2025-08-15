import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("New York");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  const fetchWeatherData = async (cityName) => {
      try {
        setLoading(true);
        setError(null);
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`;


        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
        console.log(data)
        
        setCity(cityName); // Update the city state with the searched city
      } catch (error) {
        setError('Failed to fetch weather data. Please try again later.');
        console.log(error.message);
      } finally{
        setLoading(false);
      }
    };

  useEffect(() => {
      fetchWeatherData(city);
    },[city]);
  
  if (loading) return <div className="App">Loading...</div>;
  
  return (
  
    <div className="App">
       <SearchBar onSearch={(query) => fetchWeatherData(query)} />
      {error && <p className="error">{error}</p>}
      {weatherData && weatherData.main && weatherData.weather && (
        <>
      <header className="header">
        {/* TODO : Get State for the US */}
        <h1 className='city'>{weatherData.name}, {weatherData.sys.country}</h1>
        <p className='date'>Monday, 10:00 AM</p>
        <p className='temperature'>{Math.round(weatherData.main.temp)}°</p>
        <p className='feels-like'>Feels like {Math.round(weatherData.main.feels_like)}°</p>
        <img 
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather icon" />
        <p className='condition'>{weatherData.weather[0].main}</p>
        
      </header>
      
      
      <section className="details">
        <div className="detail-item">
          <h2>Humidity</h2>
          <p>{Math.round(weatherData.main.humidity)}</p>
        </div>
        <div className="detail-item">
          <h2>Wind Speed</h2>
          <p>{weatherData.wind.speed} mph</p>
        </div>
        <div className="detail-item">
          <h2>Visibility</h2>
          <p>{Math.round(weatherData.visibility/1609)} miles</p>
        </div>
      </section>
      </>
      )}
    </div>
    

)}


export default App;
