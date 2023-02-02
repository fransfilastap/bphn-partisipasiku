import { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import clsxtw from '@/lib/clsxtw';
import { ReactCusdis } from '@/components/ReactCusdis';
import { CUSDIS_APP_ID, CUSDIS_HOST } from '@/configs/env';
import { AppInfo } from '@/configs';

type CusdisProps = ComponentPropsWithoutRef<'div'> & {
  pageId: string;
  pageTitle: string;
};

const Cusdis: FunctionComponent<CusdisProps> = ({
  className,
  pageId,
  pageTitle,
  ...props
}) => {
  return (
    <div
      className={clsxtw('w-full flex flex', className)}
      {...props}
    >
      <ReactCusdis
        attrs={{
          host: CUSDIS_HOST ?? 'https://cusdis.com',
          appId: CUSDIS_APP_ID ?? '',
          pageId: pageId,
          pageTitle: pageTitle,
          pageUrl: `${AppInfo.url}${pageId}`,
        }}
      />
    </div>
  );
};

export default Cusdis;
