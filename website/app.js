/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&appid=38cfd6c4055581018a5647a470136d79';
document.getElementById('generate').addEventListener('click', performAction);


// Async GET

function performAction(e){
const zipcode =  document.getElementById('zip').value;
const feelings =  document.getElementById('feelings').value;
getTemp(baseURL,zipcode, apiKey)

 .then(function(data){
    // Add data
    console.log(data);
    postData('/add', {temp:data, date:newDate, content:feelings} );
  })
 .then(
    updateUI()
  )
}
const getTemp = async (baseURL, zipcode, key)=>{ 
	console.log(baseURL+zipcode+key);
	const res= await fetch(baseURL+zipcode+key);
	try {
    const data = await res.json();
    console.log(data.main.temp)
    return data.main.temp;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};

const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById('date').innerHTML = "Date: "+allData[0].date;
    document.getElementById('temp').innerHTML = "temp: "+allData[0].temp;
    document.getElementById('content').innerHTML = "content: "+allData[0].content;

  }catch(error){
    console.log("error", error);
  }
}