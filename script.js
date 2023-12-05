let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = document.querySelector(".day");
day.innerHTML = days[now.getDay()];

let date = document.querySelector(".date");
date.innerHTML = now.getDate();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;

  let windElement = document.querySelector("#wind-speed");
  let wind = Math.round(response.data.wind.speed);
  windElement.innerHTML = wind;

  let humidityElement = document.querySelector("#humidity");
  let humidity = response.data.temperature.humidity;
  humidityElement.innerHTML = humidity;

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute("src", `${response.data.condition.icon_url}`);

  let country = response.data.country;
  let countryElement = document.querySelector(".country");
  countryElement.innerHTML = country;
}
function enterCity(event) {
  event.preventDefault();
  let input = document.querySelector(".form-control");
  let cityInput = document.querySelector(".city");
  let city = input.value;
  let apiKey = "8fc64cbao4tb098dbc03ed2c6338eea9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
  cityInput.innerHTML = city;
}

let form = document.querySelector("form");
form.addEventListener("submit", enterCity);

let month = document.querySelector(".month");
month.innerHTML = months[now.getMonth()];

let year = document.querySelector(".year");
year.innerHTML = now.getFullYear();

let hour = document.querySelector(".hours");
hour.innerHTML = now.getHours();

let minute = document.querySelector(".minutes");
minute.innerHTML = now.getMinutes();
