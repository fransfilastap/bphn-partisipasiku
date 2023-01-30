import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

export async function parseMarkdown(
  content: string
): Promise<MDXRemoteSerializeResult> {
  return serialize(content, {
    mdxOptions: {
      format: 'mdx',
    },
  });
}
