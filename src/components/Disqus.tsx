import {
  ComponentPropsWithoutRef,
  forwardRef,
  FunctionComponent,
  Ref,
  useEffect,
  useRef,
  useState,
} from 'react';
import clsxtw from '@/lib/clsxtw';
import { DiscussionEmbed } from 'disqus-react';
import { AppInfo } from '@/configs';
import { DISQUS_SHORTNAME } from '@/configs/env';
import useColorMode from '@/hooks/useColorMode';

type DisqusProps = ComponentPropsWithoutRef<'div'> & {
  title: string;
  identifier: string;
  locale: string;
};

const Disqus: FunctionComponent<DisqusProps> = ({
  className,
  locale,
  identifier,
  title,
  ...props
}) => {
  return (
    <div
      className={clsxtw('w-full', className)}
      {...props}
    >
      <DiscussionEmbed
        key={`${locale}`}
        shortname={DISQUS_SHORTNAME!}
        config={{
          title: `${title}`,
          url: `${AppInfo.url}/${identifier}`,
          identifier: `${identifier}`,
          language: locale,
        }}
      />
    </div>
  );
};

export default Disqus;
