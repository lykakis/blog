import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Pavlos Lykakis',
  description: 'Software engineering notes and thoughts',
  base: '/',
  themeConfig: {
    siteTitle: 'Pavlos Lykakis',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link: '/articles/' },
      { text: 'About', link: '/about' }
    ],
    footer: {
      message: 'Built with Markdown, VitePress, and GitHub Pages.',
      copyright: 'Personal software engineering notes and thoughts.'
    }
  }
})
