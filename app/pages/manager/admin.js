import { withSessionSsr } from "@/utils/session"

export default function Admin() {
  return <h1>{"Vic and Anna's Life Manager"}</h1>
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