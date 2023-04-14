import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'

const Body = () => {
    let [weather, setWeather] = useState();
    // let [currentObject, setCurrentObject] = useState();
    let [location, setLocation] = useState('bangalore');
    let [City, setCity] = useState();

    useEffect(() => {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=9ac59706a56c474a89950712230104&q=${location.toLowerCase()}&aqi=no`).then(a => setWeather(a.data));
        // console.log(weather ? weather.location.name : null);
    }, [location, weather ? weather.current.cloud : null]); //fetch data from weather API

    let changeLocation = (e) => {
        e.preventDefault();
        setLocation(City);
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <div className='card-dark p-4'>
                        <h2 className='text-center'>Weather App</h2>
                        <form className='form' onSubmit={changeLocation}>
                            <input
                                type="search"
                                className='form-control'
                                placeholder='enter city'
                                onChange={e => setCity(e.target.value)}
                            />
                        </form>
                        <br />
                        <div className="d-flex">
                            <h6 className="col">{weather ? weather.location.name : "wait"}</h6>
                            <h1 className='row'>{weather ? weather.current.temp_c : null}°C</h1>
                        </div>
                        <div>
                            <img src={weather ? weather.current.condition.icon : null} /><br />
                            <span>Condition: {weather ? weather.current.condition.text : "wait"}</span>
                            <br />
                            <span>Wind: {weather ? weather.current.wind_kph : "wait"} Kmph</span>
                            <br />
                            <span>Time: {weather ? weather.location.localtime : null}</span>
                            <br />

                        </div>
                        <div className='d-flex '>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Body


//API- http://api.weatherapi.com/v1/current.json?key=9ac59706a56c474a89950712230104&q=bangalore&aqi=no