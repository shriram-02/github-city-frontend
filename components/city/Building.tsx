"use client";

import { useState } from "react";

type Props = {
  name: string;
  position: [number, number, number];
  height: number;
  onSelect: () => void;
};

export default function Building({
  name,
  position,
  height,
  onSelect,
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      position={[
        position[0],
        height / 2,
        position[2],
      ]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onSelect}
    >
      <boxGeometry args={[1, height, 1]} />

      <meshStandardMaterial
        color={
          hovered
            ? "#00ff00"
            : "#00ffff"
        }
      />
    </mesh>
  );
}