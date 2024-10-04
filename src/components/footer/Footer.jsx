import "./Footer.css";
import cloneHelmet from '../../assets/images/clone-helmet.png';

const Footer = () => {
  return (
    <div className='height-ten flex flex-column footer-wrapper'>
    <div className=' flex footer-inner-wrapper'>
        <div className='header-logo'>
        <img src={cloneHelmet} alt='InstaCLONE'/>
        </div>
        <div className='Instaclone-app'>
        <p>InstaCLONE</p>
      </div>
    </div>
  </div>
  )
}

export default Footer