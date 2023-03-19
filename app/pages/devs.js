import Trdux from './trdux'
import GoogleAdsContainer from '@/components/google-ads/google-ads-container'
import devsStyle from '@/styles/Devs.module.css'

export default function Devs() {
  return (
    <div className={devsStyle.devs_container}>
      <div className={devsStyle.devs_box}></div>
      <GoogleAdsContainer />
    </div>
  )
}