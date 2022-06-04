import React from 'react';
import { Row, Col, FormControl, Button, Form } from 'react-bootstrap';

interface IProps {
    onSearch: (city: string) => void;
}

const AddingCityWeather: React.FC<IProps> = ({ onSearch }) => {
    const [temperatureType, setTemperatureType] = React.useState<string>('Kelvin');
    const [city, setCity] = React.useState<string>('');

    return (
        <>
            <Row>
                <Col>
                    <h1>Weather in your city</h1>
                </Col>
            </Row>
            <Row>
                <Form>
                    {['Kelvin', 'Celcius', 'Fahrenheight'].map((value) => (
                        <Form.Check
                            key={`inline-${value}`}
                            inline
                            label={value}
                            name="group1"
                            type='radio'
                            value={temperatureType}
                            onClick={() => setTemperatureType(value)}
                        />
                    ))}
                </Form>
            </Row>
            <Row>
                <Col xs={4} className="text-center">
                    <FormControl
                        placeholder="Enter city"
                        onChange={(event) => setCity(event.target.value)}
                        value={city}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => onSearch(city)}>Check Weather</Button>
                </Col>
            </Row>
        </>
    );
};

export default AddingCityWeather;