async function getWeather(){

const city = document.getElementById("cityInput").value.trim()

const result = document.getElementById("weatherResult")

if(city === ""){
result.innerHTML = "⚠ Please enter a city name"
return
}

const apiKey = "XXXXXXXXX"

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

const response = await fetch(url)

const data = await response.json()

if(data.cod != 200){
result.innerHTML = "❌ City not found. Try another city."
return
}

result.innerHTML = `
<h3>${data.name}</h3>
<p>Temperature: ${data.main.temp} °C</p>
<p>Weather: ${data.weather[0].description}</p>
<p>Humidity: ${data.main.humidity}%</p>
<p>Wind Speed: ${data.wind.speed} km/h</p>
`

}
