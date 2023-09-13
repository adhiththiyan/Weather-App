const apikey = "5a70779a24cf0672b24b3a1f767a7917"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const search = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")



async function checkWeather(city){
    const response = await fetch(apiurl +city+ `&appid=${apikey}`)
    
    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"

    }
    else{
        var data = await response.json()

        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = data.main.temp + "°c"
        document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"
    
        document.querySelector(".weather").style.display="block"
        document.querySelector(".error").style.display="none"

    }
}
searchbtn.addEventListener("click",()=>{
    checkWeather(search.value)
})