import { ImageLoaderProps } from 'next/image';

const CLOUDINARY_CLOUDNAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export const cloudinaryUrl = ({
  src,
  width,
  quality = 75,
}: ImageLoaderProps): string => {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUDNAME}/image/upload/q_${quality},w_${width}/${src}.webp`;
};
