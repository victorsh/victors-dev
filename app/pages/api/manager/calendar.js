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
      const { id } = req.query
      let resp
      if (typeof id === 'undefined') {
        resp = await supabase
          .from("CalendarEvent")
          .select("*")
          .order('created_at', { ascending: true })
      } else {
        resp = await supabase
          .from("CalendarEvent")
          .select("*")
          .match({ id: id })
      }

      const { data, error } = resp

      if (error) {
        console.error(error)
        res.status(500).json({ error: error })
        return
      }

      res.status(200).json({ events: data })
      return
    } catch (error) {
      res.status(500).json({ error: error })
      return
    }
  }

  if (req.method === 'POST') {
    try {
      const req_data = checkJSON(req.body) ? JSON.parse(req.body) : req.body
      const {
        title,
        color,
        start_time,
        stop_time,
        priority,
        created_by,
        created_for,
        password
      } = req_data

      const { data, error } = await supabase
        .from("CalendarEvent")
        .insert([{
          title: title,
          color: color,
          startTime: start_time,
          stopTime: stop_time,
          priority: priority,
          createdBy: created_by,
          createdFor: created_for,
          password: password
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
      .from("CalendarEvent")
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
        .from("CalendarEvent")
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