import { IAppInfo } from '@/types';
import * as process from 'process';

const AppInfo: IAppInfo = {
  siteName: 'Partisipasiku! | Badan Pembinaan Hukum Nasional',
  siteDescription:
    'Platform kolaborasi masyarakat dan pemerintah dalam membangun hukum',
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://bphn-partisipasiku.vercel.app/'
      : 'http://localhost/3000',
  email: 'fransfilastap@live.com',
  keywords: [
    'Partisipasiku',
    'BPHN',
    'RUU',
    'RPP',
    'RPerpres',
    'Naskah Akademik',
  ],
  twitter: '@franspotter',
};
export { AppInfo };
