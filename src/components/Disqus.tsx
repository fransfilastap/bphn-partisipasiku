import { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import clsxtw from '@/lib/clsxtw';
import { DiscussionEmbed } from 'disqus-react';
import { AppInfo } from '@/configs';
import { DISQUS_SHORTNAME } from '@/configs/env';

type DisqusProps = ComponentPropsWithoutRef<'div'>;

const Disqus: FunctionComponent<DisqusProps> = ({ className, ...props }) => {
  return (
    <div
      className={clsxtw('w-full flex', className)}
      {...props}
    >
      <DiscussionEmbed
        shortname={DISQUS_SHORTNAME}
        config={{
          title: ``,
          url: ``,
          identifier: ``,
          language: 'ID',
        }}
      />
    </div>
  );
};

export default Disqus;
