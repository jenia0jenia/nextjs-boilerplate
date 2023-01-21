import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export default function Home() {

  useEffect(() => {
    console.log('start');
  }, [])

  return (
    <>
      <Head>
        <title>jenia0jenia.ru созидание сайтов</title>
        <meta name="description" content="sites development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <div className={styles.video}>
          <video loop muted autoPlay poster="images/murmuration.png">
            <source src="murmuration.mp4" type="video/mp4"></source>
          </video>
        </div> */}
        {/* <div className={styles.overlay}></div> */}
        <div className={styles.center}>
          <div className={styles.businessCard}>
            созидание красивых сайтов
          </div>
        </div>
      </main>
    </>
  )
}
