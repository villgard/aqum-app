<template>
  <header class="header">
    <div class="header__content container">
      <Logo />
      <Menu />
      <div style="width: 230px;"></div>
    </div>
  </header>
</template>

<script setup>
import Menu from '../../Menu/index.vue';

</script>

<style lang="scss">
@import "src/assets/scss/utils.scss";

.header {
  height: 68px;
  background: var(--white);
  &__content {
    height: 100%;
    @extend %flex-space-between;
  }
}
</style>
