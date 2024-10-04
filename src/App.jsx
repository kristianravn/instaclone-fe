import {useState, useEffect} from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/landingpage/LandingPage';
import ImagesPage from './pages/imagespage/ImagesPage';
import './App.css'
import Layout from './components/layout/Layout';

function App() {
  const [loggedUser, setLoggedUser] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>    
     <div>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/images" element = {<ImagesPage/>} />
          </Routes>
         </Layout>
      </div>
    </>
  )
}

export default App
