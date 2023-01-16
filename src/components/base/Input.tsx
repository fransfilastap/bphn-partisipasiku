import {
  ComponentPropsWithRef,
  FunctionComponent,
  ReactNode,
  useState,
} from 'react';
import clsxtw from '@/lib/clsxtw';

type InputProps = ComponentPropsWithRef<'input'> & {
  leftIcon?: ReactNode | null;
};

const Input: FunctionComponent<InputProps> = ({
  className,
  leftIcon,
  ...props
}) => {
  const [isFocus, setIsFocused] = useState<boolean>(false);

  return (
    <div
      className={clsxtw(
        'p-1.5 gap-2 placeholder-slate-500 dark:placeholder-slate-50 border border-gray-200 dark:border-gray-600 rounded-md flex flex-row group transition-colors duration-100 ease-in-out text-gray-400',
        { 'border-black dark:border-slate-100': isFocus }
      )}
    >
      {leftIcon && leftIcon}
      <input
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={clsxtw(
          'w-full ring-0 focus-visible:outline-none bg-transparent focus-within:outline-none outline-offset-0 text-[0.9em] text-gray-700 rounded-none focus:outline-none focus:border-none',
          className
        )}
      />
    </div>
  );
};

export default Input;
