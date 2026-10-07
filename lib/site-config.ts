export const siteConfig = {
  brand: { name: "WaSanDo", mark: "和讃堂" },
  locales: ["ja", "en", "pl"] as const,
  defaultLocale: "ja" as const,
};

export type Locale = (typeof siteConfig.locales)[number];
