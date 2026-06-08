type Props = {
  name: string;
  height: number;
};

export default function BuildingInfo({ name, height }: Props) {
  return (
    <div
      className="
      absolute
      top-5
      right-5
      bg-black
      text-white
      p-4
      rounded
      "
    >
      <h2>{name}</h2>

      <p>Height: {height.toFixed(1)}</p>
    </div>
  );
}
