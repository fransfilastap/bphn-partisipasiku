import React, { FunctionComponent, useCallback, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import clsxtw from '@/lib/clsxtw';
import { strapiImageLoader } from '@/lib/image';
import { useToggle } from '@/hooks';

const SmoothTransitionImage: FunctionComponent<
  Omit<ImageProps, 'placeholder'>
> = ({ className, alt, priority = false, ...props }) => {
  const [loading, setIsLoading] = useToggle(true);

  const loadingCompleteHandler = useCallback(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, [setIsLoading]);

  return (
    <Image
      loader={strapiImageLoader}
      className={clsxtw(loading ? 'img-blur' : 'unblur', className)}
      onLoadingComplete={loadingCompleteHandler}
      alt={alt}
      placeholder="blur"
      {...props}
    />
  );
};

export default SmoothTransitionImage;
