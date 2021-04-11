/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '&appid=38cfd6c4055581018a5647a470136d79';
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const zipcode =  document.getElementById('zip').value;
getTemp(baseURL,zipcode, apiKey);
}
const getTemp = async (baseURL, zipcode, key)=>{ 
	console.log(baseURL+zipcode+key);
	const res= await fetch(baseURL+zipcode+key);
	try {
    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}