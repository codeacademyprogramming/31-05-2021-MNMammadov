import React from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';
import { API_KEY, API_BASE_URL } from '../api/config';


const AddingCityWeather = () => {
    const [city, setCity] = React.useState('');

    const onSearch = () => {
        fetch(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((result) => console.log(result));
    };

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
                    <Button onClick={onSearch}>Check Weather</Button>
                </Col>
            </Row>
        </>
    );
};

export default AddingCityWeather;