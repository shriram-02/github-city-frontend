"use client";

import { useEffect, useState } from "react";

import { githubUsers }
from "@/data/githubUsers";

import { getGithubUser }
from "@/services/github";

import { calculateHeight }
from "@/utils/buildingMapper";

export function useGithubCity() {
  const [buildings, setBuildings] =
    useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const users =
        await Promise.all(
          githubUsers.map(
            (username) =>
              getGithubUser(username)
          )
        );

      const city =
        users.map((user) => ({
          id: user.login,
          username: user.login,
          repos: user.public_repos,
          followers:
            user.followers,
          height:
            calculateHeight(
              user.public_repos
            ),
        }));

      setBuildings(city);
    }

    load();
  }, []);

  return buildings;
}