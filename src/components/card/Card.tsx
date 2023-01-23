import { ElementType } from 'react';
import clsxtw from '@/lib/clsxtw';
import { PolymorphicComponentProps } from '@/utils/polymorphic';

// eslint-disable-next-line @typescript-eslint/ban-types
type CardProps<C extends ElementType> = PolymorphicComponentProps<C, {}>;

const Card = <T extends ElementType>({
  as,
  className,
  children,
  ...props
}: CardProps<T>) => {
  const Component = as ?? 'div';

  return (
    <Component
      {...props}
      className={clsxtw(
        'rounded-md border border-gray-100/30 shadow-gray-200/[0.9] shadow-sm bg-white/30 overflow-hidden',
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Card;
