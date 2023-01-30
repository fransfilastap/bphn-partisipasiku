import { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { Bars2Icon } from '../icons';

type MenuToggleProps = MotionProps & ComponentPropsWithoutRef<'button'>;

const MenuToggle: FunctionComponent<MenuToggleProps> = (props) => {
  return (
    <motion.button
      className='block text-black appearance-none md:hidden dark:text-white'
      aria-label='menu button'
      {...props}
    >
      <Bars2Icon />
    </motion.button>
  );
};

export default MenuToggle;
