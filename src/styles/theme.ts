import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    body: 'Roboto',
    heading: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: '#fff',
        color: '#000',
      },
      h1: { fontSize: '2.5rem', fontWeight: 'bold' },
      h2: { fontSize: '2rem', fontWeight: 'bold' },
      h3: { fontSize: '1.5rem', fontWeight: 'bold' },
      h4: { fontSize: '1rem', fontWeight: '500' },
      h5: {
        fontSize: '.5rem',
        fontWeight: '400',
      },
    },
  },
  colors: {
    brand: {
      500: '#040404',
    },
  },
});
