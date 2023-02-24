import { supabase } from '@/utils/supabase'
import NextCors from 'nextjs-cors'
import { withSessionRoute } from '@/utils/session'
import { checkJSON } from '@/utils/utility'

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

  // if (!session_user || session_user.isLoggedIn === false) {
  //   res.status(401).end();
  //   return;
  // }

  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from("Tasks")
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
      return
    }
  }

  if (req.method === 'POST') {
    try {
      const req_data = checkJSON(req.body) ? JSON.parse(req.body) : req.body
      const { task, user, set_to } = req_data
      const { data, error } = await supabase
        .from("Tasks")
        .insert([{
          task: task,
          createdBy: user,
          setTo: set_to
        }]).single()
      if (error) {
        console.error(error)
        res.status(500).json({ error: error })
        return
      }
      res.status(201).json({ message: 'created'})
      return
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: error })
      return
    }
  }

  if (req.method === 'PUT') {
    const { taskId, completedBy, completed } = JSON.parse(req.body)
    const { error } = await supabase
      .from("Tasks")
      .update({ completed: completed, completedBy: completedBy })
      .eq('id', taskId)
    if (error) {
      console.error(error)
      res.status(500).json({ error: error })
      return
    }
    res.status(200).json({ message: 'updated'})
  }

  if (req.method === 'DELETE') {

  }

  res.status(404).json({ message: 'not found'})
}