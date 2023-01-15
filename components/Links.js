import Link from 'next/link'

function Links() {
  return (
    <ul>
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/start'>Start</Link></li>
      <li><Link href='/about'>About</Link></li>
    </ul>
  )
}