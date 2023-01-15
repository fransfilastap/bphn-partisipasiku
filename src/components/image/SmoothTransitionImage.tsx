import React, { FunctionComponent, useCallback, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import clsxtw from '@/lib/clsxtw';

const SmoothTransitionImage: FunctionComponent<ImageProps> = ({
  className,
  alt,
  ...props
}) => {
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const onLoadingCompleteHandler = useCallback(() => {
    setTimeout(() => {
      setImageLoading(false);
    }, 300);
  }, []);

  return (
    <Image
      {...props}
      className={clsxtw(imageLoading ? 'img-blur' : 'unblur', className)}
      onLoadingComplete={onLoadingCompleteHandler}
      alt={alt}
    />
  );
};

export default SmoothTransitionImage;
