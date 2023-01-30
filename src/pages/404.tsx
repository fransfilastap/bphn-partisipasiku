import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';

export default function NotFound() {
  return (
    <Container className='items-center justify-center flex-col flex h-[80vh]'>
      <Seo pageTitle='Halaman tidak ditemukan | 404' />
      <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
        Halaman tidak ditemukan.
      </h1>
      <p className='text-gray-600 dark:text-gray-400 mb-8'>
        It seems you've found something that used to exist, or you spelled
        something wrong. I'm guessing you spelled something wrong. Can you
        double check that URL?
      </p>
    </Container>
  );
}
