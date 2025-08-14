import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

// const API_KEY = process.env.REACT_APP_API_KEY;

const weatherURL = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=69ac289b860228509ae4debe9aa01f06`

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="header">
        <h1 className='city'>New York, NY</h1>
        <p className='date'>Monday, 10:00 AM</p>
        <p className='temperature'>82°F</p>
        <p className='condition'>Cloudy</p>
      </header>
      <main>
        <SearchBar onSearch={(query) => console.log('Searching for:', query)} />
      </main>
      <section className="details">
        <div className="detail-item">
          <h2>Humidity</h2>
          <p>65%</p>
        </div>
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
  );
}

export default App;
