let weather = {
    apiKey: "YOUR_OpenAI_KEY", // Replace YOUR_OpenAI_KEY with your OpenWeather API key
    fetchWeather: function (city) { // fetchWeather is a function that takes a city as an argument and fetches the weather data from the OpenWeather API
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey).then((response) => {
            if (!response.ok) {
                alert("No weather found.");
                throw new Error("No weather found.");
            }

            return response.json();

            }).then((data) => this.displayWeather(data));
        },

    displayWeather: function (data) { // displayWeather is a function that takes data as an argument and displays the weather data on the webpage
        const { name } = data;
        const { temp, humidity } = data.main;
        const { description, icon } = data.weather[0];
        const { speed } = data.wind;

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".description").innerText = description.charAt(0).toUpperCase() + description.slice(1);
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
    },
    
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
  
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});
  
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
    });
  
weather.fetchWeather("New York"); // Default city
