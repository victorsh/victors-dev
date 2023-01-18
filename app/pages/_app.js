import '../styles/globals.css'
import { ChakraProvider, theme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
