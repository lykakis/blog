import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import PhotoGrid from './components/PhotoGrid.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('PhotoGrid', PhotoGrid)
  }
}
