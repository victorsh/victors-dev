import { useState, useEffect } from 'react'
import { url_select } from '@/utils/url_select'

// https://javascript.info/fetch-crossorigin

export default function Sbase() {
  const [items, setItems] = useState([])
  const [itemData, setItemData] = useState('')
  const fetchItems = async () => {
    const base_url = url_select()
    console.log(base_url)
    try {
      const data = await fetch(`${base_url}/api/dbcall`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      })
      const { items } = await data.json()
      setItems(items)
    } catch (error) {
      console.error(error)
    }
  }

  const insertItem = async () => {
    // try {
    //   const { data, error } = await supabase
    //     .from("Item")
    //     .insert([{
    //       data: 'another sample'
    //     }]).single()
    //   if (error) throw error
    //   await fetchItems()
    // } catch (error) {
    //   console.log(error)
    // }
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
    </div>
  )
}