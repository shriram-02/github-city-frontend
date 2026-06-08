export interface GithubUser {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

export interface Building {
  id: string;
  username: string;
  repos: number;
  followers: number;
  height: number;
}