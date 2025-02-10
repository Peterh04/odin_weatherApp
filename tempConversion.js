export const tempConversionCelcius = function tempConversion(){
    const tempValueElement = document.querySelector('.tempValue');
    const tempUnitElement = document.querySelector('.temperature sup');

    const tempDayValueElement = document.querySelector('.dayTemp');
    const tempDayUnitElement = document.querySelectorAll('.tempDay sup');
    



    if(tempUnitElement && tempUnitElement.textContent.includes("F")){
       tempUnitElement.textContent = "°C";
      
       tempDayUnitElement.forEach((element) =>{
         element.textContent = "°C"
       })
      

       let fahrenheit = parseFloat(tempValueElement.textContent);
       let celsius = ((fahrenheit - 32) * 5) / 9;

     
       tempValueElement.textContent = celsius.toFixed(1);

       let newTemp1 = parseFloat(document.querySelector('.day1temp').textContent)
       let newTemp2 = parseFloat(document.querySelector('.day2temp').textContent)
       let newTemp3 = parseFloat(document.querySelector('.day3temp').textContent)
       let newTemp4 = parseFloat(document.querySelector('.day4temp').textContent)
       let newTemp5 = parseFloat(document.querySelector('.day5temp').textContent)
       let newTemp6 = parseFloat(document.querySelector('.day6temp').textContent)
       let newTemp7 = parseFloat(document.querySelector('.day7temp').textContent)

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
    }

}


export const tempConversionF = function tempConversionF(){
    const tempValueElement = document.querySelector('.tempValue');
    const tempUnitElement = document.querySelector('.temperature sup');

    
    const tempDayValueElement = document.querySelector('.dayTemp');
    const tempDayUnitElement = document.querySelectorAll('.tempDay sup');


    if(tempUnitElement && tempUnitElement.textContent.includes("C")){
        tempUnitElement.textContent = "°F";
        tempDayUnitElement.forEach((element) =>{
            element.textContent = "°F"
          })
       

         console.log(tempDayUnitElement)

        let celsius = parseFloat(tempValueElement.textContent);
        let fahrenheit = (celsius * 9) / 5 + 32;

        
       let celsius1 = parseFloat(document.querySelector('.day1temp').textContent)
       let celsius2 = parseFloat(document.querySelector('.day2temp').textContent)
       let celsius3 = parseFloat(document.querySelector('.day3temp').textContent)
       let celsius4 = parseFloat(document.querySelector('.day4temp').textContent)
       let celsius5 = parseFloat(document.querySelector('.day5temp').textContent)
       let celsius6 = parseFloat(document.querySelector('.day6temp').textContent)
       let celsius7 = parseFloat(document.querySelector('.day7temp').textContent)

       let fahrenheit1 = (celsius1 * 9) / 5 + 32;
       let fahrenheit2 = (celsius2 * 9) / 5 + 32;
       let fahrenheit3 = (celsius3 * 9) / 5 + 32;
       let fahrenheit4 = (celsius4 * 9) / 5 + 32;
       let fahrenheit5 = (celsius5 * 9) / 5 + 32;
       let fahrenheit6 = (celsius6 * 9) / 5 + 32;
       let fahrenheit7 = (celsius7 * 9) / 5 + 32;

        // Update the temperature and unit
        tempValueElement.textContent = fahrenheit.toFixed(1);


        document.querySelector('.day1temp').textContent = fahrenheit1.toFixed(1);
        document.querySelector('.day2temp').textContent = fahrenheit2.toFixed(1);
        document.querySelector('.day3temp').textContent = fahrenheit3.toFixed(1);
        document.querySelector('.day4temp').textContent = fahrenheit4.toFixed(1);
        document.querySelector('.day5temp').textContent = fahrenheit5.toFixed(1);
        document.querySelector('.day6temp').textContent = fahrenheit6.toFixed(1);
        document.querySelector('.day7temp').textContent = fahrenheit7.toFixed(1);



     }



}