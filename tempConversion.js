export const tempConversionCelcius = function tempConversion(){
    const tempValueElement = document.querySelector('.tempValue');
    const tempUnitElement = document.querySelector('.temperature sup');

    if(tempUnitElement && tempUnitElement.textContent.includes("F")){
       tempUnitElement.textContent = "°C";

       let fahrenheit = parseFloat(tempValueElement.textContent);
       let celsius = ((fahrenheit - 32) * 5) / 9;

     
       tempValueElement.textContent = celsius.toFixed(1);
    }

}


export const tempConversionF = function tempConversionF(){
    const tempValueElement = document.querySelector('.tempValue');
    const tempUnitElement = document.querySelector('.temperature sup');

    if(tempUnitElement && tempUnitElement.textContent.includes("C")){
        tempUnitElement.textContent = "°F";

        let celsius = parseFloat(tempValueElement.textContent);
        let fahrenheit = (celsius * 9) / 5 + 32;

        // Update the temperature and unit
        tempValueElement.textContent = fahrenheit.toFixed(1);
     }

}