"use client";

import { useState } from "react";
import { useCityStore } from "@/stores/cityStore";
import { Text } from "@react-three/drei";

type Props = {
  name: string;
  position: [number, number, number];
  height: number;
  width: number;
  color: string;
  followers: number;
  repos: number;
};

export default function Building({
  name,
  position,
  height,
  width,
  color,
  followers,
  repos,
}: Props) {
  const [hovered, setHovered] = useState(false);

  const setSelectedBuilding = useCityStore(
    (state) => state.setSelectedBuilding
  );

  return (
    <group>
      <mesh
        position={[
          position[0],
          height / 2,
          position[2],
        ]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() =>
          setSelectedBuilding({
            name,
            height,
            followers,
            repos,
          })
        }
      >
        <boxGeometry
          args={[
            width,
            height,
            width,
          ]}
        />

        <meshStandardMaterial
          color={hovered ? "#00ff00" : color}
        />
      </mesh>

      <Text
        position={[
          position[0],
          height + 1,
          position[2],
        ]}
        fontSize={0.5}
        maxWidth={5}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
}