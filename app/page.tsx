type Props = {
  user: any;
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
        z-50
      "
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-16 h-16 rounded-full"
      />

      <h2 className="font-bold mt-2">
        {user.login}
      </h2>

      <p>Repositories: {user.public_repos}</p>

      <p>Followers: {user.followers}</p>

      <p>Following: {user.following}</p>

      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400"
      >
        View Profile
      </a>
    </div>
  );
}