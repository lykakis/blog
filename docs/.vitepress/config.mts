import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Pavlos Lykakis',
  description: 'Notes and thoughts',
  base: '/',
  themeConfig: {
    siteTitle: 'Pavlos Lykakis',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Articles', link: '/articles/' },
      { text: 'Photos projects', link: '/photos/' },
      { text: 'About', link: '/about' }
    ],
    footer: {
      message: 'Built with Markdown, VitePress, and GitHub Pages.',
      copyright: 'Personal notes and thoughts.'
    }
  }
})
