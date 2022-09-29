<template>
  <a-layout-header>
    
  </a-layout-header>
  <header :class="$style.header">
    <div class="header__content container">
      <Logo />
      <Menu />
      <div style="width: 230px"></div>
    </div>
  </header>
</template>

<script setup>
import Menu from '@/components/Menu.vue';
</script>

<style lang="scss" module>
@import 'src/assets/scss/utils.scss';

.header {
  height: 68px;
  background: var(--white);
  &__content {
    height: 100%;
    @extend %flex-space-between;
  }
}
</style>
