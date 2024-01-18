var text = "DATE PLANNER";
var index = 0;
var titleanimation = document.getElementById("title")

function display(){
    titleanimation.textContent += text[index]
    index++;

    if(index < text.length){
        setTimeout(display,100)
    }
}
display()
let artgallery = document.getElementById("artgallery")

function fade(){
    let info = document.getElementById("trial")
    artgallery.style.opacity = 0.2
    info.style.display = "block"
  
    
    
   
  
}
art.addEventListener("click",fade)

const APIKEY = "580913e8cf3309c75560389315fd1e29";
const APIURL= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.getElementById("town")
const weathericon= document.createElement('img')
async function checkWeather(city){
    const response = await fetch(APIURL + city + `&appid=${APIKEY}`)
    var data = await response.json()
    document.getElementById("name").innerHTML = data.name
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "celcius"
    document.getElementById("humidity").innerHTML = "Humidity:" + data.main.humidity + "%"
    document.getElementById("wind").innerHTML = "Windspeed:" + data.wind.speed + "km/h"
    
    var cloudss = document.getElementsByClassName("cloudy")
    for(var i = 0; i < cloudss.length; i++)

    var sunnys = document.getElementsByClassName("sunny")
    for(var k = 0; k < sunnys.length; k++)


    var  rains = document.getElementsByClassName("rainy")
    for(var j = 0; j < rains.length; j++)


    if (data.weather[0].main == "Clouds"){
        cloudss[i].style.display = "block"

        
    }else{
        rains[j].style.display = "none"

    }
}
searchbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    checkWeather(searchbox.value)
})
