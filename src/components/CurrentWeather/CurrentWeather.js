import React, {useState} from 'react';

const CurrentWeather = () => {
    let [responseObject, setResponseObject] = useState({});

    const getCurrentWeather = () => {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London&unit=%22metric", {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
		        // "x-rapidapi-key": "9ee0c3c06fmshaa5c5186c06c6f7p187153jsn54243b17206e",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	        }
        })
        .then(response => response.json())
        .then(response => {
            setResponseObject(response)
        })
        .catch(err => {
	        console.error(err);
        });
    }

    return (
        <div className='CurrentWeather'>
            <div>
                {JSON.stringify(responseObject)}
            </div>
        </div>
    )
};

export default CurrentWeather;
