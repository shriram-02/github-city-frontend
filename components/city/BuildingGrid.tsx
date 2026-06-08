"use client";

import { useState } from "react";

import Building from "./Building";

import { mockBuildings } from "@/data/mockBuildings";

import BuildingInfo from "@/components/ui/BuildingInfo";

export default function BuildingGrid() {
  const [selected, setSelected] =
    useState<any>(null);

  return (
    <>
      {mockBuildings.map(
        (building) => (
          <Building
            key={building.id}
            name={building.name}
            position={[
              building.x * 3,
              0,
              building.z * 3,
            ]}
            height={building.height}
            onSelect={() =>
              setSelected(building)
            }
          />
        )
      )}

      {selected && (
        <BuildingInfo
          name={selected.name}
          height={selected.height}
        />
      )}
    </>
  );
}