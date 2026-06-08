export function calculateHeight(
  publicRepos: number
) {
  return Math.max(
    2,
    Math.floor(publicRepos / 5)
  );
}
export function getBuildingColor(
  followers: number
) {
  if (followers > 50000)
    return "#00ffff";

  if (followers > 5000)
    return "#ff00ff";

  return "#6666ff";
}