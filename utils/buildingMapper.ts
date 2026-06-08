export function calculateHeight(
  publicRepos: number
) {
  return Math.max(
    2,
    Math.floor(publicRepos / 5)
  );
}