import React from 'react';
import { Sphere, useTexture } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';

import * as THREE from 'three';


const CelestialObject = ({ position, color, size, name, onClick, texturePath }) => {
  // Load the texture if provided, otherwise use the color
  const texture =  useLoader(THREE.TextureLoader, texturePath);

  return (
    <Sphere 
      args={[size, 32, 32]} // Size of the sphere, segments for smoothness
      position={position}    // Position in 3D space
      onClick={onClick}      // Click handler to open the modal
    >
      {/* Apply the texture if it exists, otherwise fallback to color */}
      <meshStandardMaterial 
        map={texture} 
        color={texture ? undefined : color} // Use color only if no texture
      />
    </Sphere>
  );
};

export default CelestialObject;
