// App.js
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CelestialObject from './Components/CelestialObject';
import InfoPlanet from './Components/InfoPlanet';
import Planet from './Components/Planet/Planet'
import './App.css'

function App() {
  const [selectedObject, setSelectedObject] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  // Handle object click
  const handleObjectClick = (name) => {
    setSelectedObject(name);  // Store the name of the clicked object
    setModalVisible(true);    // Show the modal
  };

  // Handle modal close
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // Array of objects with their coordinates and names
  const objects = [
    { position: [10, 15, -30], color: 'red', size: 2, name: 'Red Planet' },
    { position: [-20, 10, 10], color: 'blue', size: 1.5, name: 'Blue Planet' },
    { position: [30, -5, 20], color: 'green', size: 3, name: 'Green Planet' },
    { position: [50, 50, -50], color: 'yellow', size: 1, name: 'Yellow Star' },
  ];

  return (
    <div className='container'>
      <div className='infocontainer' >
      <InfoPlanet 
        isVisible={isModalVisible} 
        onClose={handleCloseModal} 
        objectName={selectedObject} 
      />
      <Planet/>
      </div>
        <div className='spacecontainer'  >
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={true} />

        {/* Loop through the objects and place them in 3D space */}
        {objects.map((obj, index) => (
          <CelestialObject 
            key={index} 
            position={obj.position} 
            color={obj.color} 
            size={obj.size} 
            name={obj.name} 
            onClick={() => handleObjectClick(obj.name)}  // Pass the click handler
          />
        ))}
      </Canvas>

      
    </div>
    </div>
   
  );
}

export default App;
