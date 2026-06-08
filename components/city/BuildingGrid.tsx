"use client";

import { useState } from "react";

import Building from "./Building";
import { mockBuildings } from "@/data/mockBuildings";
import BuildingInfo from "@/components/ui/BuildingInfo";

type Props = {
  search?: string;
};

export default function BuildingGrid({ search = "" }: Props) {
  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      {mockBuildings
        .filter((building) =>
          building.name.toLowerCase().includes(search.toLowerCase()),
        )
        .map((building) => (
          <Building
            key={building.id}
            position={[building.x * 3, 0, building.z * 3]}
            height={building.height}
            onSelect={() => setSelected(building)} name={""}          />
        ))}

      {selected && (
        <BuildingInfo name={selected.name} height={selected.height} />
      )}
    </>
  );
}
