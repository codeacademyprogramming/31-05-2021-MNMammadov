export interface ICity {
    id: number;
    name: string;
}

export interface IWeather {
    id: number;
    main: string;
    icon: string;
}

export interface IWeatherResponse {
    list: Array<{
        dt: number;
        main: {
            temp_min: number;
            temp_max: number;
        };
        weather: IWeather[];
    }>;
    city: ICity;
}
