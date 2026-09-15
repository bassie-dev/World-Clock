function updateClocks() {
  let jhbElement = document.querySelector("#johannesburg");
  if (jhbElement) {
    let jhbDateElement = jhbElement.querySelector(".date");
    let jhbTimeElement = jhbElement.querySelector(".time");
    let jhbTime = moment().tz("Africa/Johannesburg");

    jhbDateElement.innerHTML = jhbTime.format("D MMMM YYYY");
    jhbTimeElement.innerHTML = jhbTime.format("h:mm:ss [<small>]A[</small>]");
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("D MMMM YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }

  let selectedCityElement = document.querySelector("#selected-city");
  if (selectedCityElement) {
    let timezone = selectedCityElement.getAttribute("data-timezone");
    if (timezone) {
      let cityDateElement = selectedCityElement.querySelector(".date");
      let cityTimeElement = selectedCityElement.querySelector(".time");
      let cityTime = moment().tz(timezone);

      cityDateElement.innerHTML = cityTime.format("MMMM Do YYYY");
      cityTimeElement.innerHTML = `${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small>`;
    }
  }
}

function changeCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current"){
    cityTimeZone = moment.tz.guess();
  }
  if (!cityTimeZone) {
    citiesElement.innerHTML = `
      <div class="city" id="johannesburg">
        <div>
          <h2>Johannesburg</h2>
          <div class="date"></div>
        </div>
        <div class="time"></div>
      </div>
      <div class="city" id="paris">
        <div>
          <h2>Paris</h2>
          <div class="date"></div>
        </div>
        <div class="time"></div>
      </div>
    `;
    updateClocks();
    return;
  }

  let cityName = cityTimeZone.replace(/_/g, " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
    <div class="city" id="selected-city" data-timezone="${cityTimeZone}">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
    </div>
    <a href="index.html">All cities</a>`;

  updateClocks();
}

updateClocks();
setInterval(updateClocks, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", changeCity);
