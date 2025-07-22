import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Generate random color
const getRandomColor = () => new THREE.Color(Math.random(), Math.random(), Math.random());

const BOUNDARY = 5;

function BouncingBox({ position, velocity, color, scale }) {
  const meshRef = useRef();

  const box = useRef({
    pos: [...position],
    vel: [...velocity],
  });

  useFrame(() => {
    for (let i = 0; i < 3; i++) {
      box.current.pos[i] += box.current.vel[i];
      if (Math.abs(box.current.pos[i]) > BOUNDARY) {
        box.current.pos[i] = Math.sign(box.current.pos[i]) * BOUNDARY;
        box.current.vel[i] *= -1; // bounce
      }
    }

    if (meshRef.current) {
      meshRef.current.position.set(...box.current.pos);
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function BouncingBoxes({ count = 40 }) {
  const boxes = useMemo(() => {
    return new Array(count).fill().map(() => ({
      position: [
        (Math.random() - 0.5) * BOUNDARY * 2,
        (Math.random() - 0.5) * BOUNDARY * 2,
        (Math.random() - 0.5) * BOUNDARY * 2,
      ],
      velocity: [
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05,
      ],
      color: getRandomColor(),
      scale: 0.3 + Math.random() * 0.7,
    }));
  }, [count]);

  return boxes.map((box, idx) => <BouncingBox key={idx} {...box} />);
}

export default function ThreeModel() {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <BouncingBoxes count={50} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
