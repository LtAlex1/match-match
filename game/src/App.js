import React from 'react'
import ContainerWelcomPage from './components/welcomPage/ContainerWelcomPage'
import ContainerGamePage from './components/gamePage/ContainerGamePage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Тут я могу получать Local и если они есть то рисовать без регистрации


function App() {
  return (
    <Router>

    <div className="App">
        <ContainerWelcomPage/>
    </div>
    <div> 
        <ContainerGamePage/>
    </div>
    

    </Router>
  );
}

export default App;
