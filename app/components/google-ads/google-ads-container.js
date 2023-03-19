import styled from 'styled-components'
import { useEffect } from 'react'

export default function GoogleAdsContainer ({ client, slot }) {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])

  const AdLable = styled.span`
    font-size: 12px;
  `

  return (
    <div
      style={{textAlign: 'left', overflow: 'hidden'}}
    >
      <AdLabel>Advertisement</AdLabel>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format='auto'
        data-full-width-responsive='true'
      ></ins>
    </div>
  )
}
