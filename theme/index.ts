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
  fonts: {
    heading: `var(--font-poppins), 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    body: `var(--font-poppins), 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
      },
    },
    Link: {
      baseStyle: (props: any) => ({
        color: props.colorMode === 'dark' ? colors.dark.text.link : colors.light.text.link,
        _hover: {
          textDecoration: 'underline',
        },
      }),
    },
  },
  colors,
})


