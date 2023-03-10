import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';

export default function NotFound() {
  return (
    <Container className='items-center justify-center my-10 flex-col flex h-[80vh] border border-gray-300 rounded-md'>
      <Seo pageTitle='Halaman tidak ditemukan | 404' />
      <h1 className='font-bold text-3xl tracking-tight mb-4 text-black dark:text-white'>
        Halaman tidak ditemukan.
      </h1>
      <div className='flex flex-col justify-center items-center '>
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
            d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
          />
        </svg>
      </div>
    </Container>
  );
}
