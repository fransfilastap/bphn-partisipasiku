import {
  ElementType,
  PropsWithChildren,
  ComponentPropsWithoutRef,
} from 'react';

export type AsProps<C extends ElementType> = {
  as?: C;
};

export type PropsToOmit<C extends ElementType, P> = keyof (AsProps<C> & P);

// eslint-disable-next-line @typescript-eslint/ban-types
export type PolymorphicComponentProps<
  C extends ElementType,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Props = {}
> = PropsWithChildren<Props & AsProps<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
