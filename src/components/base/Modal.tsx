import { motion } from 'framer-motion';
import { XCircleIcon } from '@/components/icons';
import Portal from '@/components/base/Portal';
import { PropsWithChildren, useMemo, useRef } from 'react';
import clsxtw from '@/lib/clsxtw';

export interface ModalProps extends PropsWithChildren {
  modalOpen: boolean;
  closeMenuHandler: () => void;
  modalSize: 'xs' | 'sm' | 'lg' | 'xl';
}

export default function Modal({
  modalOpen,
  closeMenuHandler,
  modalSize = 'lg',
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const size = useMemo(() => {
    switch (modalSize) {
      case 'xs':
        return 'w-[20vw]';
      case 'sm':
        return 'w-[30vw]';
      case 'lg':
        return 'w-[50vw]';
      case 'xl':
        return 'w-[70vw]';
    }
  }, [modalSize]);

  return (
    <Portal id='menu-container-wrapper'>
      {modalOpen && (
        <>
          <motion.div
            onClick={closeMenuHandler}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 w-full h-[100vh] z-[999] bg-black/30 backdrop-blur-md'
          ></motion.div>
          <motion.div className='fixed z-[9999] inset-0 flex flex-col items-center justify-start p-4'>
            <motion.div
              ref={modalRef}
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              exit={{ y: -500 }}
              transition={{ type: 'spring', stiffness: 75, delay: 0.04 }}
              className={clsxtw(
                `flex flex-col  gap-2 p-4 bg-white rounded-lg shadow-md`,
                size
              )}
            >
              <div className='flex items-center justify-end'>
                <button
                  aria-label='close menu'
                  className='appearance-none'
                  onClick={closeMenuHandler}
                >
                  <XCircleIcon className='text-black' />
                </button>
              </div>
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </Portal>
  );
}
