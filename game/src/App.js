import React, { useEffect }  from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContainerRegistrationPage from './components/welcomPage/registration/ContainerRegistrationPage';
import ContainerWelcomPageWithUserData from './components/welcomPage/staticWelcomPage/ContainerWelcomPageWithUserData';

import ComponentNotFound from './components/welcomPage/ComponentNotFound';
import ContainerGamePage from './components/gamePage/ContainerGamePage';



function App() {

  return (     
     <Router>
      <Switch>
        <Route path='/' exact component={ContainerRegistrationPage}/>
        <Route path='/welcome' component={ContainerWelcomPageWithUserData}/>
        <Route path='/game' component={ContainerGamePage}/>
        <Route component ={ComponentNotFound}/>
      </Switch>      
    </Router>
  );
}

export default App;
