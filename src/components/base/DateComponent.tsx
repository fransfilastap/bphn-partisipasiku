import React, { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';
import clsxtw from '@/lib/clsxtw';
import { CalendarDays } from '@/components/icons';
import moment from 'moment/moment';

type DateComponentProps = ComponentPropsWithRef<'span'> & {
  date: Date;
};

const DateComponent = forwardRef(
  (props: DateComponentProps, ref: ForwardedRef<HTMLSpanElement>) => {
    return (
      <span
        ref={ref}
        className={clsxtw(
          'inline-flex items-center justify-center gap-2',
          props.className
        )}
      >
        <CalendarDays className='w-3 h-3' />
        <span className='text-[0.8em] dark:text-gray-400'>
          {moment(props.date).format('MMMM Do, YYYY')}
        </span>
      </span>
    );
  }
);

export default DateComponent;
