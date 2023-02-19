import { supabase } from '@/utils/supabase'
import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  await NextCors(req, res, {
    methods: ['GET', 'POST'],
    origin: '*',
    optionsSuccessStatus: 200
  })
  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from("Item")
        .select("*")
        .order('created_at', { ascending: true })
      if (error) {
        console.error(error)
        res.status(500).json({ error: error })
      }
      res.status(200).json({ items: data })
    } catch (error) {
      res.status(500).json({ error: error })
    }
  } else if (req.method === 'POST') {
    try {
      const { data, error } = await supabase
        .from("Item")
        .insert([{
          data: 'another sample'
        }]).single()
      if (error) {
        console.error(error)
        res.status(500).json({ error: error })
      }
      res.status(201).json({ message: 'created'})
    } catch (error) {
      res.status(500).json({ error: error })
    }
  } else {
    res.status(404).json({ message: 'not found'})
  }
}
