"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div
      className="
      absolute
      top-5
      left-5
      z-50
      "
    >
      <input
        type="text"
        placeholder="Search developer..."
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
          px-4
          py-2
          rounded
          border
          bg-black
          text-white
        "
      />
    </div>
  );
}