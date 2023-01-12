import { IAppInfo } from '@/types';
import * as process from 'process';

const AppInfo: IAppInfo = {
  siteName: 'Next.js + Typescript + TailwindCSS Starter',
  siteDescription: 'Next.js + Typescript + TailwindCSS Starter boilerplate',
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://nextjs-starter.fransfp.dev'
      : `'http://localhost/3000`,
  email: 'fransfilastap@live.com',
  keywords: ['Next.js', 'Typescript', 'TailwindCSS', 'React'],
  twitter: '@franspotter',
};
export { AppInfo };
