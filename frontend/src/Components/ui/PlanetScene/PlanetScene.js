// Components/PlanetScene/PlanetScene.js
import React, { startTransition, useEffect, useState } from 'react';
import { Canvas , useLoader} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CelestialObject from '../CelestialObject/CelestialObject';
import axios from 'axios';
import * as THREE from 'three';
import InfoPlanet from '../InfoPlanet/InfoPlanet';
import image1 from './../../../assets/images.jpeg';
import image2 from './../../../assets/images2.jpeg';
import image3 from './../../../assets/images3.jpeg';
import image4 from './../../../assets/images4.jpeg';
import image5 from './../../../assets/images5.jpeg';
import image6 from './../../../assets/images6.jpeg';
import image7 from './../../../assets/pic.jpeg';
import './PlanetScene.css';
import NavBar from '../../comon/NavBar';
import CardPlanet from '../CardPlanet/CardPlanet';


// Store image paths in an array
const paths = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7
];
function PlanetScene() {
  const [exoplanets, setExoplanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [selectedImage,setSelectedImage] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  // Convert RA/Dec to XYZ coordinates
  function raDecToXYZ(ra, dec, distance) {
    const raRad = THREE.MathUtils.degToRad(ra);
    const decRad = THREE.MathUtils.degToRad(dec);
    const x = distance * Math.cos(decRad) * Math.cos(raRad);
    const y = distance * Math.cos(decRad) * Math.sin(raRad);
    const z = distance * Math.sin(decRad);
    return { x, y, z };
  }

  // Fetch the data from the API
  useEffect(() => {
    const fetchExoplanets = async () => {
      try {
        const response = await axios.get('http://localhost:3001/allExoplanets/allExoplanets');
        const data = response.data;

        // Convert RA/Dec to XYZ
        const planetsWithCoords = data.map(planet => {
          const { ra, dec, sy_dist: distance } = planet;
          const { x, y, z } = raDecToXYZ(ra, dec, distance);
          return { x, y, z, pl_name: planet.pl_name, sy_dist: distance }; // Include distance
        });

        setExoplanets(planetsWithCoords);
      } catch (error) {
        console.error('Error fetching exoplanets:', error);
      }
    };

    fetchExoplanets();
  }, []);

  // Handle object click to show info
  const handleObjectClick = (planet,image) => {

    startTransition(() => {
      // Simuler une mise à jour asynchrone qui peut suspendre l'UI
      setSelectedImage(image);
    });
   console.log('***********************************************')
    console.log(planet)
    setSelectedPlanet(planet);
    console.log(planet.pl_name);
    setModalVisible(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  function getRandomPath(paths) {
    // Check if paths array is empty
    if (paths.length === 0) {
      throw new Error('Paths array cannot be empty');
    }
  
    // Generate a random index based on the length of the paths array
    const randomIndex = Math.floor(Math.random() * paths.length);
    
    // Return a random path
    return paths[randomIndex];
  }

  return (
  <div className='containerapp2'>
    <NavBar/>
    <div className='bigcontainerr'>
      <div className='space'>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={true} />

        {/* Render Celestial Objects using XYZ coordinates */}
        {exoplanets.map((planet, index) => {
        // Set texture path or other logic
        const texturePath = getRandomPath(paths); // Assuming texturePath is part of the planet object
        return (
          <CelestialObject
            key={index}
            position={[planet.x, planet.y, planet.z]}
            color='white' // Fallback color if texture fails to load
            size={0.5} // Adjust size as needed
            onClick={() => handleObjectClick(planet,texturePath)}
            texturePath={texturePath} // Pass the loaded texture
          />
        );
      })}
      </Canvas>
      </div>

      <div className='desc'>
         
      {isModalVisible && selectedPlanet && (
      //   <>
      //  <InfoPlanet 
      //     isVisible={true} 
      //     onClose={handleCloseModal} 
      //     objectName={selectedPlanet.pl_name}  
      //     distance={selectedPlanet.sy_dist}    
      //   />
  
        <CardPlanet  name={selectedPlanet.pl_name}  image={selectedImage}/>
       
      )}
      </div>
    </div>
    </div>
  );
}

export default PlanetScene;
