export declare global {
  var ThemeProvider: {
    getPreference(): string;
    setPreference(preference: string): void;
    isDarkTheme(): boolean;
    applyTheme(): void;
  };
  var GithubStars: {
    get(
      repo: string,
    ): { count: number; formatted: string; fetchedAt: number } | undefined;
    set(repo: string, count: number, formatted: string): void;
    show(repo: string): void;
  };
}
