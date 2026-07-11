import DefaultTheme from 'vitepress/theme'
import PhotoGrid from './components/PhotoGrid.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PhotoGrid', PhotoGrid)
  }
}
