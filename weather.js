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
const tempDayValueElement = document.querySelector('.dayTemp');
const tempDayUnitElement = document.querySelector('.tempDay sup');



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

    document.querySelector('.day1temp').textContent = data.days[0].temp
    document.querySelector('.day2temp').textContent = data.days[1].temp
    document.querySelector('.day3temp').textContent = data.days[2].temp
    document.querySelector('.day4temp').textContent = data.days[3].temp
    document.querySelector('.day5temp').textContent = data.days[4].temp
    document.querySelector('.day6temp').textContent = data.days[5].temp
    document.querySelector('.day7temp').textContent = data.days[6].temp

    if(tempDayUnitElement && tempDayUnitElement.textContent.includes("C")){
        let newTemp1 = document.querySelector('.day1temp').textContent
        let newTemp2 = document.querySelector('.day2temp').textContent
        let newTemp3 = document.querySelector('.day3temp').textContent
        let newTemp4 = document.querySelector('.day4temp').textContent
        let newTemp5 = document.querySelector('.day5temp').textContent
        let newTemp6 = document.querySelector('.day6temp').textContent
        let newTemp7 = document.querySelector('.day7temp').textContent

        let celsius1 = ((newTemp1 - 32) * 5) / 9;
        let celsius2 = ((newTemp2 - 32) * 5) / 9;
        let celsius3 = ((newTemp3 - 32) * 5) / 9;
        let celsius4 = ((newTemp4 - 32) * 5) / 9;
        let celsius5 = ((newTemp5 - 32) * 5) / 9;
        let celsius6 = ((newTemp6 - 32) * 5) / 9;
        let celsius7 = ((newTemp7 - 32) * 5) / 9;

        document.querySelector('.day1temp').textContent = celsius1.toFixed(1)
        document.querySelector('.day2temp').textContent = celsius2.toFixed(1)
        document.querySelector('.day3temp').textContent = celsius3.toFixed(1)
        document.querySelector('.day4temp').textContent = celsius4.toFixed(1)
        document.querySelector('.day5temp').textContent = celsius5.toFixed(1)
        document.querySelector('.day6temp').textContent = celsius6.toFixed(1)
        document.querySelector('.day7temp').textContent = celsius7.toFixed(1)
        

        
    }else{
        
    document.querySelector('.day1temp').textContent = data.days[0].temp
    document.querySelector('.day2temp').textContent = data.days[1].temp
    document.querySelector('.day3temp').textContent = data.days[2].temp
    document.querySelector('.day4temp').textContent = data.days[3].temp
    document.querySelector('.day5temp').textContent = data.days[4].temp
    document.querySelector('.day6temp').textContent = data.days[5].temp
    document.querySelector('.day7temp').textContent = data.days[6].temp
    }
   

   console.log(data)
}

searchBtn.addEventListener('click', () =>{
   const location = searchInput.value;
   getImage(location)
   getWeatherData(location)
   searchInput.value = ""
   
})


//practice before implementation
let days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
let newArr = [];

let today = currentDay.textContent.split(",")[0];
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





