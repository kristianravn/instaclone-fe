import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Header.css"
import cloneHelmet from '../../assets/images/clone-helmet.png';

const Header = ({setIsloggedin,setLoggedUser}) => {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    setLoggedUser(false);
    setIsloggedin(false);
    navigate('/');
  } 

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
         <button className='Image-gallery-btn'onClick={() => navigate('/images')}>Images</button>
         <button className='Signout-btn'onClick={(e) => logout(e)}>Logout</button>
         <button className='Favourites-btn'onClick={() => navigate('/favourites')}>Favourites</button>
       </div>
        
       </div>
     </div>
     
   )


}



 


export default Header