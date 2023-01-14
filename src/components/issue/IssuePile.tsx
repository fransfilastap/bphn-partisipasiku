import useToggle from '@/hooks/useToggle';
import clsxtw from '@/lib/clsxtw';
import { ComponentPropsWithoutRef, FunctionComponent } from 'react';

export type IssuePileProps = ComponentPropsWithoutRef<'button'> & {
  children: string;
  value: string;
};

const IssuePile: FunctionComponent<IssuePileProps> = ({
  children,
  className,
  ...props
}) => {
  const [isSelected, setIsSelected] = useToggle(false);

  return (
    <button
      aria-label={`kategori ${children}`}
      className={clsxtw(
        'appearance-none flex dark:text-white dark:bg-slate-800 flex-row px-3 py-2 transition duration-100 ease-in-out hover:bg-gray-300 dark:hover:bg-slate-600 text-xs items-center rounded-lg max-w-content cursor-pointer bg-gray-100',
        { 'bg-blue-200 dark:bg-gray-500': isSelected },
        className
      )}
      onClick={() => setIsSelected(!isSelected)}
      {...props}
    >
      {children}
    </button>
  );
};

export default IssuePile;
