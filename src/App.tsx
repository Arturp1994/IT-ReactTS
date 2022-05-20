import React from 'react';
import './App.css';
import Accordion from "./components/Accordio";
import {Rating} from "./components/Reting";

function App() {
  return (
    <div className="App">
     Hello, Arthur!
        <Rating />
        <Accordion />
    </div>
  );
}



export default App;
