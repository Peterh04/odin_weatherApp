
const temp = document.querySelector('.tempValue');
console.log(temp)


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
    const location = data.resolvedAddress;
    const temp=  data.currentConditions.temp
    let currentDay = '';
    const time = '';
    const condition = data.currentConditions.conditions;
    const rainPropability = data.currentConditions.precipprob;
    const uvIndex = data.currentConditions.uvindex;
    const  windStatus = data.currentConditions.windspeed;
    const sunrise = data.currentConditions.sunrise;
    const sunset = data.currentConditions.sunset;
    const humidity = data.currentConditions.humidity;
    const visibility =  data.currentConditions.visibility;

   console.log(data)
}

getWeatherData('london')

