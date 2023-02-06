import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from 'react';
import Image, { ImageProps } from 'next/image';
import clsxtw from '@/lib/clsxtw';
import { useToggle } from '@/hooks';
import { cloudinaryLoader } from '@/lib/image';

type AdvanceImageProps = Omit<ImageProps, 'placeholder' | 'src'> & {
  imageId?: string;
  src?: string;
};
const AdvanceImage: FunctionComponent<AdvanceImageProps> = ({
  className,
  imageId,
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

  const source = useMemo(
    () => (imageId ? cloudinaryLoader(imageId!) : props.src),
    [imageId]
  );

  return (
    <Image
      src={source!}
      className={clsxtw(loading ? 'img-blur' : 'unblur', className)}
      onLoadingComplete={loadingCompleteHandler}
      alt={alt}
      placeholder='blur'
      {...props}
    />
  );
};

export default AdvanceImage;
