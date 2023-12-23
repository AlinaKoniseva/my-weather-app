function refreshWeather(response) {
  let temperatureElement = document.querySelector(".temperature");
  let cityElement = document.querySelector("#weather-app-city");
  let countryElement = document.querySelector("#weather-app-country");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let now = new Date();
  let iconElement = document.querySelector("#main-icon");
  let dateElement = document.querySelector("#date");
  let monthElement = document.querySelector("#month");
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  
  let yearElement = document.querySelector("#year");



  cityElement.innerHTML = response.data.city;
  countryElement.innerHTML = response.data.country;
  timeElement.innerHTML = formatDate(date);
  humidityElement.innerHTML = `${response.data.temperature.humidity}`;
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  iconElement.innerHTML = response.data.condition.icon_url;
  dateElement.innerHTML = now.getDate();
  monthElement.innerHTML = months[now.getMonth()];
  yearElement.innerHTML = now.getFullYear();

  getForecast(response.data.city);
  console.log(date);
}


function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;

 
}

function searchCity(city) {
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
  console.log(apiUrl)
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

function getForecast(city) {
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
  console.log(apiUrl);

}


function displayForecast() {
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function(day) {
    forecastHtml = forecastHtml + 
    `
      <div class="container weather-forecast">
        <div class="row">
          <div class="col">${day}</div>
          <div class="weather-forecast-icon">🌤️</div>
          <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-max">12°C</span>
            <span class="weather-forecast-temperature-min">8°C</span>
          </div>
        </div>
      </div>
      `;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

displayForecast();

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");