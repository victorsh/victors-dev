// https://codegregg.com/blog/2022/password-protected-nextjs-page/

import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next'

const sessionOptions = {
  password: process.env.MANAGER_SECRET_COOKIE_PASSWORD,
  cookieName: 'next-iron-session/examples/next.js',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development'
  }
}

export function withSessionRoute(handler) {
  return withIronSessionApiRoute(handler, sessionOptions)
}

export function withSessionSsr(handler) {
  return withIronSessionSsr(handler, sessionOptions)
}

