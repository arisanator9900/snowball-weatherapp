import React from 'react'

const Weather = ({Location}) => {
    //api call
    //only call when user presses button to get weather 
    let locationName = {Location}.Location

    const getWeather = () =>{
        fetch('http://api.weatherapi.com/v1/current.json?key=d7c8dbc661c344ed9cb122953220205&q='+ locationName +'&aqi=no')

    }
    
  return (
    <div className='wrapper'>
        <div className="button">
            <button className='weather-btn' onClick={getWeather}>Get Weather</button>
        </div>
        <div className="card-wrapper">
            <div className="bigcard">

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