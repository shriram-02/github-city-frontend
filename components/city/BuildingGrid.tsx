import Building from "./Building";

export default function BuildingGrid() {
  const buildings = [];

  for (let x = -10; x < 10; x++) {
    for (let z = -10; z < 10; z++) {
      buildings.push({
        x,
        z,
        height:
          Math.random() * 8 + 1,
      });
    }
  }

  return (
    <>
      {buildings.map(
        (building, index) => (
          <Building
            key={index}
            position={[
              building.x * 2,
              0,
              building.z * 2,
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