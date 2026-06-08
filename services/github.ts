export async function getGithubUser(
  username: string
) {
  const response = await fetch(
    `https://api.github.com/users/${null}`
  );

  if (!response.ok) {
    throw new Error("User not found");
  }

  return response.json();
}