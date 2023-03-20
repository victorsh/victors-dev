import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { enableGoogleAdsense } from '../google-ads/google-ad-init'
import styles from '@/styles/components/parts/CookieBanner.module.css'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true)

  const acceptCookies = () => {
    setShowBanner(false)
    // enableGoogleAdsense()
    Cookies.set('accept-cookies', 'true', { expires: 1 })
  }

  const declineCookies = () => {
    setShowBanner(false)
    Cookies.set('accept-cookies', 'false', { expires: 1 })
  }

  useEffect(() => {
    const savedCookie = Cookies.get('accept-cookies')
    if (typeof savedCookie === 'undefined' || savedCookie === 'false') { setShowBanner(false) }
    // if (savedCookie === 'true') { enableGoogleAdsense() }
  }, [])

  return (
    <div>
      {showBanner ?
      <div className={styles.cookie_banner_container}>
        <div className={styles.cookie_banner_title}>Accept Cookies?</div>
        <div className={styles.cookie_banner_description}>
          This site uses cookies for Google Ad sense and other experimental features.
        </div>
        <div className={styles.cookie_button_container}>
          <button className={`${styles['cookie_button']} ${styles['cookie_button_accept']}`} onClick={acceptCookies}>Accept</button>
          <button className={styles.cookie_button_decline} onClick={declineCookies}>Decline</button>
        </div>
      </div> : ''}
    </div>
  )
}