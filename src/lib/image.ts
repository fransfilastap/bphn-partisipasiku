import { STRAPI_ENDPOINT } from '@/configs/env';
import { ImageLoaderProps } from 'next/image';
import { Defaults } from '@/types';

const CLOUDINARY_CLOUDNAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME;

export const strapiImageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps): string => {
  return `${STRAPI_ENDPOINT}${src}?w=${width}&q=${quality || 75}`;
};

interface CloudinaryOptions {
  format: 'jpg' | 'png' | 'webp';
  width: number;
  height: number;
  quality: number;
}

const defaultOptions: Defaults<CloudinaryOptions> = {
  quality: 75,
  format: 'webp',
};
export const cloudinaryLoader = (
  publicId: string,
  options?: Required<CloudinaryOptions>
) => {
  const cloudinaryParams = Object.assign({}, defaultOptions, options);
  const h = cloudinaryParams?.height ? `,w_${cloudinaryParams.height}` : '';
  const w = cloudinaryParams?.width ? `,h_${cloudinaryParams.width}` : '';
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUDNAME}/image/upload/q_${cloudinaryParams.quality}${h}${w}/${publicId}.webp`;
};

export const DEFAULT_PLACEHOLDER =
  'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
