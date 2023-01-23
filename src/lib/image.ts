import { STRAPI_ENDPOINT } from '@/configs/env';
import { ImageLoaderProps } from 'next/image';

export const strapiImageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps): string => {
  return `${STRAPI_ENDPOINT}${src}?w=${width}&q=${quality || 75}`;
};

export const DEFAULT_PLACEHOLDER =
  'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
