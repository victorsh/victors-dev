import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_NAME_COLOR, SET_ACTUAL_COLOR } from '@/store/reducers/name-color'

function hslToHex(h, s, l) {
  const hueToRGB = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  const hFraction = h / 360;
  const sFraction = s / 100;
  const lFraction = l / 100;

  const q =
    lFraction < 0.5 ? lFraction * (1 + sFraction) : lFraction + sFraction - lFraction * sFraction;
  const p = 2 * lFraction - q;

  const r = Math.round(hueToRGB(p, q, hFraction + 1 / 3) * 255);
  const g = Math.round(hueToRGB(p, q, hFraction) * 255);
  const b = Math.round(hueToRGB(p, q, hFraction - 1 / 3) * 255);

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function rangeToHexColor(value, hue = 200, saturation = 50) {
  const min = 1;
  const max = 100;
  const mappedLightness = ((value - min) / (max - min)) * 100;
  return hslToHex(hue, saturation, mappedLightness);
}

const NameColorSlider = () => {
  const dispatch = useDispatch()
  const { sliderValue, actualColor } = useSelector(state => state.nameColor)
  const handleNameColor = async (e) => {
    dispatch(SET_NAME_COLOR(Number(e.target.value)))
    dispatch(SET_ACTUAL_COLOR(rangeToHexColor(Number(e.target.value))))
  }
  return (
    <div style={{zIndex: 1, position: 'fixed', top: '80px', width: '100%', display: 'flex', justifyContent: 'center', pointerEvents: 'none'}}>
      <input id='name-color-slider' type="range" min="1" max="100" value={sliderValue} onChange={handleNameColor} style={{pointerEvents: 'auto'}} />
    </div>
  )
}

export default NameColorSlider
