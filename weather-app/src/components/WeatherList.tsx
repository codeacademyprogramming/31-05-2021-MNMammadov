import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { IWeatherResponse } from '../models';
import WeatherCard from './WeatherCard';

interface IProps {
    selectedWeathers: IWeatherResponse[];
}

const WeatherList: React.FC<IProps> = ({ selectedWeathers }) => {
    return (
        <>
            {selectedWeathers.map((weather) => (
                <Row key={weather.city.id}>
                    <h3>{weather.city.name}</h3>
                    {weather.list.map(({ dt, main, weather }, idx) => (
                        (idx < 6 &&
                            <Col xs={2} key={dt}>
                                <WeatherCard
                                    temp_max={main.temp_max}
                                    temp_min={main.temp_min}
                                    dt={dt * 1000}
                                    weatherType={weather[0].main}
                                    icon={weather[0].icon}
                                />
                            </Col>
                        )
                    ))}
                </Row>
            ))}
        </>
    );
}

export default WeatherList;