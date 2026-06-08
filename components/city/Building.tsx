"use client";

import { useState } from "react";
import { useCityStore } from "@/stores/cityStore";

type Props = {
  name: string;
  position: [number, number, number];
  height: number;
};

export default function Building({
  name,
  position,
  height,
}: Props) {
  const [hovered, setHovered] = useState(false);

  const setSelectedBuilding = useCityStore(
    (state) => state.setSelectedBuilding
  );

  return (
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
        })
      }
    >
      <boxGeometry args={[1, height, 1]} />

      <meshStandardMaterial
        color={
          hovered
            ? "#00ff00"
            : height > 7
            ? "#00ffff"
            : height > 4
            ? "#ff00ff"
            : "#6666ff"
        }
      />
    </mesh>
  );
}