import type { GithubUser } from "@/types/github";

type Props = {
  user: GithubUser | null;
};

export default function GithubUserCard({
  user,
}: Props) {
  if (!user) return null;

  return (
    <div
      className="
        absolute
        bottom-5
        right-5
        bg-black/80
        text-white
        p-4
        rounded-lg
        w-72
      "
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-16 h-16 rounded-full"
      />

      <h2 className="text-lg font-bold mt-2">
        {user.login}
      </h2>

      <p className="text-sm mt-1">
        Repositories: {user.public_repos}
      </p>

      <p className="text-sm">
        Followers: {user.followers}
      </p>
    </div>
  );
}