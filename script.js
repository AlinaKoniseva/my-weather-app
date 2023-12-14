
function displayForecast() {
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function(day){
    forecastHtml = forecastHtml +
    `
    <div class="weather-forecast-day" >
      <div class="weather-forecast-date">${day}</div>
      <div class="weather-forecast-icon">🌤️</div>
      <div class="weather-forecast-temperatures">
        <span class="weather-forecast-temperature-max">12°C</span>
        <span class="weather-forecast-temperature-min">8°C</span>
      </div>
      </div>
    `;
  })

let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHtml;
}

displayForecast();