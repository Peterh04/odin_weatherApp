export const displayErorr = function displayErorr(error){
    const errorBox = document.querySelector('.errorBox');
    const errorMessage = document.querySelector('.custom-error-message');
    errorBox.classList.add('show')
    errorMessage.textContent  = error;

    setTimeout(() =>{
        errorBox.classList.remove('show')
    }, 1000)
}