import { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import { Bars2Icon } from '../icons';

type MenuToggleProps = ComponentPropsWithoutRef<'button'>;

const MenuToggle: FunctionComponent<MenuToggleProps> = (props) => {
  return (
    <button
      className='block text-black appearance-none md:hidden dark:text-white'
      aria-label='menu button'
      {...props}
    >
      <Bars2Icon />
    </button>
  );
};

export default MenuToggle;
