import Axios from 'axios';

export default {

  // get weather from city and country
  getWeatherFromCityCountry: (city, country) => Axios({
      method: 'GET',
      url: `http://localhost:5000/api/weather?city=${city}&country=${country}`
  }),


}
  