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
  background: MDXRemoteSerializeResult;
  name: string;
  slug: string;
  createdAt: Date;
  publishedAt: Date;
  attachment: ContentImage;
};

export type ViewCountResponse = {
  data: [
    {
      id: number;
      attributes: {
        issue: number;
        count: number;
      };
    }
  ];
};

export type Biodata = {
  name: string;
  email: string;
  onbehalf: string;
  pekerjaan: string;
  instansi: string;
};

export type PendapatKu = {
  id: number;
  attributes: {
    judul: string;
    pendapat: string;
    response: string;
    attachment: string;
    biodata: Biodata;
    legacyDate: Date;
    createdAt: Date;
  };
};

export type PendapatKuResponse = {
  data: [PendapatKu];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
};
