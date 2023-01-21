// @ts-check

/**
 * @type {import('next').NextConfig}
**/
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ru', 'ua', 'en', 'fr', 'ch'],
    defaultLocale: 'ru',
    domains: [
      {
        domain: 'ru.jenia0jenia.ru',
        defaultLocale: 'ru',
      },
      {
        domain: 'ua.jenia0jenia.ru',
        defaultLocale: 'ua',
      },
      {
        domain: 'en.jenia0jenia.ru',
        defaultLocale: 'en',
      },
      {
        domain: 'fr.jenia0jenia.ru',
        defaultLocale: 'fr',
        // an optional http field can also be used to test
        // locale domains locally with http instead of https
        // http: true,
      },
      {
        domain: 'ch.jenia0jenia.ru',
        defaultLocale: 'ch',
      },
    ],
  },
}

module.exports = nextConfig