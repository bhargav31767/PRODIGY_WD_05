const apiKey = "de766273992559645250885c8c2b3577"; // Replace with your OpenWeatherMap API Key

function getWeather() {
  const location = document.getElementById("locationInput").value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("city").textContent = data.name;
      document.getElementById("description").textContent = data.weather[0].description;
      document.getElementById("temp").textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById("wind").textContent = `Wind Speed: ${data.wind.speed} m/s`;

      const iconMap = {
        Clear: "sunny.png",
        Clouds: "cloudy.png",
        Rain: "rain.png",
        Snow: "snow.png",
        Drizzle: "drizzle.png",
        Thunderstorm: "thunderstorm.png",
      };
      const iconName = iconMap[data.weather[0].main] || "default.png";
      document.getElementById("icon").src = `./icons/${iconName}`;
    })
    .catch(() => alert("City not found or API error!"));
}

document.getElementById("toggleMode").onclick = () => {
  document.body.classList.toggle("dark");
};