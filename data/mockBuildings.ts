import { BuildingData } from "@/types/building";

export const mockBuildings: BuildingData[] = [];

for (let x = -10; x < 10; x++) {
  for (let z = -10; z < 10; z++) {
    mockBuildings.push({
      id: mockBuildings.length,
      name: `github-user-${mockBuildings.length}`,
      height: Math.random() * 10 + 2,
      x,
      z,
    });
  }
}