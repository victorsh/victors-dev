import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../store/store'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <Analytics />
      </ChakraProvider>
    </SessionProvider>
  )
}
