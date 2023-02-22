// https://github.com/vvo/iron-session#session-cookies
import { supabase } from '@/utils/supabase'
import NextCors from 'nextjs-cors'
import { sealData } from 'iron-session'
import { withSessionRoute } from '@/utils/session'

export default withSessionRoute(handler)

async function handler(req, res) {
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

  const session_user = req.session.user

  if (!session_user || session_user.isLoggedIn === false) {
    res.status(401).end();
    return;
  }

  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from("Message")
        .select("*")
        .order('created_at', { ascending: true })
      if (error) {
        console.error(error)
        res.status(500).json({ error: error })
        return
      }
      res.status(200).json({ messages: data })
      return
    } catch (error) {
      res.status(500).json({ error: error })
    }
  } else if (req.method === 'POST') {
    try {
      const { message, user } = JSON.parse(req.body)
      const { data, error } = await supabase
        .from("Message")
        .insert([{
          message: message,
          user: user
        }]).single()
      if (error) {
        console.error(error)
        res.status(500).json({ error: error })
        return
      }
      res.status(201).json({ message: 'created'})
    } catch (error) {
      res.status(500).json({ error: error })
      return
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = JSON.parse(req.body)
      const { data, error } = await supabase
        .from("Message")
        .delete()
        .match({id: id})
      if (error) {
        console.log('what what?f')
        console.error(error)
        res.status(500).json({ error: error })
        return
      }
      res.status(201).json({ message: 'deleted'})
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: error })
      return
    }
  } else {
    res.status(404).json({ message: 'not found'})
  }
}
