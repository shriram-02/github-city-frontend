// utils/buildingMapper.ts
export function calculateHeight(repos: number): number {
  // Scale repos to a building height (e.g., 1–10 units)
  return Math.max(1, Math.min(10, Math.ceil(repos / 10)));
}
export function calculateWidth(
  repos: number
) {
  return Math.min(
    6,
    Math.max(
      2,
      Math.floor(repos / 10)
    )
  );
}

export function getBuildingColor(
  followers: number
) {
  if (followers > 100000)
    return "#00ffff";

  if (followers > 10000)
    return "#ff00ff";

  if (followers > 1000)
    return "#7c3aed";

  return "#3b82f6";
}