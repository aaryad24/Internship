const apiKey= "5fa7a3ebad625d4c6718dfded81b53bd";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchbox = document.querySelector(".search input");
// const searchbtn = document.querySelector(".search button");

var searchbox = document.getElementById("cityname");
let btn = document.getElementById("btn");
var weathericon = document.querySelector(".weather-icon");


async function checkWeather(city){
 const response = await fetch(apiUrl + city + `&appid=${apiKey}` );
    var data = await response.json();

    console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" ;
document.querySelector(".humidity").innerHTML = data.main.humidity+" %";
document.querySelector(".wind").innerHTML = data.wind.speed+" Kmph";





if(data.weather[0].main == "Clouds"){
    weathericon.src = "images/clouds.png";
}
else if(data.weather[0].main == "Clear"){
    weathericon.src = "images/clear.png";
}
else if(data.weather[0].main == "Rain"){
    weathericon.src = "images/rain.png";
}
else if(data.weather[0].main == "Drizzle"){
    weathericon.src = "images/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
    weathericon.src = "images/mist.png";
}

}



btn.onclick=()=>{
    checkWeather(searchbox.value)
};

checkWeather();
