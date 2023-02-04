import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import LocaleSwitcher from '../components/locale-switcher'
import YA from '../components/ya'
import GA from '../components/ga'

// const inter = Inter({ subsets: ['latin', 'cyrillic', ] })

const content = {
  "ru": {
    title: "созидание красивых сайтов",
    description: "веб сайты могут быть другими.",
    slogan: "созидание красивых сайтов",
    phone: "Телефон",
    email: "Почта",
    menu: {
      links: "Ссылки"
    },
  },
  "ua": {
    title: "створювати красиві сайти",
    description: "веб-сайти можуть бути іншими.",
    slogan: "створювати красиві сайти",
    phone: "Телефон",
    email: "Пошта",
    menu: {
      links: "Ссылки"
    },    
  },
  "en": {
    title: "beautiful websites development",
    description: "websites may be different.",
    slogan: "beautiful websites development",
    phone: "Phone",
    email: "E-mail",
    menu: {
      links: "Ссылки"
    },    
  },
  "fr": {
    title: "construire de beaux sites Web",
    description: "les sites Web peuvent être différents.",
    slogan: "construire de beaux sites Web",
    phone: "Téléphone",
    email: "Poster",
    menu: {
      links: "Ссылки"
    },    
  },
  "ch": {
    title: "建立漂亮的网站",
    description: "网站可能不同。",
    slogan: "建立漂亮的网站",
    phone: "电话号码",
    email: "电子信箱",
    menu: {
      links: "Ссылки"
    },    
  },
};

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
        <GA></GA>
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
    </>
  )
}