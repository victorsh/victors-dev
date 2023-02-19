import { useState, useEffect } from 'react'
import { url_select } from '@/utils/url_select'

// https://javascript.info/fetch-crossorigin

export default function Sbase() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const fetchItems = async () => {
    setIsLoading(true)
    try {
      const data = await fetch(`/api/dbcall`, {
        method: 'GET'
      })
      const { items } = await data.json()
      setItems(items)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    }
  }

  const insertItem = async () => {
    setIsLoading(true)
    try {
      await fetch(`/api/dbcall`, {
        method: 'POST'
      })
      await fetchItems()
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  const displayItems = () => {
    return items.map(item => <li  key={item.id}>{item.data}, {item.created_at}</li>)
  }

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_LOCAL_URL)
    fetchItems()
    return () => {}
  }, [])

  return (
    <div style={{color: 'red'}}>
      <ul>
        {displayItems()}
      </ul>
      <button onClick={insertItem}>Add Item</button>
      {isLoading ? <div>Loading...</div> : ''}
    </div>
  )
}