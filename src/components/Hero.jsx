//this component gets the location from the user as input for the API to get the data
//Get input from inputtag => put in state variable, use state variable in API call
//to change the location to the user choice using my API key 
//display it in card format flex with css
//display large format card + 6 smaller daily forecast cards for the future
//add function to add - in text space (ex New york = New-York)
import React from 'react'

const Hero = ({Location}) => {
  return (
    <div>
        {/*<img> hero image banner*/}
        <h1>Snowball Weather</h1>
        <h2>Enter Your Location To See The Weather For Your Area</h2>
        <h1>{Location} Weather</h1>
    </div>
  )
}

export default Hero