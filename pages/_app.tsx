import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import Layout from '@/components/Layout';
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
