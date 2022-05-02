import './App.css';
import InputTag from './components/InputTag';
import Hero from './components/Hero.jsx'
import React from 'react';
import { useState } from 'react';

const App = () => {
  const [Location, setLocation] = useState('London')

  return (
    <div className="App">
      <Hero Location={Location}/>
      <InputTag Location={Location} onLocationChange={setLocation} />
    </div>
  );
}

export default App;
