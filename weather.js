import { getImage } from "./picture.js";





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
const recordedTime = document.querySelector('.time');


const conditionImg = document.querySelector('.conditionImg');
const humidityRemarks = document.querySelector('.humidityRemarks');
const visibiltyRemarks = document.querySelector('.visibiltyRemarks');
const currentDay = document.querySelector('.day');



const getWeatherData = async function getWeatherData(location){
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_key}`

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
    
   
    const timestamp = data.currentConditions.datetimeEpoch;
    const date = new Date(timestamp * 1000);
    console.log(date.toUTCString()); 
    currentDay.textContent = `${date.toLocaleDateString('en-US', { weekday: 'long' })},`;

    
    
    if(data.currentConditions.datetime){
        let timeString = data.currentConditions.datetime;

        let [hour, minutes] = timeString.split(":");

        hour = hour.startsWith("0") ? hour.slice(1) : hour;

        recordedTime.textContent = `${hour}:${minutes}`
        
    }

    if(data.currentConditions.conditions.includes('cloudy') && data.currentConditions.conditions.includes('Partially')){
        conditionImg.src = "/Icons/sun_cloudy.png";
    }else if(data.currentConditions.conditions.includes('cloudy') || data.currentConditions.conditions.includes('Overcast')){
        conditionImg.src = "/Icons/cloudyP.png";
    }else if(data.currentConditions.conditions.includes('Clear')){
        conditionImg.src = "/Icons/clearP.png";
    }else if(data.currentConditions.conditions.includes('rain') || data.currentConditions.conditions.includes('rainy') || data.currentConditions.conditions.includes('Rain')){
        conditionImg.src = "/Icons/rainyP.png";
    }else{
        conditionImg.src = "/Icons/snowP.png";
    }

    currentWeather.textContent= data.currentConditions.conditions;

    rainPropability.textContent = data.currentConditions.precipprob;
    uvLevel.textContent = data.currentConditions.uvindex;
    windSpeed.textContent = data.currentConditions.windspeed;


    // const sunrise = data.currentConditions.sunrise;
    if(data.currentConditions.sunrise){
        let timeString = data.currentConditions.sunrise;
        let[hour, minutes] = timeString.split(":");

        hour = hour.startsWith("0") ? hour.slice(1) : hour;
        
        sunriseTime.textContent = `${hour}:${minutes} AM` 
    }

    if(data.currentConditions.sunset){
        let timeString = data.currentConditions.sunset;
        let [hour, minutes] = timeString.split(":");
        
        hour = hour.startsWith("0") ? hour.slice(1) : hour;

        sunSetTime.textContent = `${hour}:${minutes} PM`

    }
    const sunset = data.currentConditions.sunset;

    
    humidityLevel.textContent = data.currentConditions.humidity;
    
    if( humidityLevel.textContent > 60){
        humidityRemarks.textContent = 'High 😔'
    }else if(humidityLevel.textContent > 30 && humidityLevel.textContent < 60){
        humidityRemarks.textContent = 'Normal 🫴'
        
    }else{
        humidityRemarks.textContent = 'Low 😔'
    }
   
    visibilityLvl.textContent=  data.currentConditions.visibility;

    if(visibilityLvl.textContent > 6){
      visibiltyRemarks.textContent = 'Good 👌'
    }else if(visibilityLvl.textContent  > 3 && visibilityLvl.textContent < 6){
         visibiltyRemarks.textContent = 'Normal 😌'
    }else{
        visibiltyRemarks.textContent = 'Bad 😔'
    }

   console.log(data)
}

searchBtn.addEventListener('click', () =>{
   const location = searchInput.value;
   getImage(location)
   getWeatherData(location)
   searchInput.value = ""
   
})

