type BuildingProps = {
  position: [number, number, number];
  height: number;
};

export default function Building({
  position,
  height,
}: BuildingProps) {
  return (
    <mesh
      position={[
        position[0] * 2,
        height / 2,
        position[2] * 2,
      ]}
    >
      <boxGeometry args={[1, height, 1]} />

      <meshStandardMaterial
        color={
          height > 7
            ? "#00ffff"
            : height > 4
            ? "#ff00ff"
            : "#6666ff"
        }
      />
    </mesh>
  );
}