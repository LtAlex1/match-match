import React from 'react'
import './css/app.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContainerRegistrationPage from './components/welcomPage/registration/ContainerRegistrationPage';
import ContainerWelcomPageWithUserData from './components/welcomPage/staticWelcomPage/ContainerWelcomPageWithUserData';
import ComponentNotFound from './components/welcomPage/ComponentNotFound';
import ContainerGamePage from './components/gamePage/ContainerGamePage';
import ContainerCongratulation from './components/congratulationPage/ContainerCongratulation';
import ContainerScore from './components/score/containerScore';
import ContainerProfile from './components/profile/ContainerProfile';



function App() {
  return (     
     <Router>
      <Switch>
        <Route path='/' exact component={ContainerRegistrationPage}/>
        <Route path='/welcome' component={ContainerWelcomPageWithUserData}/>
        <Route path='/game' component={ContainerGamePage}/>
        <Route path='/congratulation' component={ContainerCongratulation}/>
        <Route path='/score' component={ContainerScore}/>
        <Route path='/profile' component={ContainerProfile}/>
        <Route component ={ComponentNotFound}/>
      </Switch>      
    </Router>
  );
}

export default App;
