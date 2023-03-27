import { Provider } from 'react-redux'
import store from '../store/store'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAdSense } from 'nextjs-google-adsense'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <GoogleAdSense publisherId='pub-5014071221395516' /> */}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Analytics />
    </>
  )
}
