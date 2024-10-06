import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts.css'
import App from './App';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import ZoomingBackground from './Components/comon/ZomingBack';
import PlanetScene from './Components/ui/PlanetScene/PlanetScene';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
     <Routes>
      {/* Default route for the App component */}
      <Route path="/" element={<App />} />
      {/* Additional route for the /nn path */}
      <Route path="/explore" element={<PlanetScene/>} />
    </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
