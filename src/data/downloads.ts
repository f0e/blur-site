export const releasesUrl = "https://github.com/f0e/blur/releases";

const latestDownloadUrl = `${releasesUrl}/latest/download`;

export interface Platform {
  id: string;
  label: string;
  description?: string;
  url: string;
}

export const platforms: Platform[] = [
  {
    id: "windows",
    label: "Windows",
    url: `${latestDownloadUrl}/blur-Windows-Installer-x64.exe`,
  },
  {
    id: "macos",
    label: "macOS",
    description: "Apple Silicon",
    url: `${latestDownloadUrl}/blur-macOS-Release-arm64.dmg`,
  },
  {
    id: "linux",
    label: "Linux",
    description: "Manual dependency installation required",
    url: `${latestDownloadUrl}/blur-Linux-Release-x64.tar.gz`,
  },
];
