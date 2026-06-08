type Props = {
  building: {
    name: string;
    height: number;
  } | null;
};

export default function BuildingPanel({
  building,
}: Props) {
  if (!building) return null;

  return (
    <div
      className="
      absolute
      top-5
      right-5
      bg-black/80
      text-white
      p-4
      rounded-lg
      border
      "
    >
      <h2 className="font-bold">
        {building.name}
      </h2>

      <p>
        Height: {building.height.toFixed(1)}
      </p>
    </div>
  );
}