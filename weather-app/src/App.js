import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import AddingCityWeather from './components/AddingCityWeather';
// import WeatherCard from './components/WeatherCard';


function App() {
  return (
    <Container className="App">
      <AddingCityWeather />
    </Container>
  );
}

export default App;