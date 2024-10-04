import React from 'react'
import "./header.css"
import cloneHelmet from '../../assets/images/clone-helmet.png';


const Header = () => {
  return (
   <div className='height-ten flex flex-column header-wrapper'>
      <div className=' flex header-inner-wrapper'>
     <div className='header-logo'>
          <img src={cloneHelmet} alt='InstaCLONE'/>
      </div>
      <div className='Instaclone-app'>
        <p>InstaCLONE</p>
      </div>

        <div className= 'buttons-container'>
        <button className='Image-gallery-btn'>Images</button>
        <button className='Signout-btn'>Signout</button>
        <button className= 'Profile-btn'>Profile</button>
        <button className= 'Notifications-btn'>Notifications</button>
        <button className='Favourites-btn'>Favourites</button>
      </div>
       
      </div>
    </div>
    
  )
}

export default Header