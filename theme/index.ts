import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
      },
    },
    Link: {
      baseStyle: {
        color: 'blue.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
})


