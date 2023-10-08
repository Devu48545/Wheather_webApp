document.addEventListener("DOMContentLoaded", function () {
    const cityInput = document.getElementById("city-input");
    const searchButton = document.getElementById("search-button");
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const weatherDescription = document.getElementById("weather-description");

    searchButton.addEventListener("click", function () {
        const city = cityInput.value;
        if (city) {
            fetchWeather(city);
        }
    });

    function fetchWeather(city) {
        
        const apiKey = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                cityName.textContent = data.name;
                temperature.textContent = `${data.main.temp}°C`;
                weatherDescription.textContent = data.weather[0].description;
                document.querySelector(".weather-info").style.display = "block";
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    }
});
