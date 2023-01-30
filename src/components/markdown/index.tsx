import SmoothTransitionImage from '@/components/image/SmoothTransitionImage';
import { ImageProps } from 'next/image';
import { motion } from 'framer-motion';
import { FunctionComponent, PropsWithChildren } from 'react';
import { MDXComponents } from 'mdx/types';
import Link, { LinkProps } from 'next/link';

type MarkdownImageProps = ImageProps & {
  caption?: string;
};
const MarkdownImage: FunctionComponent<MarkdownImageProps> = (props) => {
  return (
    <SmoothTransitionImage
      {...props}
      width={800}
      height={600}
      quality={70}
      className="rounded-xl shadow-md"
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
      className="text-blue-600"
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
