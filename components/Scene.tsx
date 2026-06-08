"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Ground from "./city/Ground";
import Lighting from "./city/Lighting";
import BuildingGrid from "./city/BuildingGrid";

import RealBuildingGrid
from "./city/RealBuildingGrid";

export default function Scene() {
  return (
    <Canvas camera={{ position: [20, 20, 20] }}>
      <Lighting />
      <Ground />
      <RealBuildingGrid />
      <gridHelper args={[100, 100]} />
      <OrbitControls />
    </Canvas>
  );
}