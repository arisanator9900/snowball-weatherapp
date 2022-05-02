//input field
import React, { useState } from 'react'


const InputTag = () => {
    const [Location, setLocation] = useState('London')

    const newLocation = (e) => {
        setLocation(e.target.value)
    }
        
  return (
     <div>
     <h1>{Location} Weather</h1>
    <input type='text' value={Location} onChange={newLocation} />
    </div> 
  )
}

export default InputTag