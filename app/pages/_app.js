import '../styles/globals.css'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}
