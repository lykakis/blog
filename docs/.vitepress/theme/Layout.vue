<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import ArticleMeta from './components/ArticleMeta.vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <ArticleMeta v-if="frontmatter.readTime" />
    </template>
  </Layout>
</template>
