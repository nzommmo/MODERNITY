var text = "EVENT PLANNER";
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
let fadebutton = document.getElementById("art")
let fadebutton1 =document.getElementById("art1")
let artgallery = document.getElementById("artgallery")
let backbutton= document.getElementById("back")
let info = document.getElementById("trial")
let info1 = document.getElementById("trial")

function fade(){
    artgallery.style.opacity = 0.2
    info.style.display = "block"
    fadebutton.style.display = "none"
    backbutton.style.display="block"

//how to get elements by class name to avoid re-writing code
  
    
    
   
  
}
art.addEventListener("click",fade)
art1.addEventListener("click",fade)

function reapper(){
    fadebutton.style.display = "block"
    info.style.display = "none"
    artgallery.style.opacity=1
    backbutton.style.display="none"


}
back.addEventListener("click",reapper)


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

    if (data.weather[0].main == "Sunny"){
        cloudss[i].style.display = "none"
    }

}
searchbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    checkWeather(searchbox.value)
})
