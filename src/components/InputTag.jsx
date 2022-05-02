//input field
import React, { useCallback } from 'react'


const InputTag = ({Location, onLocationChange}) => {
    const setLocation = useCallback(e => {
        onLocationChange(e.target.value)
    }, [onLocationChange])
        
  return (
     <div>
    <input type='text' value={Location} onChange={setLocation} />
    </div> 
  )
}

export default InputTag