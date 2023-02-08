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
        <CalendarDays className='w-4 h-4' />
        <span className='text-black text-xs dark:text-gray-200'>
          {moment(props.date).format('MMMM Do, YYYY')}
        </span>
      </span>
    );
  }
);

export default DateComponent;
