import LogOrSign from "../../components/LogOrSign/LogOrSign"


const LandingPage = ({setLoggedUser, setIsLoggedIn}) => {
  return (
    <LogOrSign setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn}/>
  );
}

export default LandingPage
{/* <div className='height-eighty'>LandingPage</div> */}
