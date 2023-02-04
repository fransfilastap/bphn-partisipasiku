import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';

export default function NotFound() {
  return (
    <Container className='items-center justify-center flex-col flex h-[80vh]'>
      <Seo pageTitle='Halaman tidak ditemukan | 404' />
      <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
        Terjadi Kesalahan.
      </h1>
      <div className='flex flex-col w-full justify-center items-center h-[30vh] border border-gray-300 rounded-md'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-10 h-10'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
          />
        </svg>
      </div>
    </Container>
  );
}
