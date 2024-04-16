const urlMapping: Record<string, string | undefined> = {
  "https://www.stakelab.fr": "https://www.stakelab.zone",
};

export const parseWebsite = (website?: string) => {
  if (!website?.trim()) return "";

  const mappedUrl = urlMapping[website];

  if (mappedUrl) return mappedUrl;

  if (!website.startsWith("https://")) {
    return `https://${website}`;
  }

  return website;
};
