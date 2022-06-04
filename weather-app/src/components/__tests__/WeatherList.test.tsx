import { render, screen } from '@testing-library/react';
import { IWeatherResponse } from '../../models';
import WeatherList from '../WeatherList';

test('should render Row for each city', () => {
    const mockSelectedWeather: IWeatherResponse[] = [{
        list: [
            {
                dt: 1622592000,
                main: {
                    temp_min: 8.45,
                    temp_max: 8.94,
                },
                weather: [
                    {
                        id: 802,
                        main: "Clouds",
                        icon: "03n"
                    }
                ],
            }
        ],
        city: {
            id: 524901,
            name: "Moscow",
        }
    },
    {
        list: [
            {
                dt: 1622592000,
                main: {
                    temp_min: 8.45,
                    temp_max: 8.94,
                },
                weather: [
                    {
                        id: 802,
                        main: "Clouds",
                        icon: "03n"
                    }
                ],
            }
        ],
        city: {
            id: 524902,
            name: "Baku",
        }
    }];

    render(<WeatherList selectedWeathers={mockSelectedWeather} />);

    mockSelectedWeather.forEach((x) => {
        const cityHeading = screen.getByText(x.city.name);

        expect(cityHeading).toBeInTheDocument();
    });
});
