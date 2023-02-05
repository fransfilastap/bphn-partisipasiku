import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { getIssues, getTopics } from '@/lib/content';
import { AppInfo } from '@/configs';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const issues = await getIssues();
  const topics = await getTopics();

  const fields: ISitemapField[] = issues.map((e) => ({
    loc: `${AppInfo.url}/diskusi/${e.slug}`,
    lastmod: new Date().toISOString(),
    priority: 0.7,
    changefreq: 'weekly',
  }));

  const topicFields: ISitemapField[] = topics.map((e) => ({
    loc: `${AppInfo.url}/kategori/${e.slug}`,
    lastmod: new Date().toISOString(),
    priority: 0.68,
    changefreq: 'weekly',
  }));

  return getServerSideSitemap(ctx, fields.concat(topicFields));
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function SitemapIndex() {}
