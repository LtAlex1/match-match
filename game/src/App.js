import React from 'react'
import ContainerWelcomPage from './components/welcomPage/ContainerWelcomPage'
import ContainerGamePage from './components/gamePage/ContainerGamePage'



// Тут я могу получать Local и если они есть то рисовать без регистрации


function App() {
  return (
 
<>
    <div className="App">
        <ContainerWelcomPage/>
    </div>
    <div> 
        <ContainerGamePage/>
    </div>
  </>  


  );
}

export default App;
