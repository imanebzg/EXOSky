// import React, { useEffect, useRef, useState } from 'react'; // Import useRef from React
// import { Canvas, useLoader, useFrame } from '@react-three/fiber'; // Import necessary hooks from @react-three/fiber
// import { OrbitControls, Sphere } from '@react-three/drei'; // Import OrbitControls and Sphere from drei
// import * as THREE from 'three'; // Import three.js

// const RotatingSphere = ({image}) => {
//   const sphereRef = useRef(); // Create a ref for the sphere

//   // Use useLoader to load the texture
//   const texture = useLoader(THREE.TextureLoader, image);

//   // Rotate the sphere on each frame
//   useFrame(() => {
//     if (sphereRef.current) {
//       sphereRef.current.rotation.y += 0.005; // Adjust the rotation speed as needed
//     }
//   });

//   return (
//     <Sphere ref={sphereRef} args={[5, 32, 32]} position={[0, 0, 0]} scale={1}>
//       {/* Use the texture in meshStandardMaterial */}
//       <meshStandardMaterial map={texture} />
//     </Sphere>
//   );
// };

// const Planet = ({ image }) => {
//   const [texture, setTexture] = useState(null);

//   useEffect(() => {
//     const loadTexture = async () => {
//       try {
//         const newTexture = await new THREE.TextureLoader().loadAsync(image);
//         setTexture(newTexture);
//       } catch (error) {
//         console.error("Erreur lors du chargement de la texture :", error);
//       }
//     };

//     if (image) {
//       loadTexture();
//     }
//   }, [image]);

//   return (
//     <Canvas style={{ height: '200', width: '200px' }} camera={{position:[0,0,10]}} >
//       <OrbitControls enableZoom={false} enablePan={true} />
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} intensity={1} />
//       <Sphere args={[5, 32, 32]} scale={1} position={[0, 0, 0]}>
//         {texture && <meshStandardMaterial map={texture} />}
//       </Sphere>
//       {/* <perspectiveCamera 
//         makeDefault 
//         position={[0, 0, 10]}  
//         fov={75} */}
//       {/* /> */}
//       <RotatingSphere image={texture}/>
//     </Canvas>
//   );
// };

// export default Planet;


import React, { useEffect, useRef, useState } from 'react'; // Import useRef from React
import { Canvas, useLoader, useFrame } from '@react-three/fiber'; // Import necessary hooks from @react-three/fiber
import { OrbitControls, Sphere } from '@react-three/drei'; // Import OrbitControls and Sphere from drei
import * as THREE from 'three'; // Import three.js

const RotatingSphere = ({ texture }) => {
  const sphereRef = useRef(); // Create a ref for the sphere

  // Rotate the sphere on each frame
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.005; // Adjust the rotation speed as needed
    }
  });

  return (
    <Sphere ref={sphereRef} args={[5, 32, 32]} position={[0, 0, 0]} scale={1}>
      {/* Use the texture in meshStandardMaterial */}
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
};

const Planet = ({ image }) => {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const loadTexture = async () => {
      try {
        const newTexture = await new THREE.TextureLoader().loadAsync(image);
        setTexture(newTexture);
      } catch (error) {
        console.error("Erreur lors du chargement de la texture :", error);
      }
    };

    if (image) {
      loadTexture();
    }
  }, [image]);

  return (
    <Canvas style={{ height: '200px', width: '200px' }} camera={{ position: [0, 0, 10] }}>
      <OrbitControls enableZoom={false} enablePan={true} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* Pass the texture to the RotatingSphere component */}
      {texture && <RotatingSphere texture={texture} />}
    </Canvas>
  );
};

export default Planet;

