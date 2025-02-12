import { displayErorr } from "./errorDisplay.js";
import { getImage } from "./picture.js";


const API_key = 'MF9G7RAV6H3D9QMU7D2ZMXY7Q'

const elements = {
    temp : document.querySelector('.tempValue'),
    place : document.querySelector('.cityName'),
    searchBtn : document.querySelector(".searchBtn"),
    searchInput : document.querySelector('.searchInput'),
    rainPropability : document.querySelector('.rainPropability'),
    currentWeather : document.querySelector('.currentWeather'),
    uvLevel : document.querySelector('.uvLevel'),
    windSpeed : document.querySelector('.windSpeed'),
    sunriseTime : document.querySelector('.sunriseTime'),
    sunSetTime : document.querySelector('.sunSetTime'),
    humidityLevel : document.querySelector('.humidityLevel'),
    visibilityLvl : document.querySelector('.visibilityLvl'),
    Airquality : document.querySelector('.Airquality'),
    tempValueElement :  document.querySelector('.tempValue'),
    tempUnitElement : document.querySelector('.temperature sup'),
    recordedTime : document.querySelector('.time'),
    conditionImg : document.querySelector('.conditionImg'),
    humidityRemarks : document.querySelector('.humidityRemarks'),
    visibiltyRemarks : document.querySelector('.visibiltyRemarks'),
    currentDay : document.querySelector('.day'),
    tempDayValueElement : document.querySelector('.dayTemp'),
    tempDayUnitElement : document.querySelector('.tempDay sup'),
}

const weatherImg = {

}




const getWeatherData = async function getWeatherData(location){
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_key}`

    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json()
            processWeatherData(data)
            getImage(location)
        }else{
            
            displayErorr('Please enter a valid location!')
        }
    }catch(err){
        displayErorr("Unable to retrieve weather data. Please try again later!")
        
    }
};

const processWeatherData = async function processWeatherData(data){
    elements.place.textContent = data.resolvedAddress;
    if(elements.tempUnitElement && elements.tempDayUnitElement.textContent.includes("C")){
        let newTemp =  data.currentConditions.temp;
        let celsius = ((newTemp - 32) * 5) / 9;
        

        elements.temp.textContent = celsius.toFixed(1)
    }else{
        elements.temp.textContent =  data.currentConditions.temp
    }
    
   
    const timestamp = data.currentConditions.datetimeEpoch;
    const date = new Date(timestamp * 1000);
    elements.currentDay.textContent = `${date.toLocaleDateString('en-US', { weekday: 'long' })},`;

    let days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
    let newArr = [];

    let today = elements.currentDay.textContent.split(",")[0];
    let todayIndex = days.findIndex((day) =>{
    return day === today.slice(0, 3)
    
})




for(let i = todayIndex + 1; i<days.length; i++){
   newArr.push(days[i])
}

for(let j = 0; j < days.length; j++){
    if(!newArr.includes(days[j])){
        newArr.push(days[j])
    }
}


document.querySelector('.day1').textContent = newArr[0]
document.querySelector('.day2').textContent = newArr[1]
document.querySelector('.day3').textContent = newArr[2]
document.querySelector('.day4').textContent = newArr[3]
document.querySelector('.day5').textContent = newArr[4]
document.querySelector('.day6').textContent = newArr[5]
document.querySelector('.day7').textContent = newArr[6]



    
    
    if(data.currentConditions.datetime){
        let timeString = data.currentConditions.datetime;

        let [hour, minutes] = timeString.split(":");

        hour = hour.startsWith("0") ? hour.slice(1) : hour;

        elements.recordedTime.textContent = `${hour}:${minutes}`
        
    }

    if(data.currentConditions.conditions.includes('cloudy') && data.currentConditions.conditions.includes('Partially')){
        elements.conditionImg.src = "/Icons/sun_cloudy.png";
    }else if(data.currentConditions.conditions.includes('cloudy') || data.currentConditions.conditions.includes('Overcast')){
        elements.conditionImg.src = "/Icons/cloudyP.png";
    }else if(data.currentConditions.conditions.includes('Clear')){
        elements.conditionImg.src = "/Icons/clearP.png";
    }else if(data.currentConditions.conditions.includes('rain') || data.currentConditions.conditions.includes('rainy') || data.currentConditions.conditions.includes('Rain')){
        elements.conditionImg.src = "/Icons/rainyP.png";
    }else{
        elements.conditionImg.src = "/Icons/snowP.png";
    }

    elements.currentWeather.textContent= data.currentConditions.conditions;

    elements.rainPropability.textContent = data.currentConditions.precipprob;
    elements.uvLevel.textContent = data.currentConditions.uvindex;
    elements.windSpeed.textContent = data.currentConditions.windspeed;


    // const sunrise = data.currentConditions.sunrise;
    if(data.currentConditions.sunrise){
        let timeString = data.currentConditions.sunrise;
        let[hour, minutes] = timeString.split(":");

        hour = hour.startsWith("0") ? hour.slice(1) : hour;
        
        elements.sunriseTime.textContent = `${hour}:${minutes} AM` 
    }

    if(data.currentConditions.sunset){
        let timeString = data.currentConditions.sunset;
        let [hour, minutes] = timeString.split(":");
        
        hour = hour.startsWith("0") ? hour.slice(1) : hour;

        elements.sunSetTime.textContent = `${hour}:${minutes} PM`

    }
    

    
    elements.humidityLevel.textContent = data.currentConditions.humidity;
  
    const getHumidityRemark = function getHumidityRemark(humidity){
        if(humidity > 60) return "High 😔";
        else if(humidity > 30) return 'Normal 🫴';
        return 'Low 😔'
    }
    
    elements.humidityRemarks.textContent = getHumidityRemark(data.currentConditions.humidity);
   
    elements.visibilityLvl.textContent=  data.currentConditions.visibility;

    const getVisibilityRemark = function getVisibilityRemark(visibility){
        if(visibility > 6) return 'Good 👌';
        else if(visibility > 3) return 'Normal 😌'
        return 'Bad 😔'
    }

    elements.visibiltyRemarks.textContent = getVisibilityRemark(data.currentConditions.visibility)

    document.querySelectorAll('.dayTemp').forEach((day, index) =>{
        day.textContent = data.days[index].temp
    })

    if(elements.tempDayUnitElement && elements.tempDayUnitElement.textContent.includes("C")){
        document.querySelectorAll('.dayTemp').forEach((day) =>{
            let temp = parseFloat(day.textContent)
            let celsious = ((temp - 32) * 5) /9;
            day.textContent = celsious.toFixed(1)
        })

    }else{

        document.querySelectorAll('.dayTemp').forEach((day, index) =>{
            day.textContent = data.days[index].temp
        })
    }
}

elements.searchBtn.addEventListener('click', () =>{
    const location = elements.searchInput.value;
    if(location){
        getWeatherData(location)
    }else{
        displayErorr('Location can not be empty!')
      
    }
   elements.searchInput.value = ""
   
})







