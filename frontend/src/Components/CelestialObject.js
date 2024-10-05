// CelestialObject.js
import React from 'react';

function CelestialObject({ position, color = 'white', size = 1, name, onClick }) {
  return (
    <mesh position={position} onClick={onClick}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default CelestialObject;
