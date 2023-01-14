import { Bars2Icon } from '../icons';

const MenuToggle = () => {
  return (
    <button
      className='block text-black appearance-none md:hidden dark:text-white'
      aria-label='menu button'
    >
      <Bars2Icon />
    </button>
  );
};

export default MenuToggle;
