import Image, { ImageProps } from 'next/image';
import { FunctionComponent, PropsWithChildren, useMemo } from 'react';
import { MDXComponents } from 'mdx/types';
import Link, { LinkProps } from 'next/link';
import { DEFAULT_PLACEHOLDER } from '@/lib/strapi-image';
import { cloudinaryUrl } from '@/lib/cloudinary';

type MarkdownImageProps = ImageProps & {
  caption?: string;
};
const MarkdownImage: FunctionComponent<MarkdownImageProps> = (props) => {
  return (
    <Image
      loader={cloudinaryUrl}
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
