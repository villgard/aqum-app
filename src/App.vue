<template>
  <a-layout>
    <Header />
    <a-layout-content>
      <RouterView />
    </a-layout-content>
    <a-layout-footer>
      <Footer />
    </a-layout-footer>
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
});

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
}

#app {
  min-height: var(--visual-viewport-height);
}
</style>

<style lang="less">
@import 'ant-design-vue/dist/antd.less';
@import '@/assets/scss/antd.less';
</style>
