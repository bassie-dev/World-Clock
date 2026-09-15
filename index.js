function updateClocks() {
  let jhbElement = document.querySelector("#johannesburg");
  if (jhbElement) {
    let jhbDateElement = jhbElement.querySelector(".date");
    let jhbTimeElement = jhbElement.querySelector(".time");
    let jhbTime = moment().tz("Africa/Johannesburg");

    jhbDateElement.innerHTML = jhbTime.format("D MMMM YYYY");
    jhbTimeElement.innerHTML = jhbTime.format("h:mm:ss [<small>]A[</small>]");
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("D MMMM YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
let shanElement = document.querySelector("#shanghai");
if (shanElement) {
  let shanDateElement = shanElement.querySelector(".date");
  let shanTimeElement = shanElement.querySelector(".time");
  let shanTime = moment().tz("Asia/Shanghai");

  shanDateElement.innerHTML = shanTime.format("D MMMM YYYY");
  shanTimeElement.innerHTML = shanTime.format("h:mm:ss [<small>]A[</small>]");
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
