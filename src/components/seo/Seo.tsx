import { ReactElement } from 'react';
import Head from 'next/head';
import { AppInfo } from '@/configs';
import { ISeo } from '@/types';
import { useRouter } from 'next/router';

type SeoProps = {
  pageTitle?: string;
} & Partial<ISeo>;
export default function Seo(seoProps: SeoProps): ReactElement {
  const router = useRouter();
  const title =
    seoProps.pageTitle != null
      ? `${seoProps.pageTitle} | ${seoProps.siteName ?? AppInfo.siteName}`
      : AppInfo.siteName;
  const description = seoProps.description ?? AppInfo.siteDescription;
  const url = seoProps.url ?? AppInfo.url;
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='robots'
        content={seoProps.robots}
      />
      <meta
        content={description}
        name='description'
      />
      <meta
        property='og:url'
        content={`${url}${router.asPath}`}
      />
      <link
        rel='canonical'
        href={`${seoProps.url}${router.asPath}`}
      />

      {/* Open Graph */}
      <meta
        property='og:type'
        content={seoProps.type}
      />
      <meta
        property='og:site_name'
        content={seoProps.siteName}
      />
      <meta
        property='og:description'
        content={description}
      />
      <meta
        property='og:title'
        content={title}
      />
      <meta
        name='image'
        property='og:image'
        content={seoProps.image}
      />

      {/* Twitter */}
      <meta
        name='twitter:card'
        content='summary_large_image'
      />
      <meta
        name='twitter:site'
        content={seoProps.twitterHandler ?? AppInfo.twitter}
      />
      <meta
        name='twitter:title'
        content={title}
      />
      <meta
        name='twitter:description'
        content={description}
      />
      <meta
        name='twitter:image'
        content={seoProps.image}
      />
    </Head>
  );
}
