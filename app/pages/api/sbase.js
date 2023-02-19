import { supabase } from '@/utils/supabase'

export default async function handler(req, res) {
  console.log(req.method)
  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from("Item")
        .select("*")
        .order('created_at', { ascending: true })
      if (error) throw error
      res.status(200).json({ items: data })
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  if (req.method === 'POST') {
    try {
      const { data, error } = await supabase
        .from("Item")
        .insert([{
          data: 'another sample'
        }]).single()
      if (error) throw error
      res.status(201).json({ message: 'created'})
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  res.status(404).json({ message: 'not found'})
}
