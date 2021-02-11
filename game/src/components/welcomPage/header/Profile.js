import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
 

 function Profile() {

    return (
        <div className = 'header__items--images'>
         <Link to='/profile'><img src ={'../../..//images/gudok.jpg'}/></Link>   
        </div>
    )
}



export default  Profile