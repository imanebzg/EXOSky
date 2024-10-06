// InfoPlanet.js
import React from 'react';
import './InfoPlanet.css';

const InfoPlanet = ({ isVisible, onClose, objectName, distance }) => {
  if (!isVisible) return null;  // Don't render if not visible
  else console.log('InfoPlanet Props:', { objectName, distance });
  return (
    <div className='modal'>
      <h2>Planet Information</h2>
      <p><strong>Name:</strong> {objectName}</p>
      <p><strong>Distance:</strong> {distance} parsecs</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default InfoPlanet;
