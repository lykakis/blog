<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter, page } = useData()
</script>

<template>
  <div v-if="frontmatter.date || frontmatter.readTime" class="article-meta">
    <time v-if="frontmatter.date" :datetime="frontmatter.date">
      {{ new Date(frontmatter.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }) }}
    </time>
    <span v-if="frontmatter.date && frontmatter.readTime" class="separator">·</span>
    <span v-if="frontmatter.readTime">{{ frontmatter.readTime }}</span>
  </div>
</template>

<style scoped>
.article-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin-top: -0.5rem;
  margin-bottom: 1.5rem;
}

.separator {
  opacity: 0.4;
}
</style>
