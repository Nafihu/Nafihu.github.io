let apiKey = '223e45593c386fa8c118ddc268463a9a';
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apikey}';

async function checkWeather(){
    let response = await fetch(apiUrl +`&appid = ${apiKey}` )
    var data = await response.json();

    console.log(data)

}