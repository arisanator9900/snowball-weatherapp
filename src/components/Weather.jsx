import React from 'react'
import { useState } from 'react'
import './Weather.css'

const Weather = ({Location}) => {

    //use state hook to save weatherData into a variable to use below
    const [currentWeather, setWeather] = useState('London')
    //initialize the variables for the cards. (temperature, Clouds, rain and wind)
    let [temperature, feelsLike, condition, icon, rain] = ['-','-','-','-','-'];
    //api call
    //only call when user presses button to get weather 
    let locationName = {Location}.Location
    locationName = locationName.replace(' ', '-')
    //on page load get the inital weather for default area using react hook
    //added line below to stop compiler from giving warning for empty array
    // eslint-disable-next-line
    React.useEffect(() => getWeather(), [])

    const getWeather = () => {
        fetch('http://api.weatherapi.com/v1/current.json?key=d7c8dbc661c344ed9cb122953220205&q='+ locationName +'&aqi=no')
        .then(response => {return response.json()})
        .then(data => {setWeather(data)})
        console.log(currentWeather)
    }
    //inital state will return undefined. If typeof isnt an object nothing will happen
    if (typeof currentWeather == 'object') {
        temperature = currentWeather.current.temp_f;
        feelsLike = currentWeather.current.feelslike_f
        condition = currentWeather.current.condition.text;
        icon = 'https:' + currentWeather.current.condition.icon
        rain = currentWeather.current.precip_in
    }
    

  return (
    <div className='wrapper'>
        <div className="button">
            <button className='weather-btn' onClick={getWeather}>Get Weather</button>
        </div>
        <div className="card-wrapper">
            <div className="bigcard">
            <p>{temperature}, {feelsLike}, {condition}, <img src={icon} alt=''/>,  {rain}</p>
            </div>
            <div className="cards">
                <div id="card1"></div>
                <div id="card2"></div>
                <div id="card3"></div>
                <div id="card4"></div>
                <div id="card5"></div>
                <div id="card6"></div>
            </div>
        </div>
    </div>
  )
}

export default Weather