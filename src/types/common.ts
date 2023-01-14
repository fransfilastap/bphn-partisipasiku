export interface IAppInfo {
  siteName: string;
  siteDescription: string;
  url: string;
  email: string;
  twitter: string;
  keywords: string[];
}

export interface ISeo {
  title: string;
  siteName: string;
  description: string;
  url: string;
  type: string;
  image: string;
  locale: string;
  robots: string;
  twitterHandler: string;
  cardType: string;
}

export type ColorMode = 'light' | 'dark' | 'system';
