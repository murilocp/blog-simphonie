import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    body: 'Roboto',
    heading: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: '#E5E5E5',
        color: '#4F4F4F',
      },
    },
  },
});
