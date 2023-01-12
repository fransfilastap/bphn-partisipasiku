import {
  ComponentPropsWithRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';
import clsxtw from '@/lib/clsxtw';

type NavigationProps = PropsWithChildren<ComponentPropsWithRef<'nav'>>;
const Navigation: FunctionComponent<NavigationProps> = ({
  className,
  children,
}) => {
  return <nav className={clsxtw('', className)}>{children}</nav>;
};

export default Navigation;
