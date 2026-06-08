"use client";

import Building from "./Building";

import { useGithubCity } from "@/hooks/useGithubCity";

export default function RealBuildingGrid() {
  const buildings = useGithubCity();

  return (
    <>
      {buildings.map((building, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;

        return (
          <Building
            key={building.id}
            name={building.username}
            position={[col * 8, 0, row * 8]}
            height={building.height}
          />
        );
      })}
    </>
  );
}
