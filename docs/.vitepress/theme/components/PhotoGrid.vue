<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Photo {
  src: string
  alt: string
  caption?: string
}

const props = defineProps<{
  photos: Photo[]
}>()

const selectedIndex = ref<number | null>(null)

function openLightbox(index: number) {
  selectedIndex.value = index
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  selectedIndex.value = null
  document.body.style.overflow = ''
}

function prev() {
  if (selectedIndex.value !== null && selectedIndex.value > 0) {
    selectedIndex.value--
  }
}

function next() {
  if (selectedIndex.value !== null && selectedIndex.value < props.photos.length - 1) {
    selectedIndex.value++
  }
}

function onKeydown(e: KeyboardEvent) {
  if (selectedIndex.value === null) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="photo-grid">
    <figure
      v-for="(photo, index) in photos"
      :key="index"
      class="photo-item"
      @click="openLightbox(index)"
    >
      <img :src="photo.src" :alt="photo.alt" loading="lazy" />
      <figcaption v-if="photo.caption" class="caption">{{ photo.caption }}</figcaption>
    </figure>
  </div>

  <div v-if="selectedIndex !== null" class="lightbox" @click="closeLightbox">
    <button
      class="lightbox-close"
      @click.stop="closeLightbox"
      aria-label="Close"
    >&times;</button>

    <button
      v-if="selectedIndex > 0"
      class="lightbox-nav lightbox-prev"
      @click.stop="prev"
      aria-label="Previous"
    >&#8249;</button>

    <button
      v-if="selectedIndex < photos.length - 1"
      class="lightbox-nav lightbox-next"
      @click.stop="next"
      aria-label="Next"
    >&#8250;</button>

    <div class="lightbox-content" @click.stop>
      <img
        :src="photos[selectedIndex].src"
        :alt="photos[selectedIndex].alt"
        class="lightbox-image"
      />
      <p v-if="photos[selectedIndex].caption" class="lightbox-caption">
        {{ photos[selectedIndex].caption }}
      </p>
    </div>

    <div class="lightbox-counter">
      {{ selectedIndex + 1 }} / {{ photos.length }}
    </div>
  </div>
</template>

<style scoped>
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.photo-item {
  margin: 0;
  cursor: pointer;
}

.photo-item img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.caption {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin-top: 0.25rem;
  text-align: center;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90vw;
  max-height: 90vh;
}

.lightbox-image {
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
}

.lightbox-caption {
  color: #ccc;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  text-align: center;
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 2.5rem;
  cursor: pointer;
  line-height: 1;
  opacity: 0.7;
}

.lightbox-close:hover {
  opacity: 1;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #fff;
  font-size: 4rem;
  cursor: pointer;
  line-height: 1;
  opacity: 0.6;
  padding: 0 1rem;
  user-select: none;
}

.lightbox-nav:hover {
  opacity: 1;
}

.lightbox-prev {
  left: 1rem;
}

.lightbox-next {
  right: 1rem;
}

.lightbox-counter {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: #aaa;
  font-size: 0.9rem;
}
</style>
