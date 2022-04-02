import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { Layout } from '@larpcalendar/components';

import { theme } from '../theme/theme';

import '../style/global.scss';

export const CustomApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Head>
      <title>Larp Calendar</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
);

export default CustomApp;
