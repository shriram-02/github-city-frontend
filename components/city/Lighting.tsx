export default function Lighting() {
  return (
    <>
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[10, 10, 5]}
        intensity={2}
      />
    </>
  );
}