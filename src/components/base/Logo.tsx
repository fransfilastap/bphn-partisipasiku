import { ReactElement } from 'react';
import Image, { ImageProps } from 'next/image';
import logo from '~/logo_partisipasiku.png';
import clsxtw from '@/lib/clsxtw';
import Link from 'next/link';

type LogoProps = Partial<ImageProps>;

export default function Logo({
  width = 130,
  height = 50,
  className,
  alt = 'logo partisipasiku',
  ...props
}: LogoProps): ReactElement {
  return (
    <Link
      href='/'
      className='flex flex-row items-center justify-around md:gap-3'
    >
      <Image
        src={logo}
        width={width}
        height={height}
        alt={alt}
        className={clsxtw('invert dark:filter-none', className)}
        priority
        loading='eager'
        {...props}
      />
    </Link>
  );
}
