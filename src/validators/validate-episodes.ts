const EPISODES = ["NEWHOPE", "EMPIRE", "JEDI"];

export function validateEpisodes(episodes: string[]) {
  if (!episodes.every((episode) => EPISODES.includes(episode))) {
    throw new Error(`Episodes must be one of [${EPISODES.join(", ")}]`);
  }
}
