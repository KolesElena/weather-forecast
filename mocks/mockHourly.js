const mockHourlyWeather =  
    [ 
        {
            name: "Moscow",
            data: [
                {
                    day: "Monday",
                    main: {
                        temp: 288.1,
                        feels_like: 287.97,
                        temp_min: 284.97,
                        temp_max: 290.03,
                        pressure: 1011,
                        humidity: 89,
                        sea_level: 1011,
                        grnd_level: 994
                    },
                    visibility: 10000
                },
                {
                    day: "Tuesday",
                    main: {
                        temp: 288.1,
                        feels_like: 287.97,
                        temp_min: 284.97,
                        temp_max: 290.03,
                        pressure: 1011,
                        humidity: 89,
                        sea_level: 1011,
                        grnd_level: 994
                    },
                    visibility: 10000 
                }
            ]
        },
        {
            name: "London",
            data: [
                {
                    day: "Monday",
                    main: {
                        temp: 288.1,
                        feels_like: 287.97,
                        temp_min: 284.97,
                        temp_max: 290.03,
                        pressure: 1011,
                        humidity: 89,
                        sea_level: 1011,
                        grnd_level: 994
                    },
                    visibility: 10000
                },
                {
                    day: "Tuesday",
                    main: {
                        temp: 288.1,
                        feels_like: 287.97,
                        temp_min: 284.97,
                        temp_max: 290.03,
                        pressure: 1011,
                        humidity: 89,
                        sea_level: 1011,
                        grnd_level: 994
                    },
                    visibility: 10000 
                }
            ]
        }
    ];

    // const findByCityName = (cityName) => (city) => city.name === cityName;

    const promisify = (data) => (cityName) => new Promise((resolve, reject) => {
        const foundCity = data.find((city) => city.name === cityName);

        if(foundCity) {
            resolve({ data: foundCity });
        } else {
            reject('City not found');
        }
    });

    export default promisify(mockHourlyWeather);