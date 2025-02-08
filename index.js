import { tempConversionCelcius, tempConversionF } from "./tempConversion.js";





const setEVentListeners = function setEventListeners (){
    document.querySelector('.degreeBtn').addEventListener('click', () =>{
        document.querySelector('.freinhartBtn').classList.remove('selected');
        document.querySelector('.degreeBtn').classList.add('selected');

        tempConversionCelcius()
        
    });
    document.querySelector('.freinhartBtn').addEventListener('click', () =>{
        document.querySelector('.degreeBtn').classList.remove('selected');
        document.querySelector('.freinhartBtn').classList.add('selected');

        tempConversionF()
       
    })
}


setEVentListeners()