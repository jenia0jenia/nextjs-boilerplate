import Head from 'next/head'
// import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import LocaleSwitcher from '../components/locale-switcher'
import YA from '../components/ya'

// const inter = Inter({ subsets: ['latin', 'cyrillic', ] })

const content = {
  "ru": {
    title: "созидание красивых сайтов",
    phone: "Телефон",
    email: "Почта",
  },
  "ua": {
    title: "створювати красиві сайти",
    phone: "Телефон",
    email: "Пошта",
  },
  "en": {
    title: "beautiful websites development",
    phone: "Phone",
    email: "E-mail",
  },
  "fr": {
    title: "construire de beaux sites Web",
    phone: "Téléphone",
    email: "Poster",
  },
  "ch": {
    title: "建立漂亮的网站",
    phone: "电话号码",
    email: "电子信箱",
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
        <title>jenia0jenia.ru {content[activeLocale].title}</title>
        <meta name="description" content="sites development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
        <YA></YA>
      </Head>

      <main className={`${activeLocale} ${styles.main}`}>
        <LocaleSwitcher />
        <div className={styles.video}>
          <video loop muted autoPlay poster="images/murmuration.avif" className={styles.video} id="video">
            <source src="murmuration.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className={styles.overlay}></div>
        <div className={styles.center}>
          <div className={styles.businessCard}>
            <div className={styles.businessCardTitle}>{content[activeLocale].title}</div>
            {/* <div className={styles.businessCardPhone}>{content[activeLocale].phone}: <a href="tel:+79995812843">+79995812843</a></div> */}
            {/* <div className={styles.businessCardEmail}>{content[activeLocale].email}: <a href={`mailto:${activeLocale}@jenia0jenia.ru`}>{activeLocale}@jenia0jenia.ru</a></div> */}
          </div>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contactsPhone}>{content[activeLocale].phone}: <a href="tel:+79995812843">+79995812843</a></div>
          <div className={styles.contactsEmail}>{content[activeLocale].email}: <a href={`mailto:${activeLocale}@jenia0jenia.ru`}>{activeLocale}@jenia0jenia.ru</a></div>
        </div>
      </main>
    </>
  )
}