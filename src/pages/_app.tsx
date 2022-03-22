import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import Layout from 'components/_layout/Layout';

import { theme } from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
