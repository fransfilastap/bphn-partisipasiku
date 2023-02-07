import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeFigure from 'rehype-figure';

export async function parseMarkdown(
  content: string
): Promise<MDXRemoteSerializeResult> {
  return serialize(content, {
    mdxOptions: {
      format: 'mdx',
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypeFigure, { className: ['figure'] }]],
    },
  });
}
