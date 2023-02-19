import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../store/store'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Analytics />
    </>
  )
}
