import React from 'react'
import { IWeatherResponse } from '../models';

const useWeatherData = (initialUrl?: string) => {
    const [data, setData] = React.useState<IWeatherResponse>(null);
    const [error, setError] = React.useState<any>(null);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [url, setUrl] = React.useState<string>(initialUrl);

    React.useEffect(() => {
        if (!url) return;
        setIsLoading(true);
        setData(null);
        setError(null);

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                if (data.cod >= 400) {
                    setError(data.message);
                    return;
                }
                setData(data);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error);
            });
    }, [url]);

    return { data, error, isLoading, setUrl };
};

export default useWeatherData;