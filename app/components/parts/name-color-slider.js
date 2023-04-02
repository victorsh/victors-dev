import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import randomHexColor from 'random-hex-color'
import { SET_NAME_COLOR, SET_ACTUAL_COLOR } from '@/store/reducers/name-color'

const NameColorSlider = () => {
  const dispatch = useDispatch()
  const { sliderValue, actualColor } = useSelector(state => state.nameColor)
  const handleNameColor = async (e) => {
    dispatch(SET_NAME_COLOR(Number(e.target.value)))
    dispatch(SET_ACTUAL_COLOR(randomHexColor()))
  }
  return (
    <div style={{zIndex: 1, position: 'fixed', top: '20px', left: '45vw'}}>
      <input id='name-color-slider' type="range" min="1" max="100" value={sliderValue} onChange={handleNameColor} className="slider" />
    </div>
  )
}

export default NameColorSlider
