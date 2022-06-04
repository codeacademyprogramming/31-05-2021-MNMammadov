import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { API_KEY, API_BASE_URL } from './api/config';
import AddingCityWeather from './components/AddingCityWeather';
import WeatherList from './components/WeatherList';
import useWeatherData from './hooks/useWeatherData';
import { IWeatherResponse } from './models';

function App() {
  const { data, setUrl } = useWeatherData();
  const [selectedWeathers, setSelectedWeathers] = React.useState<IWeatherResponse[]>([]);

  const handleAddWeather = (city: string) => {
    setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
  }

  React.useEffect(() => {
    if (data) {
      setSelectedWeathers((prevState) => [...prevState, data]);
    }
  }, [data]);

  return (
    <Container className="App">
      <AddingCityWeather onSearch={handleAddWeather} />
      <WeatherList selectedWeathers={selectedWeathers} />
    </Container>
  );
}

export default App;