import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Pavlos Lykakis',
  description: 'Software engineer in Heraklion, Crete. Writing about software engineering, communication, and photography.',
  base: '/',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Pavlos Lykakis' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'Pavlos Lykakis', href: '/feed.xml' }],
  ],

  sitemap: {
    hostname: 'https://lykakis.dev',
  },

  themeConfig: {
    siteTitle: 'Pavlos Lykakis',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/', activeMatch: '/projects/' },
      { text: 'Writing', link: '/articles/', activeMatch: '/articles/' },
      { text: 'Photography', link: '/photos/', activeMatch: '/photos/' },
      { text: 'About', link: '/about', activeMatch: '/about' }
    ],
    footer: {
      message: '© Pavlos Lykakis',
      copyright: ''
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lykakis' }
    ]
  }
})
