<template>
  <a-layout>
    <Header />
    <a-layout-content>
      <RouterView />
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

onMounted(() => {
  window.visualViewport.addEventListener('resize', getVisualViewportHeight);
  window.addEventListener('orientationchange', getVisualViewportHeight);
  getVisualViewportHeight();

  const { viewport, zoom } = zoomer();
  const meta = document.head.querySelector('meta[name="viewport"]');
  meta.setAttribute('content', `width=${viewport}, user-scalable=no`);
  document.documentElement.style.zoom = zoom;
});

function zoomer() {
  const width = window.innerWidth;
  const result = {
      viewport: null,
      zoom: null,
  };

  if (width < 1440 && width >= 1024) {
    result.viewport = 1440;
    result.zoom = width / 1440;
  } else if (width >= 768 && width < 1024) {
    result.viewport = 768;
    result.zoom = 1;
  } else if (width < 768) {
    result.viewport = 375;
    result.zoom = 1;
  }

  return result;
}

function getVisualViewportHeight() {
  const doc = document.documentElement;
  doc.style.setProperty('--visual-viewport-height', `${window.visualViewport.height}px`);
}
</script>

<style lang="scss">
@import 'assets/scss/utils.scss';
@import 'assets/scss/variables.scss';
@import '/public/css/fonts.css';

:root {
  @include colors;

  --font: 'Gotham', sans-serif;
}

body {

  @media (min-width: 768px) {
    font: 16px/1.3 var(--font) !important;
  }

  @media (max-width: 767px) {
    font: 14px/22px var(--font) !important;
  }
}

main {
  background-color: var(--gray-1);
}

#app {
  height: 100%;
}

.ant-layout {
  @media (min-width: 1024px) {
    min-height: 100% !important;
  }

  @media (max-width: 1023px) {
    min-height: var(--visual-viewport-height) !important;
  }
}
</style>

<style lang="less">
@import 'ant-design-vue/dist/antd.less';
@import '@/assets/scss/antd.less';
</style>
