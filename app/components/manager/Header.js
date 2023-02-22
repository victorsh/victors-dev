import useUser from '@/utils/useUser'
import Links from '@/components/manager/Links'
import styles from '@/styles/manager/Header.module.css'

export default function Header(props) {
  // const { mutateUser } = useUser({
  //   redirectTo: '/manager/login',
  //   redirectIfFound: true
  // })

  const handleLogout = async () => {
    const userData = await fetch('/api/manager/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })

    // const user = await userData.json()

    // try {
    //   await mutateUser(user)
    // } catch (error) {
    //   console.error('An unexpected error occurred:', error)
    //   setErrorMsg(error.data.message)
    // }
  }

  return (
    <div className={styles.header_wrapper}>
      <Links />
      <div className={styles.header_container}>
        <h1>{"Vic and Anna's Life Manager"}</h1>
      </div>
      <div>Logged In As: {props?.user?.whois}</div>
      <button className={styles.header_button} onClick={handleLogout}>Logout</button>
    </div>
  )
}