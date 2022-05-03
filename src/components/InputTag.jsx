//input field
import React, { useCallback } from 'react'
import './InputTag.css'


const InputTag = ({Location, onLocationChange}) => {
    const setLocation = useCallback(e => {
        onLocationChange(e.target.value)
    }, [onLocationChange])
        
  return (
     <div>
    <p className='text'>Enter City Name or Zipcode</p>
    <input className='form' type='text' value={Location} onChange={setLocation} />
    </div> 
  )
}

export default InputTag