const weather = document.querySelector("#weather span:last-child");
const city = document.querySelector("#weather span:first-child");
const API_KEY = "261f1c914deda0c2bf8b631ed6c75ad2";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = `🧭 ${data.name}`;
            weather.innerText = `🌤 ${data.weather[0].main} / 🌡️ ${data.main.temp}`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);