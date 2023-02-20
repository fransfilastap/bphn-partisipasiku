import { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import MarkdownComponents from '@/components/markdown/index';
import clsxtw from '@/lib/clsxtw';

type MarkdownProps = ComponentPropsWithoutRef<'article'> & {
  mdx: MDXRemoteSerializeResult;
};
const Markdown: FunctionComponent<MarkdownProps> = (props) => {
  return (
    <article
      className={clsxtw(
        'prose font-[300] prose-black dark:prose-invert max-w-none',
        props.className
      )}
    >
      <MDXRemote
        {...props.mdx}
        components={MarkdownComponents}
      />
    </article>
  );
};

export default Markdown;
