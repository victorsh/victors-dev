import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SET_NAME } from '../store/reducers/profile'
import { SET_PLACE, SET_PLACES } from '../store/reducers/places'

function DisplayName() {
  const { name } = useSelector((state) => state.profile)
  return (
    <p>Hello, {name}</p>
  )
}

function DisplayPlace() {
  const { place } = useSelector((state) => state.places)
  return (
    <p>At, {place}</p>
  )
}

function DisplayPlaces() {
  const { places } = useSelector((state) => state.places)
  return places.map((place, i) => <p key={place + i}>{place}</p>)
}

export default function Trdux() {
  const name = useRef(), place = useRef(), places = useRef()
  const dispatch = useDispatch()

  const submitName = () => { 
    console.log(name.current.value)
    dispatch(SET_NAME(name.current.value))
  }

  const submitPlace = () => {
    console.log(place.current.value)
    dispatch(SET_PLACE(place.current.value))
  }

  const submitPlaces = () => {
    console.log(places.current.value)
    dispatch(SET_PLACES(places.current.value))
  }

  return (
    <>
      <h1>Redux Testings</h1>
      <p>What's your name?</p>
      <input placeholder="Name here" ref={name} />
      <button onClick={submitName}>Submit</button>
      <DisplayName />
      
      <p>What's your place?</p>
      <input placeholder="Place here" ref={place} />
      <button onClick={submitPlace}>Submit</button>
      <DisplayPlace />

      <p>More than one place?</p>
      <input placeholder="Places here" ref={places} />
      <button onClick={submitPlaces}>Submit</button>
      <DisplayPlaces />
    </>
  )
}