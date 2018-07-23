class Weather {
  constructor(city, state) {
    this.apiKey = '6c3c01d83aeca737';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from api
  async getWeather() {
    // const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/geolookup/conditions/forecast/q/${this.state}/${this.city}.json`);
       const response = await fetch(`https://api.wunderground.com/api/6c3c01d83aeca737/geolookup/conditions/forecast/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
