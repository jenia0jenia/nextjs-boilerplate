import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import LocaleSwitcher from '../components/locale-switcher'
import YA from '../components/ya'
import CursorLines from '../components/cursor-lines'

import content from '../language/lang-select.json'

// const inter = Inter({ subsets: ['latin', 'cyrillic', ] })

export default function Home() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router

  useEffect(() => {
    const video = document.getElementById("video");
    if (video) {
      // video.playbackRate = 0.9;
    }
  }, [])

  return (
    <>
      <Head>
        <title>{content[activeLocale].title}</title>
        <meta name="description" content={content[activeLocale].description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <YA></YA>
      </Head>

      <main className={`${activeLocale} ${styles.main}`}>
        <div className={styles.screen}>
          {/* slogan */}
          <div className={styles.slogan}>
            <div className={styles.sloganTitle}>{content[activeLocale].slogan}</div>
          </div>

          {/* sidebar */}
          <div className={styles.sitebar}>
            <LocaleSwitcher />

            {/* <Link className={styles.link} href="/links">{content[activeLocale].menu.links}</Link> */}

            <div className={styles.contacts}>
              <div className={styles.contactsPhone}>{content[activeLocale].phone}: <a href="tel:+79995812843">+79995812843</a></div>
              <div className={styles.contactsEmail}>{content[activeLocale].email}: <a href={`mailto:${activeLocale}@jenia0jenia.ru`}>{activeLocale}@jenia0jenia.ru</a></div>
            </div>
          </div>
        </div>

        {/* video */}
        <div className={styles.video}>
          <video loop muted autoPlay poster="images/murmuration.avif" className={styles.video} id="video">
            <source src="murmuration.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className={styles.overlay}></div>
      </main>

      <CursorLines></CursorLines>

    </>
  )
}