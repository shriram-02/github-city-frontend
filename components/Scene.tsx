"use client";

import { Canvas } from "@react-three/fiber";

export default function Scene() {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <ambientLight intensity={2} />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}
