const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=berlin&appid="
const apiKey="44675b3c1e974db877d611d39af185ac"
const city = document.querySelector(".search");


async function checkWeather(){
  const response= await fetch(url+ `${apiKey}`);
  var data = await response.json();
  console.log(data)

  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=Math.floor(data.main.temp)+`°C`;

}

checkWeather()