const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey=""
const city = document.querySelector(".search input");
const searchButton= document.querySelector(".search button");


async function checkWeather(cityN){
  const response= await fetch(url+cityN+`&appid=${apiKey}`);
  var data = await response.json();
  console.log(data)

  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=Math.floor(data.main.temp)+`°C`;
  document.querySelector(".humidity").innerHTML=data.main.humidity;
}

searchButton.addEventListener("click",()=>{
  checkWeather(city.value)
})
