import React, { useEffect, useRef, useState } from 'react'
import './weather.css'
import search_icon from '../assets/search.png'

// weather icons
import weather_clear from '../assets/clear.png'
import weather_cloud from '../assets/cloud.png'
import weather_drizzle from '../assets/drizzle.png'
import weather_humidity from '../assets/humidity.png'
import weather_rain from '../assets/rain.png'
import weather_snow from '../assets/snow.png'
import weather_wind from '../assets/wind.png'





function Weather() {
    // function to make the api call

    const inputRef=useRef()
    const [WeatherData,setWeatherData]=useState(false);

    const allIcons={
        "01d":weather_clear,
        "01n":weather_clear,
        "02d":weather_cloud ,
        "02n":weather_cloud ,
        "03d":weather_cloud ,
        "03n":weather_cloud ,
        "04d":weather_drizzle ,
        "04n":weather_drizzle ,
        "09d":weather_rain ,
        "09n":weather_rain ,
        "10d":weather_rain ,
        "10n":weather_rain ,
        "13d":weather_snow ,
        "13n":weather_snow ,
    }

    const search = async (city)=>{
        if(city===""){
            alert("enter city name!");
            return;
        }
        try{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API}`;
            const response= await fetch(url);
            const data = await response.json(); // since await is async
            console.log(data)

            if(!response.ok){ // in case of a incorrect city name
                alert(data.message);
                return;
            }


            const icon=allIcons[data.weather[0].icon] || weather_clear ;
            // added a clear icon in case the icon is not avaible.
            setWeatherData({
                humidity:data.main.humidity,
                windSpeed:data.wind.speed,
                temperature:Math.floor(data.main.temp),
                location:data.name,
                icon:icon
            })

        }
        catch(err){
            setWeatherData(false);
            console.error("error in fetching weather data, maybe check the api key?");
            
            
        }
    }
    useEffect(()=>{
        search("nagpur")
    },[])
  return (
    <div className='weather'>

        <div className='search-bar'>
            <input ref={inputRef} type='text' placeholder='Search'/>
            {/* For the search icon */}
            <img src={search_icon} alt='icon missing' onClick={()=>{search(inputRef.current.value)}}></img>
        </div>

        {/* weather image here */}
        <img className='weather-icon' src={WeatherData.icon} alt="icons are missing"></img>

        {/* to display the temperature */}
        <p className='temperature'>{WeatherData.temperature}°C</p>
        <p className='location'>{WeatherData.location}</p>


        <div className="weather-data">
            
            <div className="col">
                <img src={weather_humidity} alt="image is missing"></img>
                <div>
                    <p>{WeatherData.humidity} %</p>
                    <span>Humidity</span>
                </div>
            </div>

            <div className="col">
                <img src={weather_wind} alt="image is missing"></img>
                <div>
                    <p>{WeatherData.windSpeed} km/h</p>
                    <span>Wind speed</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather