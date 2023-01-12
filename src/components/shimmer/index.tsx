import { ComponentPropsWithoutRef, ReactElement } from 'react';
import clsxtw from '@/lib/clsxtw';

type ShimmerProps = ComponentPropsWithoutRef<'div'>;

export default function Shimmer({
  className,
  ...rest
}: ShimmerProps): ReactElement {
  return (
    <div
      className={clsxtw('animate-shimmer bg-[#f6f7f8]', className)}
      style={{
        backgroundImage:
          'linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)',
        backgroundSize: '700px 100%',
        backgroundRepeat: 'no-repeat',
      }}
      {...rest}
    />
  );
}
