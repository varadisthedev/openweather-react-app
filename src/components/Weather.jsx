import React from 'react'
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
  return (
    <div className='weather'>

        <div className='search-bar'>
            <input type='text' placeholder='Search'/>
            {/* For the search icon */}
            <img src={search_icon} alt='icon missing'></img>
        </div>

        {/* weather image here */}
        <img className='weather-icon' src={weather_clear} alt="icons are missing"></img>

        {/* to display the temperature */}
        <p className='temperature'>16°C</p>
        <p className='location'>Nagpur</p>
    </div>
  )
}

export default Weather