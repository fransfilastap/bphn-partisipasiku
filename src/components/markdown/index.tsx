import AdvanceImage from '@/components/image/AdvanceImage';
import { ImageProps } from 'next/image';
import { FunctionComponent, PropsWithChildren } from 'react';
import { MDXComponents } from 'mdx/types';
import Link, { LinkProps } from 'next/link';
import { DEFAULT_PLACEHOLDER } from '@/lib/image';

type MarkdownImageProps = ImageProps & {
  caption?: string;
};
const MarkdownImage: FunctionComponent<MarkdownImageProps> = (props) => {
  return (
    <AdvanceImage
      width={800}
      height={600}
      quality={70}
      className='rounded-xl shadow-md'
      blurDataURL={DEFAULT_PLACEHOLDER}
      {...props}
    />
  );
};

const MarkdownLink: FunctionComponent<PropsWithChildren<LinkProps>> = ({
  children,
  href,
  ...rest
}: PropsWithChildren<LinkProps>) => {
  return (
    <Link
      href={href}
      className='text-blue-600'
      {...rest}
    >
      {children}
    </Link>
  );
};

const MarkdownComponents = {
  img: MarkdownImage,
  a: MarkdownLink,
} as MDXComponents;

export default MarkdownComponents;
