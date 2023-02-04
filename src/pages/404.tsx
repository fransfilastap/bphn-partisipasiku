import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import notFound from '~/images/404.png';
import Image from 'next/image';

export default function NotFound() {
  return (
    <Container className='items-center justify-center flex-col flex h-[80vh]'>
      <Seo pageTitle='Halaman tidak ditemukan | 404' />
      <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
        Halaman tidak ditemukan.
      </h1>
      <div className="flex flex-col w-full h-[30vh]">
        <Image
          src={notFound}
          alt="404 not found"
          width={320}
          height={200}
        />
      </div>
    </Container>
  );
}
