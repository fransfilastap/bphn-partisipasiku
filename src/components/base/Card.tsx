import clsxtw from '@/lib/clsxtw';
import {
  ComponentPropsWithRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

type CardProps = PropsWithChildren<ComponentPropsWithRef<'div'>>;

const Card: FunctionComponent<CardProps> = ({
  className,
  ...props
}: CardProps) => {
  return <div className={clsxtw('', className)}>{}</div>;
};
