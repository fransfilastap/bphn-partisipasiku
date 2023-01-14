import React, { FunctionComponent, useCallback, useState } from 'react';
import Image, { ImageProps } from 'next/image';

const SmoothTransitionImage: FunctionComponent<ImageProps> = (props) => {
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const onLoadingCompleteHandler = useCallback(() => {
    setTimeout(() => {
      setImageLoading(false);
    }, 300);
  }, []);

  return (
    <Image
      {...props}
      className={imageLoading ? 'img-blur' : 'unblur'}
      onLoadingComplete={onLoadingCompleteHandler}
      alt={props.alt}
    />
  );
};

export default SmoothTransitionImage;
