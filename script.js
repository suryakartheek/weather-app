// Write JavaScript here
const apiKey = '5d8cbd9ad932e8ea41a41cbdaa8ac343'; // Replace with your OpenWeatherMap API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('city-input-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value || 'Bangalore';
    fetchWeather(city);
});

async function fetchWeather(city) {
    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            displayWeather(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    document.getElementById('weather-icon').src = `https://static.vecteezy.com/system/resources/previews/037/480/395/non_2x/ai-generated-round-sun-isolated-on-transparent-background-generative-ai-png.png`;
    document.getElementById('weather-info').style.display = 'block';
}
