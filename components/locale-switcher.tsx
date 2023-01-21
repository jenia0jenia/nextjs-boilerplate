import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/Local.module.scss'

export default function LocaleSwitcher() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router

  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  )

  return (
    <div className={styles.local}>
      <ul className={styles.localList}>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          return (
            <li key={locale} className={styles.localItem} >
              <Link
                className={styles.localLink}
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
                legacyBehavior
              >
                {locale}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}


// const content = {
//   "ru": {
//     en: "англ.",
//     fr: "фр.",
//     ch: "кит.",
//   },
//   "en": {
//     ru: "ru",
//     fr: "fr",
//     ch: "ch",
//   },
//   "fr": {
//     ru: "russe",
//     en: "anglais",
//     ch: "сhinois",
//   },
//   "ch": {
//     ru: "俄语",
//     en: "英语",
//     fr: "法语",
//   },
// };