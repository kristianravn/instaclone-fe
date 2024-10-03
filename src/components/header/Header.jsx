import React from 'react'
import "./header.css"
import cloneHelmet from '../../assets/images/clone-helmet.png';

const Header = () => {
  return (
   
    <div className='height-ten flex flex-column header-wrapper'>
      <div className=' flex header-inner-wrapper'>
        <p>InstaCLONE</p>
        <div className='header-logo'>
      <img src={cloneHelmet} alt='InstaCLONE'/>
    </div>
      </div>
    </div>
  )
}

export default Header