import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { API_KEY, API_BASE_URL } from './api/config';
import WeatherDataFetch from './service/WeatherDataFetch';
import AddingCityWeather from './components/AddingCityWeather';
import WeatherList from './components/WeatherList';

function App() {
  const { data, error, isLoading, setUrl } = WeatherDataFetch();

  return (
    <Container className="App">
      <AddingCityWeather
        onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)}
      />
      {data && <WeatherList weathers={data.list} />}
    </Container>
  );
}

export default App;