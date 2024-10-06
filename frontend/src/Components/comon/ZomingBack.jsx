// ZoomingBackground.js
import React, { useEffect, useState } from 'react';
import './ZoomingBackground.css'; // Import the CSS file
import App from '../../App';

const ZoomingBackground = () => {
    const [scale, setScale] = useState(1);
    const [zoomingIn, setZoomingIn] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setZoomingIn((prev) => !prev);
        }, 2000); // Change direction every 2 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (zoomingIn) {
            setScale(1.2); // Zoom in scale
        } else {
            setScale(1); // Reset scale (zoom out)
        }
    }, [zoomingIn]);

    return (
        <div className="background" style={{ transform: `scale(${scale})` }}>
            <main  className='appmain'>

<div className='maincontainer'>
<div className='title'>
  <p>
  SPACE
  </p>
  <p>
  EXPLORATION 
  </p>
 </div>

 <div className='description'>
   
   <p className='para'>
   Join us on a journey through the cosmos, where you can discover exoplanets and their fascinating features.
   </p>

 </div>
 
 <div className='containerdiscover'>
 <button className='discover'>
  Discover Exoplanet
  </button>
 </div>

</div>
</main>
        </div>
    );
};

export default ZoomingBackground;