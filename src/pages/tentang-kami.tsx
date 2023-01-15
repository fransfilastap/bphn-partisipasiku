import Container from '@/components/base/Container';
import RootLayout from '@/components/layouts/RootLayout';
import Seo from '@/components/seo/Seo';

export default function AboutPage() {
  return (
    <RootLayout>
      <Seo
        pageTitle='Tentang Kami'
        description='Apa itu partisipasiku?'
        siteName='Partisipasiku'
        title='Tentang Kami'
        url='/tentang-kami'
        type='website'
      />
      <Container className='h-screen'>
        <h5 className='font-mono text-3xl font-[600] tracking-wider'>
          Tentang Kami
        </h5>
        <p className='pro'>
          Dalam Rangka Peningkatan Kualitas peraturan perundang-undangan di
          Indonesia, maka diperlukan adanya pertisipasi masyarakat dalam proses
          penataan peraturan perundang-undangan. Tidak saja hanya pada
          pembentukan peraturan perundang-undangan sebagaimana yang diatur dalam
          Undang-Undang No. 12 Tahun 2011 tentang Pembentukan Peraturan
          Perundang-Undangan jo. UU No. 15 tahun 2019 tentang Perubahan atas UU
          12 tahun 2011 tentang Pembentukan Peraturan Perundang-Undangan, tetapi
          juga pada tahap evaluasi peraturan perundang-undangan.
        </p>
        <p>
          BPHN mengajak Saudara (orang perseorangan/kelompok orang/instansi yang
          mempunyai kepedulian dan/atau kepentingan terhadap substansi peraturan
          perundang-undangan) untuk terlibat aktif memberikan masukan guna
          meningkatkan kualitas peraturan perundang-undangan di Indonesia, baik
          pada tahap ex ante(pada tahapan penyusunan naskah akademik) maupun ada
          tahap ex post (pada tahapan analisis dan evaluasi peraturan
          perundang-undangan).
        </p>
      </Container>
    </RootLayout>
  );
}
