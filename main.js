const apiKey = "apikey"
const btnAutoLocation = document.getElementById("autoLocation")
const btnSearch = document.getElementById("search")
const search = document.getElementById("input")
const container = document.getElementById("container")
const text = document.getElementById("text")
const loader = document.getElementById("loader")
let language = {
    language: "en",
    enter_location: "Enter a location",
    invalid_location: "Invalid location",
    wind_speed: "Wind speed",
    humidity: "Humidity",
}

function getLocation() {
    loader.style.display = "flex"
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey + '&lang=' + language.language + '&units=metric'
            showWeather(url)
        })
    }
}
function getLocationWithSearch() {
    loader.style.display = "flex"
    const location = search.value
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&lang=en&units=metric&appid=' + apiKey
    showWeather(url)
}
async function showWeather(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("country").innerHTML = data.name + '  ' + data.sys.country
            document.getElementById("temp").innerHTML = data.main.temp + '°C'
            document.getElementById("description").innerHTML = data.weather[0].description
            document.getElementById("humidity").innerHTML = data.main.humidity + '%'
            document.getElementById("wind").innerHTML = data.wind.speed + 'km/h'
            document.getElementById("tempMin").innerHTML = data.main.temp_min + '°C'
            document.getElementById("tempMax").innerHTML = data.main.temp_max + '°C'
            container.style.display = "block"
            text.style.display = "none"
        })
        .catch(
            container.style.display = "none",
            text.style.display = "block",
            text.innerHTML = language.invalid_location
        );
        loader.style.display = "none"
}
function changeLanguage() {
    let userLanguage = window.navigator.language || navigator.browserLanguage;
    userLanguage = userLanguage.toLowerCase();

    if (userLanguage.indexOf('es') !== -1) {
        language.language = "es"
        language.enter_location = "Introduce una ubicación"
        language.invalid_location = "Ubicación inválida"
        language.wind_speed = "Viento"
        language.humidity = "Humedad"
    }
}
function load() {
    changeLanguage()
    text.innerHTML = language.enter_location
    document.getElementById("wind-title").innerHTML = language.wind_speed
    document.getElementById("humidity-title").innerHTML = language.humidity
}

btnAutoLocation.addEventListener("click", function () {
    getLocation()
})
btnSearch.addEventListener("click", function () {
    getLocationWithSearch()
})
search.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        getLocationWithSearch()
    }
})
load()
