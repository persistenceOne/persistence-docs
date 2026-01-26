import { extendTheme } from '@chakra-ui/react'
import colors from "./colors";

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
        bg: props.colorMode === 'dark' ? colors.dark.body.bg : colors.light.body.bg,
        color: props.colorMode === 'dark' ? colors.dark.text[700] : colors.light.text[700],
      },
    }),
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
  colors,
})


