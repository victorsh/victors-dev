import { useState, useEffect } from 'react'

export default function Sbase() {
  const [items, setItems] = useState([])
  const [itemData, setItemData] = useState('')
  const fetchItems = async () => {
    try {
      const data = await fetch('http://127.0.0.1:3000/api/sbase')
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