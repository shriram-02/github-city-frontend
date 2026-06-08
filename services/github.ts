import type { GithubUser } from "@/types/github";

export async function getGithubUser(
  username: string
): Promise<GithubUser> {
  const response = await fetch(
    `https://api.github.com/users/${username}`
  );

  if (!response.ok) {
    throw new Error(
      `User not found: ${username}`
    );
  }

  return response.json() as Promise<GithubUser>;
}