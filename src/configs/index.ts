import { IAppInfo } from '@/types';

const AppInfo: IAppInfo = {
  siteName: 'Partisipasiku! | Badan Pembinaan Hukum Nasional',
  siteDescription:
    'Platform kolaborasi masyarakat dan pemerintah dalam membangun hukum',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  email: 'humas@bphn.go.id',
  keywords: [
    'Partisipasiku',
    'BPHN',
    'RUU',
    'RPP',
    'RPerpres',
    'Naskah Akademik',
  ],
  twitter: '@bphn_kumham',
};
export { AppInfo };
