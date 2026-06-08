"use client";

import Building from "./Building";

import { useGithubCity }
from "@/hooks/useGithubCity";

export default function RealBuildingGrid() {
  const buildings =
    useGithubCity();

  return (
    <>
      {buildings.map(
        (
          building,
          index
        ) => (
          <Building
            key={building.id}
            name={
              building.username
            }
            position={[
              index * 4,
              0,
              0,
            ]}
            height={
              building.height
            }
          />
        )
      )}
    </>
  );
}