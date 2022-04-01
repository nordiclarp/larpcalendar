import { ChakraTheme, extendTheme } from '@chakra-ui/react';

const overlayAlpha = 0.66;

const overrides: Partial<ChakraTheme> = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        // fontSize: '19px',
      },
      a: {
        textDecoration: 'underline',

        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  components: {},
  colors: {
    lightOverlay: `rgba(255, 255, 255, ${overlayAlpha})`,
    darkOverlay: `rgba(45, 55, 72, ${overlayAlpha})`,
  },
};

export const theme = extendTheme(overrides);
