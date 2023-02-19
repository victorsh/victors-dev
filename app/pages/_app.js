import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../store/store'
import { SessionProvider } from 'next-auth/react'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Analytics />
    </SessionProvider>
  )
}
