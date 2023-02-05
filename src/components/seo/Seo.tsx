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
    seoProps.pageTitle != null ? `${seoProps.pageTitle}` : AppInfo.siteName;
  const description = seoProps.description ?? AppInfo.siteDescription;
  const url =
    seoProps.url === null
      ? `${AppInfo.url}/${seoProps.url}`
      : `${AppInfo.url}${router.asPath}`;
  const cannonicalUrl = `${AppInfo.url}/${seoProps.url && seoProps.url}`;
  const ogImage =
    seoProps.image ?? `${AppInfo.url}/api/og?title=${encodeURI(title)}`;

  return (
    <Head>
      <title>{title}</title>
      <meta
        name='robots'
        content='index,follow'
      />
      <meta
        content={description}
        name='description'
      />
      <meta
        property='og:url'
        content={`${url}`}
      />
      <link
        rel='canonical'
        href={cannonicalUrl}
      />
      {/* Open Graph */}
      <meta
        property='og:type'
        content={seoProps.type}
      />
      <meta
        property='og:site_name'
        content={AppInfo.siteName}
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
        property='og:image'
        content={ogImage}
      />
      <meta
        property='og:image:secure_url'
        content={ogImage}
      />

      <meta
        property='og:image:type'
        content='image/jpeg'
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
        content={ogImage}
      />
    </Head>
  );
}
