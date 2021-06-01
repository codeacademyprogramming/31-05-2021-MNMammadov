import React from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';


const AddingCityWeather = ({ onSearch }) => {
    const [city, setCity] = React.useState('');

    return (
        <>
            <Row>
                <Col>
                    <h1>Search your city Weather</h1>
                </Col>
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