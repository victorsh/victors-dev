import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

export default function Login() {
  const router = useRouter()
  const isActive = (pathname) => router.pathname === pathname
  const { data: session, status } = useSession()
  console.log(session, status)

  let left = (
    <div className='left'>
      <Link href='/' className='bold' data-active={isActive('/')}>
        Feed
      </Link>
    </div> 
  )

  const form = () => {
    if (status === "authenticated") {
      return <p>Signed in as {session.user.email}</p>
    }

    return <a href="/api/auth/signin">Sign in</a>
  }

  let right = null

  if (status === 'loading') {
    left = (
      <div className='left'>
        <Link href='/'>
          Feed
        </Link>
      </div>
    )

    right = (
      <div className='right'>
        <p>Validating session ...</p>
      </div>
    )
  }

  if (!session) {
    right = (
      <div className="right">
        <a data-active={isActive('/signup')}>Log in</a>
      </div>
    )
  }

  if (session) {
    left = (
      <div className="left">
        <a className="bold" data-active={isActive('/')}>
          Feed
        </a>
        <a data-active={isActive('/drafts')}>My drafts</a>
      </div>
    )

    right = (
      <div className='right'>
        <p>
          {session.user.name} ({session.user.email})
        </p>
        <button>
          <a>New post</a>
        </button>
        <button onClick={() => signOut()}>
          <a>Log out</a>
        </button>
      </div>
    )
  }

  return (
    <div>
      {form}
    </div>
  )
}