import React, { useEffect }  from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContainerRegistrationPage from './components/welcomPage/registration/ContainerRegistrationPage';
import ContainerWelcomPageWithUserData from './components/welcomPage/staticWelcomPage/ContainerWelcomPageWithUserData';
import { useHistory } from 'react-router-dom'
import {storageFullness} from './redux/actions/actionCreator'
import { useDispatch  } from 'react-redux'
import ComponentNotFound from './components/welcomPage/ComponentNotFound';
import ContainerGamePage from './components/gamePage/ContainerGamePage';



function App() {
  const history = useHistory()
  let dispatch = useDispatch()

//==============================LOCAL GET && SET=========================================      
  useEffect(()=>{
      let data = JSON.parse(localStorage.getItem("firstName"))
      dispatch(storageFullness(data ))
      if(data){
          history.push('/welcome')
      } else{
          history.push('/')
      }
  },[])


  return (     
     <Router>
      <Switch>
        <Route path='/' exact component={<ContainerRegistrationPage/>}/>
        <Route path='/welcome' component={<ContainerWelcomPageWithUserData/>}/>
        <Route path='/game' component={<ContainerGamePage/>}/>
        <Route component ={<ComponentNotFound/>}/>
      </Switch>      
    </Router>
  );
}

export default App;
