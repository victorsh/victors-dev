import { useState } from 'react'
import useUser from '@/utils/useUser'
import styles from '@/styles/manager/Login.module.css'

export default function Login() {
  const { mutateUser } = useUser({
    redirectTo: '/manager/admin',
    redirectIfFound: true
  })

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const body = {
      password: e.currentTarget.password.value
    }

    const userData = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })

    const user = await userData.json()

    try {
      await mutateUser(user)
    } catch (error) {
      console.error('An unexpected error occurred:', error)
      setErrorMsg(error.data.message)
    }
  }

  return (
    <div className={styles.login_wrapper}>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Password
          <input type='password' name='password' required />
        </label>

        <button type='submit'>Login</button>
        {errorMsg && <p>{errorMsg}</p>}
      </form>
    </div>
  )
}