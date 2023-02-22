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
      password: e.currentTarget.password.value,
      whois: e.currentTarget.whois.value
    }

    const userData = await fetch('/api/manager/login', {
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
      <div className={styles.login_form_wrapper}>
        <form onSubmit={handleSubmit}>
          <label>
            <div>Enter Password</div>
            <input type='password' name='password' required />
          </label>
          <label htmlFor="whois">
            Who is?
          </label>
          <select id="whois" name="whois">
            <option value="vic">Vic</option>
            <option value="anna">Anna</option>
          </select>
          <button type='submit'>Login</button>
          {errorMsg && <p>{errorMsg}</p>}
        </form>
      </div>
    </div>
  )
}
