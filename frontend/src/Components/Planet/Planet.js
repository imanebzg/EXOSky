// src/Planet.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Planet = () => {
  // Load the texture for the planet
  const texture = new THREE.TextureLoader().load(
    'https://upload.wikimedia.org/wikipedia/commons/1/13/Earthmap1000x500compac.jpg'
  );

  return (
    <Canvas style={{ height: '150px', width: '150px' }}>
      {/* OrbitControls to allow rotation */}
      <OrbitControls enableZoom={true} enablePan={true} />

      {/* Adding light */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Sphere representing the planet */}
      <Sphere args={[5, 32, 32]} scale={1}>
        <meshStandardMaterial map={texture} />
      </Sphere>
    </Canvas>
  );
};

export default Planet;
