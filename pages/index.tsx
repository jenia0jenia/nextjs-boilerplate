import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import LocaleSwitcher from '../components/locale-switcher'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

const content = {
  "ru": {
    title: "созидание красивых сайтов",
  },
  "ua": {
    title: "створювати красиві сайти",
  },
  "en": {
    title: "beautiful websites development",
  },
  "fr": {
    title: "construire de beaux sites Web",
  },
  "ch": {
    title: "建立漂亮的网站",
  },
};

export default function Home() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router

  useEffect(() => {
    console.log('start');
  }, [])

  return (
    <>
      <Head>
        <title>jenia0jenia.ru {content[activeLocale].title}</title>
        <meta name="description" content="sites development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${activeLocale} ${styles.main}`}>
        <LocaleSwitcher />
        <div className={styles.video}>
          <video loop muted autoPlay poster="images/murmuration.png" className={styles.video}>
            <source src="murmuration.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className={styles.overlay}></div>
        <div className={styles.center}>
          <div className={styles.businessCard}>
            {content[activeLocale].title}
          </div>
        </div>
      </main>
    </>
  )
}