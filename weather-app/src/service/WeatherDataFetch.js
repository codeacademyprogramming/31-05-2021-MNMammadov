import React from 'react'

const WeatherDataFetch = (initialUrl) => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(null);
    const [url, setUrl] = React.useState(initialUrl);

    React.useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                setData(data);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error);
            });
    }, [url]);

    return { data, error, isLoading, setUrl };
};

export default WeatherDataFetch;