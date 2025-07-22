import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RainDrop({ position, speed, scale }) {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.position.y -= speed;

      if (ref.current.position.y < -5) {
        ref.current.position.y = 5 + Math.random() * 5;
        ref.current.position.x = (Math.random() - 0.5) * 10;
        ref.current.position.z = (Math.random() - 0.5) * 10;
      }
    }
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <boxGeometry args={[scale[0], scale[1], scale[2]]} />
      <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={1} />
    </mesh>
  );
}

function RainDrops() {
  const drops = useMemo(() => {
    return new Array(200).fill().map(() => {
      const width = 0.02 + Math.random() * 0.05;
      const height = 0.4 + Math.random() * 1.2;
      const depth = 0.02 + Math.random() * 0.05;

      return {
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 10,
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.02 + Math.random() * 0.03,
        scale: [width, height, depth],
      };
    });
  }, []);

  return drops.map((drop, index) => (
    <RainDrop key={index} {...drop} />
  ));
}

export default function RainEffect() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 10, 0]} intensity={1} />
        <RainDrops />
      </Canvas>
    </div>
  );
}
