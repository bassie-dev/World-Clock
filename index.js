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
}

updateClocks();

setInterval(updateClocks, 1000);
