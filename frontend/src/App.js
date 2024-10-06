// App.js
import React, { useState } from 'react';
import InfoPlanet from './Components/InfoPlanet/InfoPlanet';
import Planet from './Components/Planet/Planet';
import PlanetScene from './Components/PlanetScene/PlanetScene';  // Import PlanetScene
import './App.css';

function App() {
  const [selectedObject, setSelectedObject] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  // Handle object click
  const handleObjectClick = (name) => {
    setSelectedObject(name);  // Store the name of the clicked object
    setModalVisible(true);    // Show the modal
  };

  return (
    <div className='App'> 
    
      
        {/* Render the PlanetScene component */}
        <PlanetScene handleObjectClick={handleObjectClick} />
    </div>
  );
  
}

export default App;
