import axios from 'axios';
import mockHourlyWeather from '../mocks/mockHourly';

const API_KEY = '04d4d495e39f2311c4acd1148b6e2130';

export const saveCity = (payload) => ({
  type: 'FETCH_CITY',
  payload,
});

export const saveHourly = (payload) => ({
  type: 'FETCH_HOURLY',
  payload
});

export const emptyHourly = () => ({
  type: 'EMPTY_HOURLY',
})


const cities = [{
  name: 'London',
  data: {}
}];

const getCityData = (city) => axios
.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

const getHourlyData = (city) => axios
.get(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${API_KEY}`);

// const getMockedCityData = (city) => new Promise((resolve) => {
//   const data = cities.find(({ name }) => name === city);
//   resolve({ data });
// });

export const fetchCity = (city) => async (dispatch) => {
  await getCityData(city)
    .then((response) => {
      dispatch(saveCity(response.data));
    })
  // await getMockedCityData(city)
  //  .then((response) => {
  //    dispatch(saveCity(response.data));
  //   })
};

export const fetchHourly = (city) => async (dispatch) => {
  // await getHourlyData(city)
  try { 
    const response = await mockHourlyWeather(city.name);
    dispatch(saveHourly(response.data));
  } catch(err) {
    console.log(err);
  }
};

