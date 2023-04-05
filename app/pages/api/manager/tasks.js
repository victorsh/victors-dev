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
    methods: ['GET', 'POST', 'UPDATE', 'DELETE'],
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

      res.status(200).json({ tasks: data })
      return
    } catch (error) {
      res.status(500).json({ error: error })
      return
    }
  }

  if (req.method === 'POST') {
    try {
      const req_data = checkJSON(req.body) ? JSON.parse(req.body) : req.body
      const { task, created_by, created_for, priority, complete_by } = req_data

      const { data, error } = await supabase
        .from("Tasks")
        .insert([{
          task: task,
          createdBy: created_by,
          createdFor: created_for,
          priority: priority,
          completeBy: complete_by
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
    const req_data = checkJSON(req.body) ? JSON.parse(req.body) : req.body
    const { id, created_for, priority, completed_by, completed } = req_data

    const { error } = await supabase
      .from("Tasks")
      .update({
        completed: completed,
        completedBy: completed_by,
        createdFor: created_for,
        priority: priority
      })
      .eq('id', id)
    if (error) {
      console.error(error)
      res.status(500).json({ error: error })
      return
    }
    res.status(200).json({ message: 'updated'})
  }

  if (req.method === 'DELETE') {
    try {
      const req_data = checkJSON(req.body) ? JSON.parse(req.body) : req.body
      const { id } = req_data
      const { error } = await supabase
        .from("Tasks")
        .delete()
        .match({id: id})
      if (error) {
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
  }

  res.status(404).json({ message: 'not found'})
}