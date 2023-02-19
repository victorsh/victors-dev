import React from 'react'
import { withSessionSsr } from "@/utils/session"

export default function Groceries() {
  return (
    <div>
      <h1>Groceries</h1>
    </div>
  )
}

export const getServerSideProps = withSessionSsr(async function ({req, res}) {
  const user = req.session.user

  if (user === undefined) {
    res.setHeader('location', '/manager/login')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }

  return { props: {}}
})
