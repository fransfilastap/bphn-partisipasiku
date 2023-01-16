import {
  ComponentPropsWithoutRef,
  FunctionComponent,
  ReactElement,
  useRef,
} from 'react';

type CheckboxProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
  value: string | number | readonly string[];
};

const Checkbox: FunctionComponent<CheckboxProps> = ({
  value,
  label,
  ...props
}: CheckboxProps): ReactElement => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className='flex items-center w-full gap-2 px-2 transition duration-100 ease-in-out bg-gray-100 rounded-sm cursor-pointer group hover:bg-gray-300 dark:bg-slate-900'>
      <input
        ref={ref}
        type='checkbox'
        className='w-4 h-4 rounded-md checked:bg-black'
        id={`checkbox-${value}`}
        value={value}
        {...props}
      />
      <label
        htmlFor={`checkbox-${value}`}
        className='text-[0.8em] cursor-pointer select-none w-full h-full p-2'
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
