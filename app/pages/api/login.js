import { withSessionRoute } from '../../utils/session'

export default withSessionRoute(async (req, res) => {
  const { password, whois } = await req.body

  try {
    if (password === process.env.MANAGER_PASSWORD) {
      const user = { isLoggedIn: true, whois: whois }
      req.session.user = user
      await req.session.save()
      res.json(user)
    } else {
      const user = { isLoggedIn: false, whois: '' }
      res.json(user)
    }
  } catch (error) {
    const { response: fetchResponse } = error
    res.status(fectchResponse?.status || 500).json(error.data)
  }
})