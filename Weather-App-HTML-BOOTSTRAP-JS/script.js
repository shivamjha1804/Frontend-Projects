const apiKey = "2c86eeb512e31237c506ed54d3f5af9a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#searchBox");
const searchButton = document.querySelector("#searchButton");
const weatherIcons = document.querySelector("#weatherIcons");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if (response.status == 404) {
        document.querySelector("#error").style.display = "block";
        document.querySelector(".information").style.display = "none";
    }

    else {

        document.querySelector("#temperature").innerHTML = `${Math.round(data.main.temp)}&deg;c`;
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector("#wind").innerHTML = `${data.wind.speed} km/h`;

        if (data.weather[0].main == "Clouds") {
            weatherIcons.src = "./Image/clouds.png"
        }

        else if (data.weather[0].main == "Clear") {
            weatherIcons.src = "./Image/clear.png"
        }

        else if (data.weather[0].main == "Rain") {
            weatherIcons.src = "./Image/rain.png"
        }

        else if (data.weather[0].main == "Drizzle") {
            weatherIcons.src = "./Image/drizzle.png"
        }

        else if (data.weather[0].main == "Mist") {
            weatherIcons.src = "./Image/mist.png"
        }

        document.querySelector("#error").style.display = "none";
        document.querySelector(".information").style.display = "block";
    }

}

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
