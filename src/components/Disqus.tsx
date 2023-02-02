import { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import clsxtw from '@/lib/clsxtw';
import { DiscussionEmbed } from 'disqus-react';
import { AppInfo } from '@/configs';
import { DISQUS_SHORTNAME } from '@/configs/env';

type DisqusProps = ComponentPropsWithoutRef<'div'> & {
  title: string;
  identifier: string;
  locale: string;
};

const Disqus: FunctionComponent<DisqusProps> = ({
  className,
  title,
  identifier,
  locale = 'id-ID',
  ...props
}) => {
  return (
    <div
      className={clsxtw('w-full', className)}
      {...props}
    >
      <DiscussionEmbed
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
