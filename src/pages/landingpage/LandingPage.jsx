import React from 'react';
import './LandingPage.css'; 

import LogOrSign from "../../components/LogOrSign/LogOrSign"

const LandingPage = ({setLoggedUser, setIsLoggedIn}) => {
  return (
    <div className='height-eighty container'>
      <div className="profile-pic"></div>
      <LogOrSign setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn}/>
    </div>
  );
}

export default LandingPage;
