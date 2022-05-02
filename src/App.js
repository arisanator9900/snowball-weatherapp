import './App.css';
import InputTag from './components/InputTag';
import Hero from './components/Hero.jsx'
import React from 'react';
class App extends React.Component{
      
       state = {
        name: "",
       }
  
    handleCallback = (childData) =>{
        this.setState({name: childData})
    }

  render() {
    return (
      <div className="App">
        <Hero />
        <InputTag />
      </div>
    );
  }
}

export default App;
