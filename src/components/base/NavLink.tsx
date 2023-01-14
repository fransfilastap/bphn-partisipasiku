import Link, { LinkProps } from 'next/link';
import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { ClassValue } from 'clsx';
import { useRouter } from 'next/router';
import clsxtw from '@/lib/clsxtw';

type NavLinkProps = LinkProps & {
  className?: string | ClassValue[];
};

const NavLink: FunctionComponent<PropsWithChildren<NavLinkProps>> = ({
  children,
  className,
  ...props
}) => {
  const { asPath, isReady } = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (isReady) {
      const linkPathName = new URL(
        (props.as ?? props.href) as string,
        location.href
      ).pathname;

      const activePathName = new URL(asPath, location.href).pathname;

      setIsActive(linkPathName === activePathName);
    }
  }, [asPath, isReady, props.href, props.as]);

  return (
    <Link
      className={clsxtw(
        'text-gray-500 font-[500] text-sm dark:text-gray-400 hover:text-black transition-colors ease-in-out duration-100',
        { 'text-black dark:text-white': isActive },
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
