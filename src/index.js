function showWeather(response) {
  console.log(response.data.temperature.current);
  let temperatureElement = document.querySelector("#current-temperature-value");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = response.data.city;
}

function searchCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#search-input");

  let city = cityName.value;
  let apiKey = "bae43f15fd02cbb438b0o0aa3c1e9ct8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let day = days[date.getDay()];
  return `${day} ${hour}:${minutes}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

let currentDate = new Date();
let time = document.querySelector("#time");
time.innerHTML = formatDate(currentDate);
