import {useState, useEffect} from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/landingpage/LandingPage';
import ImagePage from './pages/imagespage/ImagesPage';
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
     <div>
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ImagePage" element = {<ImagePage/>} />
        
     
      </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
