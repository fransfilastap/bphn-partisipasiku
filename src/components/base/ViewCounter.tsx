import React, { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';
import clsxtw from '@/lib/clsxtw';
import { EyeIcon } from '@/components/icons';
import useSWR from 'swr';
import { STRAPI_REST_API_ENDPOINT } from '@/configs/env';
import { restFetcher } from '@/lib/fetcher';
import { ViewCountResponse } from '@/types/model';

type ViewCounterProps = ComponentPropsWithRef<'span'> & {
  id: string;
};

const ViewCounter = forwardRef(
  (props: ViewCounterProps, ref: ForwardedRef<HTMLSpanElement>) => {
    const { data, error, isLoading } = useSWR<ViewCountResponse>(
      `${STRAPI_REST_API_ENDPOINT}/issue-views?filters[issue]=${props.id}`,
      restFetcher
    );

    if (isLoading) {
      return <span>Loading...</span>;
    }

    if (error) {
      return <span>Error</span>;
    }

    return (
      <span
        ref={ref}
        className={clsxtw(
          'inline-flex items-center justify-center gap-2',
          props.className
        )}
      >
        <EyeIcon className='w-4 h-4' />
        <span className='text-[0.8em] dark:text-gray-400'>
          {data?.data.length! > 0 ? data?.data[0].attributes.count : 0}
        </span>
      </span>
    );
  }
);

export default ViewCounter;
