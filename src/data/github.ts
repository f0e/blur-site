export const githubUrl = "https://github.com/f0e/blur";

const starsPromise: Promise<number | undefined> = fetch(
  "https://api.github.com/repos/f0e/blur",
  { headers: { Accept: "application/vnd.github+json" } },
)
  .then((res) => (res.ok ? res.json() : undefined))
  .then((repo) => repo?.stargazers_count)
  .catch(() => undefined);

export const getStars = () => starsPromise;

export const formatStars = (stars: number) =>
  new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  })
    .format(stars)
    .toLowerCase();
