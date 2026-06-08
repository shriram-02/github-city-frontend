"use client";

import { useEffect, useState } from "react";

import { githubUsers } from "@/data/githubUsers";
import { getGithubUser } from "@/services/github";
import { calculateHeight } from "@/utils/buildingMapper";
import type { Building } from "@/types/github";

export function useGithubCity() {
  const [buildings, setBuildings] =
    useState<Building[]>([]);

  const [error, setError] =
    useState<string | null>(null);

  const [loading, setLoading] =
    useState<boolean>(true);

  useEffect(() => {
    async function load() {
      try {
        const users = await Promise.all(
          githubUsers.map((username) =>
            getGithubUser(username)
          )
        );

        const city: Building[] = users.map(
          (user) => ({
            id: user.login,
            username: user.login,
            repos: user.public_repos,
            followers: user.followers,
            height: calculateHeight(
              user.public_repos
            ),
          })
        );

        setBuildings(city);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load GitHub data"
        );
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { buildings, loading, error };
}