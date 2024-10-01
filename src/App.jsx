import {useState, useEffect} from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/landingpage/LandingPage';
import ImagesPage from './pages/imagespage/ImagesPage';
import './App.css'
import Layout from './components/layout/Layout';

function App() {
  

  return (
    <>    
     <div>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/images" element = {<ImagesPage/>} />
          </Routes>
         </Layout>
      </div>
    </>
  )
}

export default App
