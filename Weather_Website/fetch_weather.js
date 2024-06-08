const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
    method: 'GET',
    headers: {
        //'Place your api key here'
    }
};

async function fetchWeather(city) {
    try {
        cityname.innerHTML = city;
        xcityname.innerHTML = city;
        ycityname.innerHTML = city;
        zcityname.innerHTML = city;
        const response = await fetch(url + city, options);        //will add the city name at the end of the url so that it can fetch the weather details of that city.
        const result = await response.json();       //changed response.text() to response.json() and the temperature details are finally displayed.
        //Also, response.json() is used because the api is retuning the vaues in json format and not in plain text format
        console.log(result);

        //to fetch the weather details
        document.getElementById('temp').innerHTML = result.temp || 'N/A';
        document.getElementById('temp1').innerHTML = result.temp || 'N/A';
        document.getElementById('min_temp').innerHTML = result.min_temp || 'N/A';
        document.getElementById('max_temp').innerHTML = result.max_temp || 'N/A';
        document.getElementById('cloud_pct').innerHTML = result.cloud_pct || 'N/A';
        document.getElementById('feels_like').innerHTML = result.feels_like || 'N/A';
        document.getElementById('humidity').innerHTML = result.humidity || 'N/A';
        document.getElementById('humidity2').innerHTML = result.humidity || 'N/A';
        document.getElementById('wind_speed').innerHTML = result.wind_speed || 'N/A';
        document.getElementById('wind_speed1').innerHTML = result.wind_speed || 'N/A';
        document.getElementById('wind_degrees').innerHTML = result.wind_degrees || 'N/A';

         // this is for converting Unix timestamps to human-readable times so noone has problem in deciphering it
         const sunriseDate = new Date(result.sunrise * 1000); // Convert to milliseconds
         const sunsetDate = new Date(result.sunset * 1000); // Convert to milliseconds
 
         // this is for formatting the date and time
         const sunriseTime = sunriseDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
         const sunsetTime = sunsetDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
 
        document.getElementById('sunrise').innerHTML = sunriseTime;     //Also, to make it clear the sunrise and sunset
        //is in reference with IST(Indian Standard Time) , so basicaly it is when will sun rise or set in other country in reference to India's time.
        document.getElementById('sunset').innerHTML = sunsetTime;

    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    fetchWeather(city.value);
})

fetchWeather("Delhi");   // this is the default value the website will show the information for.



// this is for displaying information about seoul in the table
async function fetchseoulWeather() {
    try {
        const response = await fetch(url + 'Seoul', options); 
        const result = await response.json();
        console.log(result);

        document.getElementById('seoul_temp').innerHTML = result.temp || 'N/A';
        document.getElementById('seoul_min_temp').innerHTML = result.min_temp || 'N/A';
        document.getElementById('seoul_max_temp').innerHTML = result.max_temp || 'N/A';
        document.getElementById('seoul_cloud_pct').innerHTML = result.cloud_pct || 'N/A';
        document.getElementById('seoul_feels_like').innerHTML = result.feels_like || 'N/A';
        document.getElementById('seoul_humidity').innerHTML = result.humidity || 'N/A';
        document.getElementById('seoul_wind_speed').innerHTML = result.wind_speed || 'N/A';
        document.getElementById('seoul_wind_degrees').innerHTML = result.wind_degrees || 'N/A';

        const sunriseDate = new Date(result.sunrise * 1000);
        const sunsetDate = new Date(result.sunset * 1000);

        const sunriseTime = sunriseDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Seoul'});
        const sunsetTime = sunsetDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit',  timeZone: 'Asia/Seoul'});

        document.getElementById('seoul_sunrise').innerHTML = sunriseTime;
        document.getElementById('seoul_sunset').innerHTML = sunsetTime;

    } catch (error) {
        console.error(error);
    }
}

fetchseoulWeather();

// this is for displaying information about shanghai in the table
async function fetchshanghaiWeather() {
    try {
        const response = await fetch(url + 'Shanghai', options); 
        const result = await response.json();
        console.log(result);

        document.getElementById('shanghai_temp').innerHTML = result.temp || 'N/A';
        document.getElementById('shanghai_min_temp').innerHTML = result.min_temp || 'N/A';
        document.getElementById('shanghai_max_temp').innerHTML = result.max_temp || 'N/A';
        document.getElementById('shanghai_cloud_pct').innerHTML = result.cloud_pct || 'N/A';
        document.getElementById('shanghai_feels_like').innerHTML = result.feels_like || 'N/A';
        document.getElementById('shanghai_humidity').innerHTML = result.humidity || 'N/A';
        document.getElementById('shanghai_wind_speed').innerHTML = result.wind_speed || 'N/A';
        document.getElementById('shanghai_wind_degrees').innerHTML = result.wind_degrees || 'N/A';

        const sunriseDate = new Date(result.sunrise * 1000);
        const sunsetDate = new Date(result.sunset * 1000);

        const sunriseTime = sunriseDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Shanghai'});
        const sunsetTime = sunsetDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit',  timeZone: 'Asia/Shanghai'});

        document.getElementById('shanghai_sunrise').innerHTML = sunriseTime;
        document.getElementById('shanghai_sunset').innerHTML = sunsetTime;

    } catch (error) {
        console.error(error);
    }
}

fetchshanghaiWeather();


// this is for displaying information about kolkata in the table
async function fetchkolkataWeather() {
    try {
        const response = await fetch(url + 'Kolkata', options); 
        const result = await response.json();
        console.log(result);

        document.getElementById('kolkata_temp').innerHTML = result.temp || 'N/A';
        document.getElementById('kolkata_min_temp').innerHTML = result.min_temp || 'N/A';
        document.getElementById('kolkata_max_temp').innerHTML = result.max_temp || 'N/A';
        document.getElementById('kolkata_cloud_pct').innerHTML = result.cloud_pct || 'N/A';
        document.getElementById('kolkata_feels_like').innerHTML = result.feels_like || 'N/A';
        document.getElementById('kolkata_humidity').innerHTML = result.humidity || 'N/A';
        document.getElementById('kolkata_wind_speed').innerHTML = result.wind_speed || 'N/A';
        document.getElementById('kolkata_wind_degrees').innerHTML = result.wind_degrees || 'N/A';

        const sunriseDate = new Date(result.sunrise * 1000);
        const sunsetDate = new Date(result.sunset * 1000);

        const sunriseTime = sunriseDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata'});
        const sunsetTime = sunsetDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit',  timeZone: 'Asia/Kolkata'});

        document.getElementById('kolkata_sunrise').innerHTML = sunriseTime;
        document.getElementById('kolkata_sunset').innerHTML = sunsetTime;

    } catch (error) {
        console.error(error);
    }
}

fetchkolkataWeather();


// this is for displaying information about seattle in the table
async function fetchseattleWeather() {
    try {
        const response = await fetch(url + 'Seattle', options); 
        const result = await response.json();
        console.log(result);

        document.getElementById('seattle_temp').innerHTML = result.temp || 'N/A';
        document.getElementById('seattle_min_temp').innerHTML = result.min_temp || 'N/A';
        document.getElementById('seattle_max_temp').innerHTML = result.max_temp || 'N/A';
        document.getElementById('seattle_cloud_pct').innerHTML = result.cloud_pct || 'N/A';
        document.getElementById('seattle_feels_like').innerHTML = result.feels_like || 'N/A';
        document.getElementById('seattle_humidity').innerHTML = result.humidity || 'N/A';
        document.getElementById('seattle_wind_speed').innerHTML = result.wind_speed || 'N/A';
        document.getElementById('seattle_wind_degrees').innerHTML = result.wind_degrees || 'N/A';

        const sunriseDate = new Date(result.sunrise * 1000);
        const sunsetDate = new Date(result.sunset * 1000);

        const sunriseTime = sunriseDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Los_Angeles'});
        const sunsetTime = sunsetDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit',  timeZone: 'America/Los_Angeles'});

        document.getElementById('seattle_sunrise').innerHTML = sunriseTime;
        document.getElementById('seattle_sunset').innerHTML = sunsetTime;

    } catch (error) {
        console.error(error);
    }
}

fetchseattleWeather();



// this is for displaying information about bangkok in the table
async function fetchbangkokWeather() {
    try {
        const response = await fetch(url + 'Bangkok', options); 
        const result = await response.json();
        console.log(result);

        document.getElementById('bangkok_temp').innerHTML = result.temp || 'N/A';
        document.getElementById('bangkok_min_temp').innerHTML = result.min_temp || 'N/A';
        document.getElementById('bangkok_max_temp').innerHTML = result.max_temp || 'N/A';
        document.getElementById('bangkok_cloud_pct').innerHTML = result.cloud_pct || 'N/A';
        document.getElementById('bangkok_feels_like').innerHTML = result.feels_like || 'N/A';
        document.getElementById('bangkok_humidity').innerHTML = result.humidity || 'N/A';
        document.getElementById('bangkok_wind_speed').innerHTML = result.wind_speed || 'N/A';
        document.getElementById('bangkok_wind_degrees').innerHTML = result.wind_degrees || 'N/A';

        const sunriseDate = new Date(result.sunrise * 1000);
        const sunsetDate = new Date(result.sunset * 1000);

        const sunriseTime = sunriseDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Bangkok'});
        const sunsetTime = sunsetDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit',  timeZone: 'Asia/Bangkok'});

        document.getElementById('bangkok_sunrise').innerHTML = sunriseTime;
        document.getElementById('bangkok_sunset').innerHTML = sunsetTime;

    } catch (error) {
        console.error(error);
    }
}

fetchbangkokWeather();


// this is for tokyo
async function fetchtokyoWeather() {
    try {
        const response = await fetch(url + 'Tokyo', options); 
        const result = await response.json();
        console.log(result);

        document.getElementById('tokyo_temp').innerHTML = result.temp || 'N/A';
        document.getElementById('tokyo_min_temp').innerHTML = result.min_temp || 'N/A';
        document.getElementById('tokyo_max_temp').innerHTML = result.max_temp || 'N/A';
        document.getElementById('tokyo_cloud_pct').innerHTML = result.cloud_pct || 'N/A';
        document.getElementById('tokyo_feels_like').innerHTML = result.feels_like || 'N/A';
        document.getElementById('tokyo_humidity').innerHTML = result.humidity || 'N/A';
        document.getElementById('tokyo_wind_speed').innerHTML = result.wind_speed || 'N/A';
        document.getElementById('tokyo_wind_degrees').innerHTML = result.wind_degrees || 'N/A';

        const sunriseDate = new Date(result.sunrise * 1000);
        const sunsetDate = new Date(result.sunset * 1000);

        const sunriseTime = sunriseDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Tokyo'});
        const sunsetTime = sunsetDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit',  timeZone: 'Asia/Tokyo'});

        document.getElementById('tokyo_sunrise').innerHTML = sunriseTime;
        document.getElementById('tokyo_sunset').innerHTML = sunsetTime;

    } catch (error) {
        console.error(error);
    }
}

fetchtokyoWeather();
