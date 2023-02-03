import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type ContentIssue = {
  id: string;
  title: string;
  topic: string;
  slug: string;
  cover: ContentImage;
  meta: ContentMeta;
  markdown: MDXRemoteSerializeResult;
  createdAt: Date;
};

export type ContentMeta = {
  description: string;
  title: string;
  og?: string | undefined;
};

export type ContentImage = {
  url: string;
  coverUrl: string;
  placeholder: string;
  caption: string;
  alternativeText: string;
};

export type ContentTopic = {
  id: string;
  description: string;
  name: string;
  slug: string;
  createdAt: Date;
  publishedAt: Date;
};
