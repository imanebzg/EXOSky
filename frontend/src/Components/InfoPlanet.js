// Modal.js
import React from 'react';
import './InfoPlanet.css'; // Ensure you create this file for styling

function InfoPlanet({ isVisible, onClose, objectName }) {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{objectName}</h2>
        <p>This is a celestial object called {objectName}. You can add more details here.</p>
        <img src={`/${objectName}.jpg`} alt={objectName} /> {/* Add relevant images */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default InfoPlanet;
