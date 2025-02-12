const cityDiv = document.querySelector(".city-details")
export const getImage = async function getImage(location){

    const url = `https://pixabay.com/api/?key=48665468-d6bf78a407aba350b233d7943&q=${location}`;

    try{
        const response = await fetch(url);
        
        const data = await response.json();
        setImage(data)
       

    }catch(err){
        console.log(err)
    }

}


const setImage = async function setImage(data){
    if (data.hits.length > 0) {
        const url = data.hits[0].webformatURL;
        cityDiv.style.backgroundImage = `url('${url}')`;
    } else {
        cityDiv.style.backgroundImage = `url('./Icons/NY.jpg')`; 
    }
}






