const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "b0fff49380a9563278f2c5425c2dd514";

function onGeoSuccess(data) {
  const lat = data.coords.latitude;
  const lon = data.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} ${data.main.temp}°C /`;
    });
}

function onGeoError() {
	console.log("There's some error");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);