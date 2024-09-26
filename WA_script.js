document.getElementById('searchButton').addEventListener('click', fetchWeather);

async function fetchWeather() {
    const city = document.getElementById('cityInput').value.trim();

    // Input validation
    if (!city) {
        document.getElementById('weatherDisplay').innerHTML = '<p>Please enter a city name.</p>';
        return;
    }

    const apiKey = '223e45593c386fa8c118ddc268463a9a';  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const weatherDisplay = document.getElementById('weatherDisplay');

    // Show loading message
    weatherDisplay.innerHTML = `<p>Loading...</p>`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherDisplay.innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    weatherDisplay.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <img src="${icon}" alt="${description}">
        <p>Temperature: ${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Condition: ${description}</p>
    `;
}
