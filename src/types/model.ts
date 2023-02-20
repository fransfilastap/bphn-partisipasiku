import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type ContentIssue = {
  id: string;
  title: string;
  description: string;
  topic: string;
  slug: string;
  cover: ContentImage;
  meta: ContentMeta;
  markdown: MDXRemoteSerializeResult;
  createdAt: Date;
};

export type ContentIssues = {
  data: ContentIssue[];
  pagination: {
    page: number | string;
    pageCount: number | string;
    pageSize: number | string;
    total: number | string;
  };
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
  cloudinaryPublicId: string;
};

export type ContentTopic = {
  id: string;
  description: string;
  name: string;
  slug: string;
  createdAt: Date;
  publishedAt: Date;
};
