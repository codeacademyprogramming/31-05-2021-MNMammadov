import React from 'react';
import { Card } from 'react-bootstrap';

interface IProps {
    dt: number;
    temp_min: number;
    temp_max: number;
    weatherType: string;
    icon: string;
}

const WeatherCard: React.FC<IProps> = ({ dt, temp_min, temp_max, weatherType, icon }) => {
    const date = new Date(dt);

    return (
        <Card>
            <Card.Img
                variant="top"
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            />
            <Card.Body>
                <Card.Title>{weatherType}</Card.Title>
                <p>
                    {date.toLocaleDateString()} - {date.toLocaleTimeString()}
                </p>
                <p>Min: {temp_min}</p>
                <p>Max: {temp_max}</p>
            </Card.Body>
            <button
                type="submit"
                // onClick={(evt) => deleteItem(city.name)}
                className="bg-transparent"
            >
                Delete
            </button>
        </Card>
    );
};

export default WeatherCard;