import React from "react";
import './LandingPage.css'
import { Link } from 'react-router-dom';

function LandingPage(){
  return(
    <div className="landing-page">
      <img className="b-img" src={require('./images/landingpage.png')}/>
    
      <img className="l-page-img" src={require('./images/clone.png')}/>
    
    <Link to="/postview">
      <button className="l-page-btn">Enter To My Page</button>
    </Link>
    </div>
  )
}
export default LandingPage;