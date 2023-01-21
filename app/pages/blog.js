import Header from '../components/Header'
import Links from '../components/Links'
import prisma from '../lib/prisma'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Blog() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Links />
        <div>This is the blog page</div>
      </main>
    </>
  )
}

// export const getStaticProps = async () => {
//   const feed = await prisma.post.findMany({
//     where: { published: true },
//     include: {
//       author: {
//         select: { name: true }
//       }
//     }
//   })
//   return {
//     props: { feed },
//     revalidate: 10
//   }
// }