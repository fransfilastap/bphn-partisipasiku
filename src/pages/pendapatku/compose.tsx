import * as Yup from 'yup';
import { Formik } from 'formik';
import dynamic from 'next/dynamic';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { HCAPTCHA_SITEKEY, OG_URL } from '@/configs/env';
import Seo from '@/components/seo/Seo';
import Container from '@/components/base/Container';
import axiosInstance from '@/lib/axiosInstance';
import Modal from '@/components/base/Modal';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

export default function ComposePage() {
  return (
    <Fragment>
      <Seo
        title='Masukan Pendapat'
        pageTitle='PendapatKu'
        image={`${OG_URL}/api/og?title=Pendapat+Hukum+Ku`}
        description='Masukan pendapat anda terkait isu hukum di Indonesia.'
      />
      <Container className='mt-10'>
        <Masthead />
        <Form />
      </Container>
    </Fragment>
  );
}

const Masthead = () => {
  return (
    <section className='mb-6'>
      <h2 className='text-4xl font-extrabold dark:text-white'>
        Kirim masukan anda terkait isu hukum di Indonesia di sini.
      </h2>
    </section>
  );
};

const Form = () => {
  const [successModalOpen, setSuccessModalOpen] = useState<boolean>(false);
  const [captchaKey, setCaptchaKey] = useState<string>();
  const [success, setSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const captchaRef = useRef<HCaptcha>(null);
  const initialValues = {
    name: '',
    email: '',
    judul: '',
    pendapat: '',
    token: null,
  };

  const modalCloseHandler = () => {
    setSuccessModalOpen(false);
  };

  const validationScheme = Yup.object({
    name: Yup.string()
      .min(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string().email().required('Required'),
    judul: Yup.string()
      .min(20, 'Must be 20 characters or less')
      .required('Required'),
    pendapat: Yup.string().min(50).required('Required'),
    token: Yup.string().required('Required'),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationScheme}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          const { pendapat, judul, token, ...biodata } = values;
          const result = await axiosInstance('/pendapat-kus', {
            method: 'post',
            data: JSON.stringify({
              token: token,
              data: { judul, pendapat, biodata: biodata, publishedAt: null },
            }),
          })
            .then((data) => {
              setSuccess(true);
              setSuccessModalOpen(true);
              resetForm();
            })
            .catch((err) => {
              setSuccess(false);
              setErrorMessage(err.message);
            });

          captchaRef.current!.resetCaptcha();
        }}
      >
        {({
          values,
          setFieldValue,
          errors,
          touched,
          handleSubmit,
          handleBlur,
          handleChange,
          isSubmitting,
        }) => (
          <form
            className='flex flex-col w-full'
            onSubmit={handleSubmit}
          >
            <div className='mb-6'>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Nama
              </label>
              <input
                type='text'
                id='name'
                className='bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                value={values.name}
                onChange={handleChange}
                placeholder='Masukan Nama'
              />
              {touched.name && errors.name && (
                <p className='text-xs text-red-400 italic'>{errors.name}</p>
              )}
            </div>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                value={values.email}
                onChange={handleChange}
                className='bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='name@mail.com'
              />
              {touched.email && errors.email && (
                <p className='text-xs text-red-400 italic'>{errors.email}</p>
              )}
            </div>
            <div className='mb-6'>
              <label
                htmlFor='judul'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Judul Pendapat
              </label>
              <input
                type='text'
                id='judul'
                value={values.judul}
                onChange={handleChange}
                className='bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Undang-undang pemilu'
              />
              {touched.judul && errors.judul && (
                <p className='text-xs text-red-400 italic'>{errors.judul}</p>
              )}
            </div>
            <div className='mb-6'>
              <label
                htmlFor='opinion'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Pendapat Anda
              </label>
              <MDEditor
                value={values.pendapat}
                className='h-[250px] mb-10'
                onChange={(v) => setFieldValue('pendapat', v)}
              />
              {touched.pendapat && errors.pendapat && (
                <p className='text-xs text-red-400 italic'>{errors.pendapat}</p>
              )}
            </div>
            <div className='mb-6'>
              <HCaptcha
                key={captchaKey}
                sitekey={`${HCAPTCHA_SITEKEY}`}
                onVerify={(token) => setFieldValue('token', token)}
                onError={() => setFieldValue('token', null)}
                onExpire={() => setFieldValue('token', null)}
                ref={captchaRef}
              />
            </div>
            {!success && errorMessage && (
              <div className='mb-6 border border-red-50 rounded-md p-5 w-full justify-center items-center'>
                <p className='font-[500] text-lg text-center'>{errorMessage}</p>
              </div>
            )}
            <button
              type='submit'
              ref={submitRef}
              className='lg:max-w-max w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
            >
              {isSubmitting && (
                <svg
                  aria-hidden='true'
                  role='status'
                  className='inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='currentColor'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='#1C64F2'
                  />
                </svg>
              )}
              Submit
            </button>
          </form>
        )}
      </Formik>
      <Modal
        modalOpen={successModalOpen}
        closeMenuHandler={modalCloseHandler}
        modalSize='lg'
      >
        <svg
          viewBox='0 0 24 24'
          className='text-green-600 w-16 h-16 mx-auto my-6'
        >
          <path
            fill='currentColor'
            d='M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z'
          ></path>
        </svg>
        <div className='text-center'>
          <h3 className='md:text-2xl text-base text-gray-900 font-semibold text-center'>
            Pendapat terkirim!
          </h3>
          <p className='text-gray-600 my-2'>
            Terima kasih telah peduli terhadap isu-isu hukum di Indonesia!.
          </p>
          <p> Have a great day! </p>
          <div className='py-10 text-center'>
            <button
              type='button'
              onClick={modalCloseHandler}
              className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
            >
              Tutup
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
