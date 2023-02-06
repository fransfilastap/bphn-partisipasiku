import React, { FunctionComponent, useCallback } from 'react';
import Image, { ImageProps } from 'next/image';
import clsxtw from '@/lib/clsxtw';
import { useToggle } from '@/hooks';

type AdvanceImageProps = Omit<ImageProps, 'placeholder'>;
const AdvanceImage: FunctionComponent<AdvanceImageProps> = ({
  className,
  alt,
  priority = false,
  ...props
}) => {
  const [loading, setIsLoading] = useToggle(true);

  const loadingCompleteHandler = useCallback(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, [setIsLoading]);

  return (
    <Image
      className={clsxtw(loading ? 'img-blur' : 'unblur', className)}
      onLoadingComplete={loadingCompleteHandler}
      alt={alt}
      placeholder='blur'
      {...props}
    />
  );
};

export default AdvanceImage;
