import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { consoleLogo } from '@/utils'

import LocaleSwitcher from '@/components/locale-switcher'
import CursorLines from '@/components/cursor-lines'
import YA from '@/components/ya'
import Favicon from '@/components/favicon'

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
    console.log(consoleLogo);
  }, [])

  return (
    <>
      <Head>
        <title>{content[activeLocale].title}</title>
        <meta name="description" content={content[activeLocale].description} />
        <Favicon></Favicon>
        <YA></YA>
      </Head>

      <main className={`${activeLocale} ${styles.main}`}>
        <div className={styles.screen}>
          {/* slogan */}
          {/* <div className={styles.slogan}>
            <div className={styles.sloganTitle}>{content[activeLocale].slogan}</div>
          </div> */}

          {/* sidebar */}
          <div className={styles.sitebar}>
            {/* <LocaleSwitcher /> */}

            {/* <Link className={styles.link} href="/links">{content[activeLocale].menu.links}</Link> */}

            <div className={styles.contacts}>
              <div className={styles.contactsPhone}>{content[activeLocale].phone}: <a href="tel:+79995812843">+79995812843</a></div>
              <div className={styles.contactsEmail}>{content[activeLocale].email}: <a href={`mailto:jenia0jenia@mail.ru`}>jenia0jenia@mail.ru</a></div>
              <div className={styles.contactsLink}>{content[activeLocale].telegram}: <a href={`https://t.me/jenia0jenia`}>https://t.me/jenia0jenia</a></div>
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

      {/* <CursorLines></CursorLines> */}

    </>
  )
}