// Init Storage
const storage = new Storage;
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init Weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init UI
ui = new UI;

// Get Weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change Location
  weather.changeLocation(city, state);

  // Set Location in local storage
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();
  // Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
    console.log(results);
  })
  .catch(error => console.log(error));
}
  

