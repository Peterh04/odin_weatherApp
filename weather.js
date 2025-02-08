import { getImage } from "./picture.js";




const API_key = 'MF9G7RAV6H3D9QMU7D2ZMXY7Q'
const temp = document.querySelector('.tempValue');
const  place = document.querySelector('.cityName');
const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector('.searchInput');
const rainPropability = document.querySelector('.rainPropability');
const currentWeather = document.querySelector('.currentWeather');
const uvLevel = document.querySelector('.uvLevel');
const windSpeed = document.querySelector('.windSpeed');
const sunriseTime= document.querySelector('.sunriseTime');
const sunSetTime = document.querySelector('.sunSetTime');
const humidityLevel = document.querySelector('.humidityLevel');
const visibilityLvl = document.querySelector('.visibilityLvl');
const Airquality = document.querySelector('.Airquality');
const tempValueElement = document.querySelector('.tempValue');
const tempUnitElement = document.querySelector('.temperature sup');




const getWeatherData = async function getWeatherData(location){
    

    try{
        const response = await fetch(url);
        const data = await response.json()
        processWeatherData(data)
    }catch(err){
        console.log(err)
    }
};

const processWeatherData = async function processWeatherData(data){
    place.textContent = data.resolvedAddress;
    
    if(tempUnitElement && tempUnitElement.textContent.includes("C")){
        let newTemp =  data.currentConditions.temp;
        let celsius = ((newTemp - 32) * 5) / 9;
        

        temp.textContent = celsius.toFixed(1)
    }else{
        temp.textContent =  data.currentConditions.temp
    }
    let currentDay = '';
    const time = '';
    currentWeather.textContent= data.currentConditions.conditions;
    rainPropability.textContent = data.currentConditions.precipprob;
    uvLevel.textContent = data.currentConditions.uvindex;
    windSpeed.textContent = data.currentConditions.windspeed;
    const sunrise = data.currentConditions.sunrise;
    const sunset = data.currentConditions.sunset;
    humidityLevel.textContent = data.currentConditions.humidity;
    visibilityLvl.textContent=  data.currentConditions.visibility;

   
}

searchBtn.addEventListener('click', () =>{
   const location = searchInput.value;
   getImage(location)
   getWeatherData(location)
   searchInput.value = ""
   
})

